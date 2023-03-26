import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Image, View, Text, TouchableOpacity, Pressable, Animated } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styles from "./Loop.style"
import { BookmarkFilledIcon, CommentsFilledIcon, HeartFilledIcon } from "../../../utils/icons"
import { like, save } from "../../../components/Posts/PostsAPI"
import BottomModal from "../../../utils/modal"
import Options from "../../../components/Posts/Options/Options"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import Profile from "./Profile"

import { Post } from "../../../../../glynet-api/source/models/post.model"
import cdnUrl from "../../../helpers/cdnUrl"

const Card = ({ content, index, navigation }: { content: Post; index: number; navigation: any }) => {
    const [likeCount, setLikeCount] = useState<number>(content.metrics.like_count)
    const [isLiked, setLiked] = useState<boolean>(content.is_liked)
    const [isMarked, setMarked] = useState<boolean>(content.is_saved)

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

    const _like = () => {
        if (isLiked) {
            setLikeCount(Math.abs(likeCount - 1))
            setLiked(false)
        } else {
            setLikeCount(Math.abs(likeCount + 1))
            setLiked(true)
        }

        like(content.id)
    }

    const _save = () => {
        setMarked(!isMarked)
        save(content.id)
    }

    return (
        <Pressable
            style={styles.container}
            onLongPress={handlePresentModalPress}
        >
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["43%", "43%"], [])}>
                <Options isMarked={isMarked} updateMarked={_save} navigation={navigation} modalRef={bottomSheetModalRef} />
            </BottomModal>

            {index === 0 && (
                <Animated.View style={[styles.title_container]}>
                    <Text style={styles.title}>loops</Text>
                </Animated.View>
            )}

            <Animated.View style={[styles.details_container]}>
                <LinearGradient style={styles.details} colors={["transparent", "rgba(0, 0, 0, 0.20)", "rgba(0, 0, 0, 0.70)"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                    <Profile author={content.publisher.data} text={content.full_text} navigation={navigation} />

                    <View style={styles.buttons_container}>
                        <View style={[styles.button_container, isLiked && { opacity: 1 }]}>
                            <TouchableOpacity onPress={_like} activeOpacity={0.5}>
                                <HeartFilledIcon style={[styles.button_container.icon, isLiked && styles.button_container.icon_red]} />
                            </TouchableOpacity>

                            <Pressable
                                onPress={() => {
                                    navigation.push("UserList", {
                                        type: "likes",
                                        value: content.id,
                                    })
                                }}
                                style={styles.button_text_container}
                            >
                                <Text style={[styles.button_container.text, isLiked && styles.button_container.text_red]}>{likeCount}</Text>
                            </Pressable>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Comments", {
                                    post_id: content.id,
                                    is_reply: false,
                                })
                            }}
                            style={[styles.button_container]}
                            activeOpacity={0.5}
                        >
                            <CommentsFilledIcon style={styles.button_container.icon} />
                            <View style={styles.button_text_container}>
                                <Text style={styles.button_container.text}>{content.metrics.reply_count}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={_save} style={[styles.button_container, isMarked && { opacity: 1 }]} activeOpacity={0.5}>
                            <BookmarkFilledIcon style={[styles.button_container.icon, isMarked && styles.button_container.icon_orange]} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                if (content.media_attachments[0].is_rich_media) {
                                    navigation.push("Audio", {
                                        audio_id: content.media_attachments[0].audio.attachment_id,
                                    })
                                }
                            }}
                            style={[styles.audio_container, !content.media_attachments[0].is_rich_media && { opacity: 0.5 }]}
                            activeOpacity={0.5}
                        >
                            <Image
                                source={{
                                    uri:
                                        content.media_attachments[0].audio.album_cover && !content.media_attachments[0].audio.is_original_audio
                                            ? cdnUrl(content.media_attachments[0].audio.album_cover)
                                            : cdnUrl(content.publisher.data.avatar),
                                }}
                                style={styles.audio_image}
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </Animated.View>
        </Pressable>
    )
}

export default memo(Card)
