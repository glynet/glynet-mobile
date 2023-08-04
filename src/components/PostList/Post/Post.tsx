import React, { useCallback, useMemo, useRef, useState } from "react"
import { View, Image, Text, Pressable } from "react-native"
import styles from "./Post.style"
import { Post as PostType } from "../../../../../glynet-api/source/models/post.model"
import cdnUrl from "../../../helpers/cdnUrl"
import moment from "moment"
import { FlashFilledIcon, PaperPlaneIcon, VerifiedIcon } from "../../../utils/icons"

import "moment/locale/tr";
import { calculateUserFlags } from "../../../utils/flags"
import TextView from "../../TextView/TextView"
import { LinearGradient } from 'expo-linear-gradient';

import { Video } from "expo-av"
import { useSelector } from "react-redux"

import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomModal from "../../../utils/modal"
import Options from "../Options/Options"
import { BottomSheetModal } from "@gorhom/bottom-sheet"

import { View as MotiView } from "moti"
import Attachments from "./Attachments"
import { like, save } from "../PostListAPI"
import getTheme from "../../../constants/colors"
import Avatar from "../../Avatar/Avatar"

const theme = getTheme()

// TODO: Konum eklenecek, hashtagler listeleniyor onu da değerlendirebiliriz, uzun basılı tutunca options gelecek
// TODO: Redditdeki gibi yeşil tema eklenecek

function Post({ entry, index, isVisible, navigation }: { entry: PostType, index: number, isVisible: boolean, navigation: any }) {
    const state = useSelector((state: any) => state.preferences) as any

    // const isVisible = [index - 2, index - 1, index, index + 1, index + 2].includes(state.postIndex)

    const [isLiked, setLiked] = useState(entry.is_liked)
    const [isSaved, setSaved] = useState(entry.is_saved)
    const [likeCount, setLikeCount] = useState(entry.metrics.like_count)

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

    const _like = useCallback(() => {
        if (isLiked) {
            setLikeCount(Math.abs(likeCount - 1))
            setLiked(false)
        } else {
            setLikeCount(Math.abs(likeCount + 1))
            setLiked(true)
        }

        like(entry.id)
    }, [])

    const _save = useCallback(() => {
        setSaved(!isSaved)
        save(entry.id)
    }, [])

    return (
        <View>
            <View style={styles.container}>
                <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["43%", "43%"], [])}>
                    <Options isMarked={isSaved} updateMarked={_save} navigation={navigation} modalRef={bottomSheetModalRef} />
                </BottomModal>

                <View style={{...styles.padding_container, ...styles.author_container_parent}}>
                    <View style={styles.author_container}>
                        <Avatar
                            src={cdnUrl(entry.publisher.data.avatar)}
                            size={45}
                            radius={100}
                            onPress={() => {
                                navigation.push("Profile", {
                                    name: entry.publisher.data.username,
                                })
                            }}
                        />

                        <View style={styles.author_details}>
                            <View style={styles.author_name_container}>
                                <Text style={styles.author_name} onPress={() => {
                                    navigation.push("Profile", {
                                        name: entry.publisher.data.username,
                                    })
                                }}>{entry.publisher.data.name}</Text>
                                {calculateUserFlags(entry.publisher.data.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.author_badge} />}
                            </View>
                            <Text style={styles.entry_date}>{moment.unix(entry.published_at_unix).fromNow()}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.entry_options_container} onPress={handlePresentModalPress}>
                        <MaterialCommunityIcons name="dots-vertical" size={24} color={theme.TERTIARY_COLOR} />
                    </Pressable>
                </View>

                {entry.text_range[1] !== 0 && (
                    <View style={{...styles.padding_container, ...styles.entry_text_container}}>
                        <TextView style={styles.entry_text}>{entry.full_text}</TextView>
                    </View>
                )}

                {(entry.media_attachments.length !== 0 && entry.is_loop) && (
                    <Pressable
                        onPress={() => {
                            navigation.push("Loops", {
                                collect: "post",
                                loop_id: entry.id,
                            })
                        }}
                        style={styles.entry_loop_container}
                    >
                        <View style={styles.entry_loop_attachment}>
                            <View style={styles.entry_loop_icon_container}>
                                <FlashFilledIcon style={styles.entry_loop_icon} />
                            </View>
                            {isVisible && (
                                <Video
                                    // @ts-ignore
                                    resizeMode={"cover"}
                                    style={styles.entry_loop_attachment}
                                    usePoster={true}
                                    posterSource={entry.media_attachments[0].thumbnail_url ? {
                                        uri: cdnUrl(entry.media_attachments[0].thumbnail_url)
                                    } : undefined}
                                    posterStyle={{
                                        resizeMode: "cover"
                                    }}
                                    source={{
                                        uri: cdnUrl(entry.media_attachments[0].media_url),
                                    }}
                                    useNativeControls={false}
                                    rate={1.0}
                                    volume={1.0}
                                    isLooping={true}
                                    isMuted={true}
                                    shouldPlay={true}
                                />
                            )}

                            <MotiView
                                animate={{
                                    opacity: isVisible ? 1 : 0
                                }}
                                transition={{
                                    delay: isVisible ? 5000 : 0,
                                    type: "timing",
                                    duration: 300,
                                }}
                                style={styles.click_to_continue_loop_container}
                            >
                                <LinearGradient
                                    colors={["rgba(0,0,0,0.20)", "rgba(0,0,0,0.60)"]}
                                    style={styles.click_to_continue_loop_container}
                                >
                                    <View style={styles.continue_button}>
                                        <Text style={styles.continue_button_text}>{"İzlemeye devam edin"}</Text>
                                    </View>
                                </LinearGradient>
                            </MotiView>
                        </View>
                    </Pressable>
                )}

                {(entry.media_attachments.length !== 0 && !entry.is_loop) && (
                    <Attachments entry={entry} navigation={navigation} isVisible={isVisible} />
                )}

                {(likeCount !== 0 || entry.metrics.reply_count !== 0) && (
                    <View style={{...styles.padding_container, ...styles.entry_metrics}}>
                        {likeCount >= 2 && (
                            <Pressable
                                style={styles.entry_metrics_mini_users}
                                onPress={() => {
                                    navigation.push("UserList", {
                                        type: "likes",
                                        value: entry.id,
                                    })
                                }}
                            >
                                {Array(3).fill(1).map((_, i) => {
                                    return (
                                        <Image
                                            fadeDuration={0}
                                            key={i}
                                            style={styles.entry_metrics_mini_user_avatar}
                                            source={{
                                                uri: cdnUrl(entry.publisher.data.avatar)
                                            }}
                                        />
                                    )
                                })}
                            </Pressable>
                        )}

                        <View style={styles.entry_metrics_details}>
                            {likeCount !== 10 && (
                                <Text style={styles.entry_metrics_text} onPress={() => {
                                    navigation.push("UserList", {
                                        type: "likes",
                                        value: entry.id,
                                    })
                                }}>
                                    <Text style={styles.entry_metrics_text_bold}>{likeCount}</Text> beğeni
                                </Text>
                            )}
                            {entry.metrics.reply_count !== 0 && (
                                <Text style={styles.entry_metrics_text} onPress={() => {
                                    navigation.navigate("Comments", {
                                        post_id: entry.id,
                                        is_reply: false,
                                    })
                                }}>
                                    <Text style={styles.entry_metrics_text_bold}>{entry.metrics.reply_count}</Text> yorum
                                </Text>
                            )}
                        </View>
                    </View>
                )}

                <View style={[styles.button_container, !(likeCount !== 0 || entry.metrics.reply_count !== 0) && { borderTopWidth: 0 }]}>
                    <Pressable style={styles.button} onPress={_like}>
                        <MaterialCommunityIcons name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "#FF4545" : "#8C9299"} />
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => {
                        navigation.navigate("Comments", {
                            post_id: entry.id,
                            is_reply: false,
                        })
                    }}>
                        <MaterialCommunityIcons name="comment-processing-outline" size={24} color="#8C9299" />
                    </Pressable>
                    <Pressable style={styles.button}>
                        <PaperPlaneIcon style={styles.button_icon} />
                    </Pressable>
                    <Pressable style={styles.button} onPress={_save}>
                        <MaterialCommunityIcons name={isSaved ? "bookmark" : "bookmark-outline"} size={24} color={isSaved ? "#33A5A4" : "#8C9299"} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Post
