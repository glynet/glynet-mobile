import React, { useEffect, useState } from "react"
import { View, StyleSheet, ActivityIndicator, Platform, FlatList } from "react-native"
import Post from "./Post/Post"
import getTheme from "../../constants/colors"
import Alert from "../Alert/Alert"
import AmongNature from "../../utils/illustrations/AmongNature"
import Safe from "../../utils/illustrations/Safe"
import { useSelector } from "react-redux"
import { getPosts } from "./PostsAPI"
import { useRoute } from "@react-navigation/native"

const theme = getTheme()

export default function Posts({ type, params, navigation, privateProfile }: any) {
    const state = useSelector((state: any) => state) as any

    const [onFetching, setFetching] = useState<boolean>(false)
    const [isFetched, setFetched] = useState<boolean>(false)
    const [posts, setPosts] = useState([]) as any
    const [code, setCode] = useState<number>(0)

    const route = useRoute()

    useEffect(() => {
        if (!navigation.isFocused()) return
        if (onFetching) return

        if (privateProfile) {
            setFetched(true)
            setCode(64)
        } else {
            setFetched(false)
            setFetching(true)

            let customParams = params

            if (type === "profile") customParams = `username=${(route.params as any).name}`

            getPosts(type, customParams, (response: any) => {
                const data = response.data

                setFetched(true)
                setCode(data?.code)
                setFetching(false)

                if (data.status) {
                    setPosts(data.list)
                }
            })
        }
    }, [type, params, state.preferences.setRefresh])

    return (
        <View style={styles.posts}>
            {isFetched && code === 64 && posts.length === 0 && type === "profile" && (
                <Alert
                    image={<Safe themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />}
                    title={"Orada dur bakalım"}
                    description={`@${(route.params as any).name} gönderilerini yalnızca onu takip edenlerin görmesine izin veriyor, gönderileri görmek istiyorsan öncelikle takip isteği yollamalısın.`}
                />
            )}

            {isFetched && code === 0 && posts.length === 0 && type === "profile" && (
                <Alert
                    image={<AmongNature themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />}
                    title={"Gösterecek bir şey bulamadık"}
                    description={`@${(route.params as any).name} henüz hiç gönderi paylaşmamış!`}
                />
            )}
            {isFetched && code === 0 && posts.length === 0 && type !== "profile" && (
                <Alert
                    image={<AmongNature themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />}
                    title={"Gösterecek bir şey bulamadık"}
                    description={"Buralar tozlu raflardan ibaret"}
                />
            )}

            {isFetched &&
                posts.map((post: any, index: number) => {
                    return <Post content={post} key={index} navigation={navigation} />
                })}

            {!isFetched && (
                <View
                    style={{
                        backgroundColor: theme.BOX_BACKGROUND,
                        width: "100%",
                        // borderRadius: 15,
                        // marginBottom: 12,
                        padding: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} color={theme.THEME_COLOR} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    posts: {},
    post_filters: {
        padding: 12,
        backgroundColor: "red",
    },
})
