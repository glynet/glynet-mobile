import { Image, Text, TouchableOpacity, View } from "react-native"
import React, { useEffect, useState } from "react"
import { ArrowCornerDownRight, VerifiedIcon } from "../../../utils/icons"
import styles from "./Item.style"
import moment from "moment"
import { useSelector } from "react-redux"
import { calculateUserFlags } from "../../../utils/flags"

export default function Item({ content, index, navigation }: any) {
    const state = useSelector((state: any) => state) as any

    const [notificationText, setText] = useState<string>("")
    const [compactMode, setCompactMode] = useState<boolean>(state.preferences.compactNotifications)

    const _profile = (username: string) => {
        navigation.navigate("Profile", { name: username })
    }

    useEffect(() => {
        switch (content.details.type) {
            case "follow":
                return setText("Seni takip etmeye başladı")
            case "like_comment":
                return setText("Yorumunu beğendi")
            case "reply":
                return setText("Yorumuna yanıt bıraktı")
            case "quote_post":
                return setText("Gönderini alıntıladı")
            case "mention_post":
                return setText("Gönderisinde senden bahsetti")
            case "new_post":
                return setText("Yeni gönderi paylaştı")
            case "follow_request":
                return setText("Seni takip etmek istiyor")
            case "comment":
                return setText("Gönderine yorum bıraktı")
            case "like_post":
                return setText("Gönderini beğendi")
            case "quote_post":
                return setText("Gönderini alıntıladı")
            default:
                return setText("Bir şeyler yaptı")
        }
    }, [])

    useEffect(() => {
        if (!state.preferences.performanceMode) {
            setCompactMode(state.preferences.compactNotifications)
        }
    }, [state.preferences.compactNotifications])

    return (
        <TouchableOpacity activeOpacity={1} style={[styles.notification_container, index === 0 && { borderTopWidth: 0 }]}>
            <TouchableOpacity activeOpacity={1} onPress={() => _profile(content.from.username)} style={styles.notification_avatar}>
                <Image
                    style={styles.notification_avatar}
                    source={{
                        uri: `${global.CDN_URL}/${content.from.avatar}`,
                    }}
                />
            </TouchableOpacity>
            <View style={styles.notification_details}>
                <View style={styles.notification_name_container}>
                    <Text
                        onPress={() => _profile(content.from.username)}
                        style={{
                            ...styles.notification_text,
                            fontFamily: "GilroyBold",
                        }}
                    >
                        {content.from.name}
                    </Text>
                    {calculateUserFlags(content.from.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.user_badge} />}
                </View>
                <Text style={styles.notification_text}>{notificationText}</Text>

                {content.details.extend.post !== undefined && (
                    <View style={styles.embed_post}>
                        {content.details.extend.post.content.type === "image" && (
                            <View style={styles.embed_post_image_container}>
                                <Image
                                    style={[styles.embed_post_image, compactMode && { height: 120 }]}
                                    source={{
                                        uri: `${global.CDN_URL}/${content.details.extend.post.content.attachment}`,
                                    }}
                                />
                            </View>
                        )}
                        {content.details.extend.post.content.text.length !== 0 && (
                            <View style={styles.embed_text_container}>
                                <Text style={styles.embed_text}>
                                    <Text onPress={() => _profile(content.details.extend.post.author.username)} style={{ fontFamily: "GilroyBold" }}>
                                        {content.details.extend.post.author.username}
                                    </Text>{" "}
                                    {content.details.extend.post.content.text.trim()}
                                </Text>
                                {content.details.extend.comment !== undefined && content.details.extend.comment.content.text.length !== 0 && (
                                    <View
                                        style={{
                                            ...styles.embed_comment,
                                            marginTop: 5,
                                        }}
                                    >
                                        <ArrowCornerDownRight style={styles.embed_comment_icon} />
                                        <Text
                                            style={{
                                                ...styles.embed_text,
                                                marginLeft: 3,
                                            }}
                                        >
                                            <Text
                                                onPress={() => _profile(content.details.extend.comment.author.username)}
                                                style={{
                                                    fontFamily: "GilroyBold",
                                                }}
                                            >
                                                {content.details.extend.comment.author.username}
                                            </Text>{" "}
                                            {content.details.extend.comment.content.text.trim()}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        )}
                        {content.details.extend.post.content.text.length === 0 && content.details.extend.comment !== undefined && content.details.extend.comment.content.text.length !== 0 && (
                            <View style={styles.embed_text_container}>
                                <Text style={styles.embed_text}>
                                    <Text onPress={() => _profile(content.details.extend.comment.author.username)} style={{ fontFamily: "GilroyBold" }}>
                                        {content.details.extend.comment.author.username}
                                    </Text>{" "}
                                    {content.details.extend.comment.content.text.trim()}
                                </Text>
                            </View>
                        )}
                    </View>
                )}

                <Text style={styles.notification_date}>{moment.unix(content.timestamp).fromNow()}</Text>
            </View>
        </TouchableOpacity>
    )
}
