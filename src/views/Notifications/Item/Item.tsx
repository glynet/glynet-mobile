import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {ArrowCornerDownRight} from "../../../utils/icons";
import styles from "./Item.style";
import moment from "moment";

export default function Item({ content, index }: any) {
    let notificationText = "";

    switch (content.details.type) {
        case "follow": 
            notificationText = "seni takip etmeye başladı";
            break;
        case "like_comment": 
            notificationText = "yorumunu beğendi"; 
            break;
        case "reply":
            notificationText = "yorumuna yanıt bıraktı";
            break;
        case "quote_post":
            notificationText = "gönderini alıntıladı";
            break;
        case "mention_post":
            notificationText = "gönderisinde senden bahsetti";
            break;
        case "new_post":
            notificationText = "yeni gönderi paylaştı";
            break;
        case "follow_request":
            notificationText = "seni takip etmek istiyor";
            break;
        case "comment":
            notificationText = "gönderine yorum bıraktı";
            break;
        case "like_post":
            notificationText = "gönderini beğendi";
            break;
        case "quote_post":
            notificationText = "gönderini alıntıladı";
            break;
        default:
            notificationText = `buraya içerik konulmamış (${content.details.type})`
            break;
    }

    return (
        <TouchableOpacity activeOpacity={1} style={[styles.notification_container, index === 0 && { borderTopWidth: 0 }]}>
            <Image
                style={styles.notification_avatar}
                source={{
                    uri: `${global.CDN_URL}/${content.from.avatar}`
                }}
            />
            <View style={styles.notification_details}>
                <Text style={styles.notification_text}><Text style={{ fontFamily: "GilroyBold", }}>{content.from.name}</Text> {notificationText}</Text>

                
                {content.details.extend.post !== undefined && (
                    <View style={styles.embed_post}>
                        {content.details.extend.post.content.type === "image" && (
                            <View style={styles.embed_post_image_container}>
                                <Image
                                    style={styles.embed_post_image}
                                    source={{
                                        uri: `${global.CDN_URL}/${content.details.extend.post.content.attachment}`
                                    }}
                                />
                            </View>
                        )}
                        {content.details.extend.post.content.text.length !== 0 && (
                            <View style={styles.embed_text_container}>
                                <Text style={styles.embed_text}><Text style={{ fontFamily: "GilroyBold", }}>{content.details.extend.post.author.username}</Text> {content.details.extend.post.content.text.trim()}</Text>
                                {(content.details.extend.comment !== undefined) && (
                                    content.details.extend.comment.content.text.length !== 0 && (
                                        <View style={{...styles.embed_comment, marginTop: 5}}>
                                            <ArrowCornerDownRight style={styles.embed_comment_icon} />
                                            <Text style={{...styles.embed_text, marginLeft: 3, }}><Text style={{ fontFamily: "GilroyBold", }}>{content.details.extend.comment.author.username}</Text> {content.details.extend.comment.content.text.trim()}</Text>
                                        </View>
                                    )
                                )}
                            </View>
                        )}
                        {(content.details.extend.post.content.text.length === 0 && content.details.extend.comment !== undefined) && (
                            content.details.extend.comment.content.text.length !== 0 && (
                                <View style={styles.embed_text_container}>
                                    <Text style={styles.embed_text}><Text style={{ fontFamily: "GilroyBold", }}>{content.details.extend.comment.author.username}</Text> {content.details.extend.comment.content.text.trim()}</Text>
                                </View>
                            )
                        )}
                    </View>
                )}


                <Text style={styles.notification_date}>{moment.unix(content.timestamp).fromNow()}</Text>
            </View>
        </TouchableOpacity>
    );
}
