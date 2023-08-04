import React, { useEffect, useState } from "react"
import { View, FlatList, Dimensions } from "react-native"
import Item from "./Item/Item"
import AppContainer from "../../utils/screen"
import styles from "./UserList.style"
import { useRoute } from "@react-navigation/native"
import getTheme from "../../constants/colors"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { getUserList } from "./UserListAPI"
import AmongNature from "../../utils/illustrations/AmongNature"
import Alert from "../../components/Alert/Alert"
import Loader from "../../components/Loader/Loader"

const theme = getTheme()

export default function UserList({ navigation }: any) {
    const route = useRoute() as any
    const insets = useSafeAreaInsets()

    const [isFetching, setFetching] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [fetchedData, setFetchedData] = useState<any>([])
    const [pageCount, setCount] = useState<number>(0)
    const [moreData, setMoreData] = useState<boolean>(true)

    const pageHeight = Dimensions.get("window").height - insets.bottom - insets.top - 60

    useEffect(() => {
        setTimeout(() => {
            console.log(fetchedData.length, pageCount)

            let url = ""
            setLoading(true)

            switch (route.params?.type) {
                case "likes":
                    url = "/api/@me/v1/posts/likes?page=" + pageCount + "&q=" + route.params?.value
                    break
                case "comment_likes":
                    url = "/api/@me/v1/comments/likes?page=" + pageCount + "&q=" + route.params?.value
                    break
                case "followers":
                    url = "/api/@me/v1/profile/followers?username=" + route.params?.value + "&page=" + pageCount
                    break
                case "followings":
                    url = "/api/@me/v1/profile/followings?username=" + route.params?.value + "&page=" + pageCount
                    break
                case "follow_requests":
                    url = "/api/@me/v1/client/follow_requests"
                    break
            }

            if (moreData) {
                if (url !== "") {
                    (async () => {
                        await getUserList(url, (response: any) => {
                            const data = response.data

                            if (data.available) {
                                setFetching(true)
                                setLoading(false)

                                if (data.data.length <= 15) {
                                    setMoreData(false)
                                }

                                if (data.data.length !== 0) {
                                    setFetchedData([...fetchedData, ...data.data])
                                } else {
                                    setMoreData(false)
                                }
                            } else {
                                if (fetchedData.length === 0) {
                                    setFetching(false)
                                    navigation.goBack()
                                }
                            }
                        })
                    })()
                } else {
                    navigation.goBack()
                }
            }
        }, 250)
    }, [pageCount])

    return (
        <AppContainer
            headerTitle={route.params?.type === "comment_likes" ? "Yorumu Beğenenler" : route.params?.type === "likes" ? "Beğeniler" : route.params?.type === "followers" ? "Takipçiler" : route.params?.type === "follow_requests" ? "Takip İstekleri" : "Takip Edilenler"}
            hideTabs={false}
            navigation={navigation}
        >
            <View style={styles.notifications_container}>
                {isFetching && fetchedData.length === 0 && (
                    <View
                        style={{
                            height: pageHeight,
                            justifyContent: "center",
                        }}
                    >
                        <Alert
                            image={<AmongNature themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />}
                            title={"Antik kalıntı mı arıyorsun?"}
                            description={"Buralar uzun zamandır ıssızlıktan ibaret..."}
                        />
                    </View>
                )}

                {isFetching && fetchedData.length !== 0 && (
                    <FlatList
                        style={{ height: pageHeight }}
                        removeClippedSubviews={false}
                        data={fetchedData}
                        renderItem={({ item, index }) => <Item type={route.params?.type} item={item} key={index} index={index} navigation={navigation} />}
                        onEndReached={({ distanceFromEnd }: any) => {
                            if (distanceFromEnd < 0) return

                            if (!moreData) return
                            if (!isLoading) setCount(pageCount + 1)
                        }}
                        ListFooterComponent={() => {
                            if (isLoading) {
                                return (
                                    <Loader style={{ padding: 40 }} clearStyles={true} />
                                )
                            }

                            return null
                        }}
                        onEndReachedThreshold={0.5}
                    />
                )}

                {!isFetching && fetchedData.length === 0 && (
                    <Loader style={{ height: pageHeight }} />
                )}
            </View>
        </AppContainer>
    )
}
