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
import getTheme from "../../../themes/themes";

const theme = getTheme();

export default function Post({ navigation }: any) {
    const [isLiked, setLiked] = useState<boolean>(false);
    const [isMarked, setMarked] = useState<boolean>(false);

    const id = Math.floor(Math.random() * 100);

    return (
        <View style={styles.post}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <View style={styles.post_author}>
                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: "https://source.unsplash.com/random?human&" + id,
                            }}
                            style={styles.post_author_avatar}
                        />
                    </TouchableOpacity>
                    <View style={styles.post_author_details}>
                        <Text style={styles.post_author_name}>Metehan Saral</Text>
                        <Text style={styles.post_author_date}>1 saat önce</Text>
                    </View>
                </View>
                <View style={{
                    padding: 12,
                }}>
                    <VerticalIcon style={{
                        height: 19,
                        width: 19,
                        fill: theme.POST_BUTTON_COLOR
                    }} />
                </View>
            </View>

            {id < 60 && <View style={styles.post_text_container}>
                <Text style={styles.post_text}>
                    The Western Powersurge Motorcycle

                    An all-electric plaything for the climate-conscious biker with a permanent magnet motor that packs
                    enough torque to incur additional baggage fees. And yes, you deserve one.
                </Text>
            </View>}

            {id > 50 && <View style={styles.post_content_container}>
                <Image
                    source={{
                        uri: "https://source.unsplash.com/random?" + id,
                    }}
                    style={styles.post_content}
                />
            </View>}

            <View style={styles.post_buttons_container}>
                <View style={[styles.post_button, isLiked ? styles.post_button_red : null]}>
                    <TouchableOpacity activeOpacity={0.8} style={{
                        ...styles.post_button_part,
                        alignItems: "flex-end",
                    }} onPress={() => setLiked(!isLiked)}>
                        {isLiked && <HeartFilledIcon style={[styles.post_button.icon, styles.post_button_red.icon]} />}
                        {!isLiked && <HeartOutlineIcon style={styles.post_button.icon} />}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{
                        ...styles.post_button_part,
                        alignItems: "flex-start",
                    }} onPress={() => navigation.navigate("UserList", { title: "Beğeniler" })}>
                        <Text style={[styles.post_button.text, isLiked ? styles.post_button_red.text : null]}>12</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.post_button, ...styles.post_button_padding }}>
                    <CommentIcon style={styles.post_button.icon} />
                    <Text style={styles.post_button.text}>24</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.post_button, ...styles.post_button_padding }} onPress={() => setMarked(!isMarked)}>
                    {isMarked && <BookmarkFilledIcon style={[styles.post_button.icon]} />}
                    {!isMarked && <BookmarkOutlineIcon style={styles.post_button.icon} />}
                </TouchableOpacity>
            </View>

        </View>
    )
}

const defaultPadding = 12;

const styles = StyleSheet.create({
    post: {
        backgroundColor: theme.BOX_BACKGROUND,
        width: "100%",
        // borderTopWidth: theme.BORDER_WIDTH,
        // borderColor: theme.BOX_BORDER_COLOR,
        borderRadius: 15,
        marginBottom: 12,
    },

    post_author: {
        padding: defaultPadding,
        paddingBottom: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    post_author_avatar: {
        height: Dimensions.get("window").width / 9,
        width: Dimensions.get("window").width / 9,
        borderRadius: 100,
    },
    post_author_details: {
        marginLeft: 8,
    },
    post_author_name: {
        fontSize: 16,
        fontFamily: "GilroyBold",
        color: theme.PRIMARY_COLOR
    },
    post_author_date: {
        fontSize: 13,
        fontFamily: "GilroyMedium",
        color: theme.SECONDARY_COLOR,
        marginTop: 2,
    },

    post_content_container: {
        paddingTop: defaultPadding,
    },
    post_content: {
        width: "100%",
        height: (Dimensions.get("window").width - defaultPadding),
        // borderRadius: defaultPadding,
        backgroundColor: theme.THEME_COLOR
    },

    post_text_container: {
        padding: defaultPadding,
        paddingBottom: 0,
    },
    post_text: {
        fontSize: 14.5,
    },

    post_buttons_container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        // paddingTop: 0,
        justifyContent: "space-between"
    },
    post_button_part: {
        width: "50%",
        justifyContent: "center",
        height: 36,
    },
    post_button_padding: {
        height: 36
    },
    post_button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: (Dimensions.get("window").width / 3) - (12 * 1.2),
        borderColor: theme.BORDER_COLOR,
        borderWidth: theme.BORDER_WIDTH,
        icon: {
            height: 23,
            width: 23,
            fill: theme.POST_BUTTON_COLOR
        },
        text: {
            fontFamily: "GilroyBold",
            fontSize: 15,
            color: theme.POST_BUTTON_COLOR,
            marginTop: 2,
            marginLeft: 5,
        }
    },
    post_button_red: {
        backgroundColor: "", // "rgba(255,71,71,0.24)",
        icon: {
            fill: "#FF0000"
        },
        text: {
            color: "#FF0000",
        }
    }
});
