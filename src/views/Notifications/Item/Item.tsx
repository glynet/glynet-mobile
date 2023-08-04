import { Pressable, Image, Text, TouchableOpacity, View } from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { ArrowCornerDownRight, VerifiedIcon } from "../../../utils/icons"
import styles from "./Item.style"
import moment from "moment"
import { useSelector } from "react-redux"
import { calculateUserFlags } from "../../../utils/flags"
import Avatar from "../../../components/Avatar/Avatar"
import cdnUrl from "../../../helpers/cdnUrl"

const hightlightPalette = [
    {
        borderLeftColor: "rgba(40,199,214,1)",
        backgroundColor: "rgba(40,199,214,0.03)",
    },
    {
        borderLeftColor: "rgba(234,64,200,1)",
        backgroundColor: "rgba(234,64,200,0.03)",
    },
    {
        borderLeftColor: "rgba(59,246,134,1)",
        backgroundColor: "rgba(59,246,134,0.03)",
    },
    {
        borderLeftColor: "rgba(246,131,59,1)",
        backgroundColor: "rgba(246,131,59,0.03)",
    },
    {
        borderLeftColor: "rgba(162,92,254,1)",
        backgroundColor: "rgba(162,92,254,0.038)",
    }
]

export default function Item({ content, index, navigation }: any) {
    const state = useSelector((state: any) => state) as any

    const [notificationText, setText] = useState<string>("")
    const [compactMode, setCompactMode] = useState<boolean>(state.preferences.compactNotifications)

    const randomPalette = useRef(hightlightPalette[Math.floor(Math.random() * hightlightPalette.length)]).current

    const _profile = (username: string) => {
        navigation.navigate("Profile", { name: username })
    }

    useEffect(() => {
        switch (content.details.type) {
            case "follow":
                return setText("seni takip etmeye başladı")
            case "like_comment":
                return setText("bir yorumunu beğendi")
            case "reply":
                return setText("bir yorumuna yanıt bıraktı")
            case "quote_post":
                return setText("bir gönderini alıntıladı")
            case "mention_post":
                return setText("bir gönderide senden bahsetti")
            case "new_post":
                return setText("yeni bir gönderi paylaştı")
            case "follow_request":
                return setText("seni takip etmek istiyor")
            case "comment":
                return setText("bir gönderine yorum bıraktı")
            case "like_post":
                return setText("paylaştığın bir içeriği beğendi")
            default:
                return setText("bir şeyler yaptı")
        }
    }, [])

    useEffect(() => {
        if (!state.preferences.performanceMode) {
            setCompactMode(state.preferences.compactNotifications)
        }
    }, [state.preferences.compactNotifications])

    return (
        <Pressable style={[
            styles.notification_container,
            index < 6 && randomPalette
        ]}>
            <Avatar
                src={cdnUrl(content.from.avatar)}
                size={50}
                radius={100}
                onPress={() => _profile(content.from.username)}
            />

            <View style={styles.notification_details}>
                <View style={styles.notification_name_container}>
                    <Text
                        onPress={() => _profile(content.from.username)}
                        style={{
                            ...styles.notification_text,
                            fontFamily: "Bold",
                        }}
                    >
                        {content.from.username}
                    </Text>
                    {calculateUserFlags(content.from.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.user_badge} />}
                </View>
                <Text style={styles.notification_text}>{notificationText}</Text>

                {content.details.extend.post !== undefined && (
                    <View style={styles.embed_post}>
                        {content.details.extend.post.content.type === "image" && (
                            <View style={styles.embed_post_image_container}>
                                <Image
                                    fadeDuration={0}
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
                                    <Text onPress={() => _profile(content.details.extend.post.author.username)} style={{ fontFamily: "Bold" }}>
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
                                                    fontFamily: "Bold",
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
                                    <Text onPress={() => _profile(content.details.extend.comment.author.username)} style={{ fontWeight: "bold" }}>
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
        </Pressable>
    )
}
