import { Dimensions, Platform, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 999,
    },
    pressable: {
        backgroundColor: "#340267",
        borderRadius: 15
    },
    loader: {
        position: "absolute",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title_container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        padding: 20,
        opacity: 0.8,
    },
    title: {
        fontFamily: "GilroyBold",
        fontSize: 26,
        color: "#fff",
    },

    loop: {
        backgroundColor: "#000",
        height: "100%",
        width: "100%",
        borderRadius: 15,
    },
    content: {
        height: "100%",
        width: "100%",
        zIndex: 1,
        backgroundColor: "#000",
        borderRadius: 15,
    },
    details_container: {
        height: "100%",
        width: "100%",
        zIndex: 99999,
        bottom: -2.5,
        position: "absolute",
    },
    details: {
        height: "60%",
        width: "100%",
        zIndex: 99999,
        bottom: 2.5,
        position: "absolute",
    },
    buttons_container: {
        flexDirection: "column",
        alignItems: "center",
        width: 75,
        position: "absolute",
        right: 0,
        bottom: 20,
        zIndex: 9,
    },
    audio_image: {
        height: 40,
        width: 40,
        borderRadius: 8,
    },
    button_text_container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    button_container: {
        // backgroundColor: "cyan",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        opacity: 0.8,
        borderRadius: 100,

        icon: {
            fill: "rgba(255,255,255,0.9)",
            height: 38,
            width: 38,
        },
        text: {
            marginTop: 2,
            fontFamily: "Bold",
            color: "rgba(255,255,255,0.9)",
        },

        icon_red: {
            fill: "rgba(252,10,87,0.98)",
        },
        icon_orange: {
            fill: "#fff",
        },
        text_red: {
            color: "rgba(252,10,87,0.98)",
        },
        text_orange: {
            color: "orange",
        },
    },
    details_content: {
        padding: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 3,
        // backgroundColor: "red",
    },
    author_details: {
        flexDirection: "row",
        alignItems: "center",
    },
    author_avatar: {
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    author_username_container: {
        // marginLeft: Platform.OS === "ios" ? 9.5 : 10,
        opacity: 1,
    },
    author_name_container: {
        flexDirection: "row",
        alignItems: "center",
    },
    author_name: {
        fontFamily: "Bold",
        color: "#EBE7E8",
        fontSize: 16,
    },
    author_username: {
        fontFamily: "Medium",
        color: "#EBE7E8",
        fontSize: 13,
    },
    text_content: {
        marginTop: 8,
        width: Dimensions.get("window").width - 90,
    },
    text: {
        color: "#EBE7E8",
        fontFamily: "Medium",
        fontSize: 15.5,
        opacity: 0.9,
    },
    location_text: {
        marginTop: 8,
        color: "#EBE7E8",
        fontFamily: "Medium",
        fontSize: 14,
        opacity: 0.7,
    },
    loop_container: {
        flexDirection: "row",
        // backgroundColor: "yellow",
        alignItems: "center",
        marginTop: 10,
        opacity: 0.8,
    },
    author_badge: {
        height: 16,
        width: 16,
        fill: "#EBE7E8",
        marginLeft: 3,
        marginTop: 4,
    },
    loop_icon: {
        height: 24,
        width: 24,
        fill: "#fff",
    },
    loop_text: {
        color: "#fff",
        fontFamily: "Bold",
        fontSize: 13,
    },
    play_button_container: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    play_button: {
        height: 128,
        width: 128,
        fill: "#fff",
        opacity: 0.8,
    },
    loop_bottom: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },
    loop_attachment: {
        width: Dimensions.get("window").width,
        borderRadius: 30,
        zIndex: 5,
        position: "absolute",
    },
    loop_mute_button_container: {
        backgroundColor: "rgba(194,194,194,0.12)",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    loop_mute_button: {
        backgroundColor: "rgba(191,191,191,0.05)",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    loop_bottom_icon: {
        fill: "#FFFFFFB2",
        height: 23,
        width: 23,
    },
    loop_bottom_text_container: {
        width: Dimensions.get("window").width / 2.5,
        flexDirection: "row",
    },
    loop_bottom_text_title: {
        fontFamily: "Medium",
        color: "#FFFFFFB2",
        fontSize: 14,
    },
})

export default styles
