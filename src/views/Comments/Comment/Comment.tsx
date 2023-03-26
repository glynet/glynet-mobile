import { Image, Platform, Pressable, Text, TouchableOpacity, View } from "react-native"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import styles from "./Comment.style"
import { ArrowRightIosIcon, HeartFilledIcon, HeartOutlineIcon } from "../../../utils/icons"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import BottomModal from "../../../utils/modal"
import Dropdown from "../Dropdown/Dropdown"
import moment from "moment"
import { sliceText } from "../../../utils/functions"
import FastImage from "react-native-fast-image"
function Comment({ item, navigation }: any) {
    const [likeCount, setLikeCount] = useState<number>(0)
    const [isLiked, setLiked] = useState<boolean>(false)

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

    useEffect(() => {
        setLiked(item.comment.likes.is_liked)
        setLikeCount(item.comment.likes.count)
    }, [])

    return (
        <View
            style={styles.comment}
            // onLongPress={handlePresentModalPress}
        >
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <Dropdown modalRef={bottomSheetModalRef} />
            </BottomModal>

            <Image
                style={styles.comment_author_avatar}
                source={{
                    uri: global.CDN_URL + "/" + item.user.avatar,
                }}
            />
            <View
                style={{
                    ...styles.comment_right,
                    width: "100%",
                }}
            >
                <View style={styles.comment_content}>
                    <Text style={styles.comment_author_name}>{item.user.username}</Text>
                    <Text style={styles.comment_text}>{item.comment.content}</Text>
                    {item.comment.attachments.length !== 0 && (
                        <>
                            <View style={styles.comment_attachment_container}>
                                <Image
                                    style={styles.comment_attachment_content}
                                    source={{
                                        uri: item.comment.attachments[0],
                                    }}
                                />
                            </View>
                        </>
                    )}
                    <View style={styles.comment_bottom}>
                        <View style={styles.comment_bottom_left}>
                            <Text style={styles.comment_date}>{moment.unix(item.timestamp).fromNow()}</Text>
                            <Text style={[styles.comment_date, styles.reply_button]}>yanıtla</Text>
                        </View>
                        <TouchableOpacity onPress={() => setLiked(!isLiked)} style={styles.comment_button_container} activeOpacity={1}>
                            {!isLiked && <HeartOutlineIcon style={styles.comment_button} />}
                            {isLiked && (
                                <HeartFilledIcon
                                    style={{
                                        ...styles.comment_button,
                                        fill: "red",
                                    }}
                                />
                            )}
                            <Text style={[styles.comment_button_value, isLiked ? { color: "red" } : null]}>{likeCount}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {item.reply_count !== 0 && (
                    <TouchableOpacity
                        activeOpacity={0.8}
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
                                            style={styles.reply_author_avatar}
                                            source={{
                                                uri: global.CDN_URL + "/" + reply.user.avatar,
                                            }}
                                        />
                                        <View style={styles.reply_content}>
                                            <Text style={styles.reply_author_name}>{sliceText(reply.user.username, 20, true)}</Text>
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
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default Comment
