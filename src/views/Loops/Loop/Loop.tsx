import React, { useEffect, useRef } from "react"
import { View, Image, Dimensions, Pressable, ActivityIndicator } from "react-native"
import styles from "./Loop.style"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Video } from "expo-av"
import { useSelector } from "react-redux"
import { useIsFocused } from "@react-navigation/native"
import cdnUrl from "../../../helpers/cdnUrl"
import Card from "./Card"

import { Post } from "../../../../../glynet-api/source/models/post.model"

export const Loop = ({ item, index, navigation }: { item: Post; index: number; navigation: any }) => {
    const state = useSelector((state: any) => state.preferences) as any

    const ref = useRef<any>(null)
    const isFocused = useIsFocused()

    const insets = useSafeAreaInsets()
    const pageHeight = Dimensions.get("window").height - insets.bottom - insets.top - 60

    const play = async () => {
        if (ref.current == null) return

        const status = await ref.current.getStatusAsync()

        if (status?.isPlaying) return

        try {
            await ref.current.playAsync()
        } catch (e) {
            console.log(e)
        }
    }

    const stop = async () => {
        if (ref.current === null) return

        const status = await ref.current.getStatusAsync()

        if (!status?.isPlaying) return

        try {
            await ref.current.stopAsync()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (isFocused && state.loopId === index) {
            play()
        } else {
            stop()
        }
    }, [isFocused, state.loopId])

    return (
        <Pressable style={{ ...styles.pressable, height: pageHeight }}>
            {[index - 1, index, index + 1].includes(state.loopId) && item.media_attachments.length !== 0 && (
                <View style={{ ...styles.content, height: pageHeight }}>
                    <View style={{ ...styles.loader, height: pageHeight }}>
                        <ActivityIndicator size={"large"} color={"#B5B5B5"} />
                    </View>

                    {item.media_attachments[0].media_type === "video" && (
                        <Video
                            // TODO: Daha sonra contain olarak değiştirilecek
                            // @ts-ignore
                            resizeMode={"cover"}
                            ref={ref}
                            style={[styles.loop_attachment, { height: pageHeight }]}
                            usePoster={true}
                            source={{
                                uri: cdnUrl(item.media_attachments[0].media_url),
                            }}
                            useNativeControls={false}
                            rate={1.0}
                            volume={1.0}
                            isLooping={true}
                            isMuted={false}
                            shouldPlay={false}
                        />
                    )}
                    {item.media_attachments[0].media_type === "image" && (
                        <Image
                            style={styles.loop_attachment}
                            source={{
                                uri: cdnUrl(item.media_attachments[0].media_url),
                            }}
                        />
                    )}
                </View>
            )}

            <Card content={item} index={index} navigation={navigation} />
        </Pressable>
    )
}

export default Loop
