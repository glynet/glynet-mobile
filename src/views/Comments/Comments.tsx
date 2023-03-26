import React, { useEffect, useState } from "react"
import { View, Image, TextInput, Dimensions, ActivityIndicator } from "react-native"
import ScreenContainer from "../../utils/screen"
import Comment from "./Comment/Comment"
import styles from "./Comments.style"
import getTheme from "../../constants/colors"
import { SmilingFace } from "../../utils/icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { getComments } from "./CommentsAPI"
import { useRoute } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"

const theme = getTheme()

function Comments({ navigation }: any) {
    const insets = useSafeAreaInsets()
    const pageHeight = Dimensions.get("window").height - insets.bottom - insets.top - 60

    const route = useRoute() as any

    const [commentContent, setCommentContent] = useState<string>("")
    const [comments, setComments] = useState<any>([])
    const [isFetched, setFetched] = useState<boolean>(false)
    const [loadMore, setLoadMore] = useState<boolean>(true)
    const [showGIF, setShowGIF] = useState<boolean>(false)

    const renderItem = ({ item, index }: any) => {
        return <Comment item={item} navigation={navigation} key={index} />
    }

    useEffect(() => {
        if (route.params?.post_id === undefined && route.params?.is_reply === undefined) {
            console.log("hayır bu", route.params)
            return navigation.goBack()
        }

        if (route.params.is_reply && route.params?.reply_id === undefined) {
            console.log("bu yüzden go back", route.params)
            navigation.goBack()
        }

        if (isFetched) return

        setFetched(true)

        getComments(route.params.post_id, route.params?.reply_id === undefined ? "0" : route.params.reply_id, route.params.is_reply, 0, (response: any) => {
            const data = response.data

            if (data.available) {
                setComments(data.comments)
            }
        })
    }, [])

    return (
        <>
            <ScreenContainer disableScrollView={true} headerTitle={route.params.is_reply ? "Yanıtlar" : "Yorumlar"} hideTabs={true} navigation={navigation}>
                <View style={{ ...styles.container, height: pageHeight - 75 }}>
                    {!isFetched && (
                        <View style={styles.loader}>
                            <ActivityIndicator size={"large"} color={"grey"} />
                        </View>
                    )}
                    {isFetched && <FlashList data={comments} renderItem={renderItem} estimatedItemSize={200} removeClippedSubviews={true} />}
                </View>
            </ScreenContainer>

            {isFetched && (
                <View style={{ ...styles.new_comment, bottom: insets.bottom }}>
                    <Image
                        style={styles.new_comment_avatar}
                        source={{
                            uri: "https://source.unsplash.com/random?human&i" + Math.floor(Math.random() * 50),
                        }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <TextInput
                            value={commentContent}
                            onChangeText={setCommentContent}
                            placeholder={"Bir yorum bırak..."}
                            placeholderTextColor={"#969696"}
                            style={[styles.new_comment_input, { width: Dimensions.get("window").width - 85 }]}
                        />
                    </View>
                    <View style={styles.new_comment_input_buttons_container}>
                        <View style={styles.new_comment_input_button}>
                            <SmilingFace style={styles.new_comment_send} />
                        </View>
                    </View>
                </View>
            )}
        </>
    )
}

export default Comments
