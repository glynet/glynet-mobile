import { Image, Platform, Pressable, Text, View } from "react-native"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import styles from "./Comment.style"
import { ArrowRightIosIcon, HeartFilledIcon, HeartOutlineIcon } from "../../../utils/icons"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import BottomModal from "../../../utils/modal"
import Dropdown from "../Dropdown/Dropdown"
import moment from "moment"
import cdnUrl from "../../../helpers/cdnUrl"
import { Comment as CommentType } from "../../../../../glynet-api/source/models/comment.model"
import { MotiView } from "moti"
import ScaleButton from "../../../components/ScaleButton/ScaleButton"
import { vibrate } from "../../../helpers/vibration"
import Avatar from "../../../components/Avatar/Avatar"
import { likeComment } from "../CommentsAPI"
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Loader from "../../../components/Loader/Loader"

function Comment({ item, navigation, isVisible }: { item: CommentType, navigation: any, isVisible: boolean }) {
    const [likeCount, setLikeCount] = useState<number>(0)
    const [isLiked, setLiked] = useState<boolean>(false)

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

    function _like() {
        if (isLiked) {
            const newValue = likeCount - 1;
            setLikeCount(newValue)
        } else {
            const newValue = likeCount + 1;
            setLikeCount(newValue)
        }

        setLiked(!isLiked)
        vibrate()

        likeComment(item.id, (response: any) => {
            setLiked(response.data.status)
        })
    }

    useEffect(() => {
        setLiked(item.is_liked)
        setLikeCount(item.react_count)
    }, [])

    return (
        <MotiView
            from={item.id === "0" ? { opacity: 0.4 } : { opacity: 0, translateY: 5 }}
            animate={item.id === "0" ? { opacity: 0.8 } : { opacity: 1, translateY: 0 }}
            transition={{
                loop: item.id === "0",
                type: "timing",
                duration: item.id === "0" ? 450 : 100,
                delay: item.id === "0" ? 100 : 300,
            }}
            style={styles.comment}
        >
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <Dropdown modalRef={bottomSheetModalRef} />
            </BottomModal>

            <Avatar
                src={cdnUrl(item.user.data.avatar)}
                size={45}
                radius={100}
                onPress={() => {
                    navigation.push("Profile", { name: item.user.data.username })
                }}
            />

            <View style={styles.comment_right}>
                <View style={styles.comment_content}>
                    <Text style={styles.comment_author_name}>{item.user.data.username}</Text>
                    {item.flags !== 8 && <Text style={styles.comment_text}>{item.content}</Text>}

                    {item.flags === 8 && (
                        <View style={styles.comment_attachment_container}>
                            {!isVisible && (
                                <View style={styles.attachment_loader}>
                                    <Loader clearStyles={true} size={"large"} />
                                </View>
                            )}
                            {isVisible && (<>
                                <View style={styles.attachment_gif_icon}>
                                    <MaterialIcons name="gif" size={38} color="rgb(255,255,255)" />
                                </View>
                                <Image
                                    fadeDuration={0}
                                    style={styles.comment_attachment_content}
                                    source={{
                                        uri: item.content
                                    }}
                                />
                            </>)}
                        </View>
                    )}

                    <View style={styles.comment_bottom}>
                        <View style={styles.comment_bottom_left}>
                            <Text style={styles.comment_date}>{moment.unix(item.timestamp).fromNow()}</Text>
                            {likeCount !== 0 && (
                                <Text
                                    onPress={() => {
                                        navigation.push("UserList", {
                                            type: "comment_likes",
                                            value: item.id
                                        })
                                    }}
                                    style={[styles.comment_date, styles.reply_button]}
                                >{likeCount} beğeni</Text>
                            )}
                        </View>

                        <View style={styles.comment_button_container}>
                            {item.id !== "0" && (
                                <ScaleButton
                                    activeScale={0.7}
                                    onPress={_like}
                                    contentContainerStyle={{ marginRight: 10, }}
                                >
                                    <FontAwesome5 name="reply" size={18} color="#90969D" />
                                </ScaleButton>
                            )}
                            {item.id !== "0" && (
                                <ScaleButton
                                    activeScale={0.7}
                                    onPress={_like}
                                    // contentContainerStyle={styles.comment_button_container}
                                >
                                    {!isLiked && <HeartOutlineIcon style={styles.comment_button} />}
                                    {isLiked && (<HeartFilledIcon style={{
                                        ...styles.comment_button,
                                        fill: "red",
                                    }} />)}
                                </ScaleButton>
                            )}
                        </View>
                    </View>
                </View>
                {(item.reply_count !== 0 && item.replies !== undefined) && (
                    <Pressable
                        onPress={() => {
                            console.log("Basıldı", Platform.OS, moment().unix())
                            navigation.push("Comments", {
                                post_id: item.post_id,
                                reply_id: item.id,
                                is_reply: true,
                            })
                        }}
                    >
                        {item.replies.length !== 0 &&
                            item.replies.map((reply: any, index: number) => {
                                return (
                                    <View style={styles.reply_container} key={index}>
                                        <Image
                                            fadeDuration={0}
                                            style={styles.reply_author_avatar}
                                            source={{
                                                uri: cdnUrl(reply.user.data.avatar),
                                            }}
                                        />
                                        <View style={styles.reply_content}>
                                            <Text style={styles.reply_author_name}>{reply.user.data.username}</Text>
                                            <Text style={styles.reply_author_text}>{reply.comment.content}</Text>
                                            <Text style={styles.reply_author_date}>1 saat önce</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        <View style={styles.replies_count_container}>
                            <Text style={styles.replies_text}>diğer {item.reply_count} yanıtı oku...</Text>
                            <ArrowRightIosIcon style={styles.replies_icon} />
                        </View>
                    </Pressable>
                )}
            </View>
        </MotiView>
    )
}

export default Comment
