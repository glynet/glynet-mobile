import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    BookmarkFilledIcon,
    BookmarkOutlineIcon,
    CommentIcon,
    HeartFilledIcon,
    HeartOutlineIcon,
    VerticalIcon
} from "../../../utils/icons";
import React, {useState} from "react";

export default function Post() {
    const [isLiked, setLiked] = useState<boolean>(false);
    const [isMarked, setMarked] = useState<boolean>(false);

    return (
        <View style={styles.post}>
            <View style={styles.post_author_container}>
                <View style={styles.post_author_left}>
                    <TouchableOpacity style={styles.post_author_left.avatar} activeOpacity={0.8}>
                        <Image
                            style={styles.post_author_left.avatar}
                            source={{
                                uri: "https://source.unsplash.com/random?women"
                            }}
                        />
                    </TouchableOpacity>
                    <View style={styles.post_author_left.details}>
                        <Text style={styles.post_author_left.details.name}>Metehan Saral</Text>
                        <Text style={styles.post_author_left.details.date}>1 saat önce</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.post_author_right} activeOpacity={1}>
                    <VerticalIcon style={{
                        fill: "#6e6c6c",
                        height: 24,
                        width: 24
                    }}/>
                </TouchableOpacity>
            </View>
            <View style={styles.post_content}>
                <Image
                    style={styles.post_content}
                    source={{
                        uri: "https://source.unsplash.com/random"
                    }}
                />
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <View style={styles.post_buttons}>
                    <TouchableOpacity style={[
                        styles.post_button,
                        isLiked ? { backgroundColor: "rgba(255,94,94,0.35)" } : null
                    ]} activeOpacity={0.8} onPress={() => setLiked(!isLiked)}>
                        {isLiked && <HeartFilledIcon style={[
                            styles.post_button.icon,
                            { fill: "#ff0000" }
                        ]} />}
                        {!isLiked && <HeartOutlineIcon style={styles.post_button.icon} />}
                        <Text style={[
                            styles.post_button.text,
                            isLiked ? { color: "#ff0000" } : null
                        ]}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.post_button} activeOpacity={0.8}>
                        <CommentIcon style={styles.post_button.icon} />
                        <Text style={styles.post_button.text}>13</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.post_buttons}>
                    <TouchableOpacity style={[
                        styles.post_button,
                        { paddingHorizontal: 5, marginRight: 0 }
                    ]} activeOpacity={0.8} onPress={() => setMarked(!isMarked)}>
                        {isMarked && <BookmarkFilledIcon style={styles.post_button.icon} />}
                        {!isMarked && <BookmarkOutlineIcon style={styles.post_button.icon} />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const defaultPadding = 12;

const styles = StyleSheet.create({
    post: {
        backgroundColor: "#ffffff",
        width: "100%",
        // borderBottomWidth: 1,
        borderColor: "#e6e6e6",
        marginBottom: defaultPadding,
        borderRadius: 15
    },
    post_author_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    post_author_left: {
        padding: defaultPadding,
        flexDirection: "row",
        alignItems: "center",
        avatar: {
            height: 46,
            width: 46,
            borderRadius: 50
        },
        details: {
            marginLeft: 7.5,
            name: {
                fontSize: 16,
                fontFamily: "GilroyBold",
                color: "#1b2733"
            },
            date: {
                marginTop: 3,
                fontSize: 13,
                fontFamily: "GilroyMedium",
                color: "#4e535a"
            }
        }
    },
    post_author_right: {
        padding: defaultPadding,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8
    },
    post_text: {
        padding: defaultPadding,
        paddingTop: 0,
        text: {
            fontSize: 14,
        }
    },
    post_content: {
        width: "100%",
        height: Dimensions.get("window").width || 300
    },
    post_buttons: {
        padding: defaultPadding,
        flexDirection: "row",
    },
    post_button: {
        borderRadius: 20,
        backgroundColor: "#F2F2F2",
        padding: 6,
        paddingHorizontal: 13,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 7,
        icon: {
            height: 24,
            width: 24,
            fill: "#88909A"
        },
        text: {
            marginLeft: 3,
            fontSize: 14.5,
            fontFamily: "GilroyBold",
            marginTop: 3,
            color: "#88909A"
        }
    },
});
