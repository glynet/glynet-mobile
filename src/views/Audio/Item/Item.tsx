import React from "react"
import { Image, View, TouchableOpacity } from "react-native"
import { FlashIconFilled } from "../../../utils/icons"
import styles from "./Item.style"

import { Audio as AudioType } from "../../../../../glynet-api/source/models/post.model"
import cdnUrl from "../../../helpers/cdnUrl"

export default function Item({ item, navigation }: { item: AudioType, navigation: any }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={() => {
                navigation.push("Loops", {
                    collect: "post",
                    loop_id: item.entry_id,
                })
            }}
        >
            {item.attachments[0].thumbnail_url && (
                <Image
                    fadeDuration={0}
                    source={{
                        uri: cdnUrl(item.attachments[0].thumbnail_url),
                    }}
                    style={styles.thumbnail}
                />
            )}
            {item.attachments[0].audio.is_original_audio && (
                <View style={styles.original_loop}>
                    <FlashIconFilled style={styles.original_loop_icon} />
                </View>
            )}
        </TouchableOpacity>
    )
}
