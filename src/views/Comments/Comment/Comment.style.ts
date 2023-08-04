import { Dimensions, Platform, StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    comment: {
        padding: 10,
        paddingHorizontal: 15,
        // borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BOX_BORDER_COLOR,
        flexDirection: "row",
        width: Dimensions.get("window").width,
    },
    comment_author_avatar: {
        height: 45,
        width: 45,
        borderRadius: 100,
        // backgroundColor: theme.THEME_COLOR,
    },
    comment_right: {
        marginLeft: 10,
        marginTop: -3.5,
        flexShrink: 1,
        width: "100%",
    },
    comment_content: {},
    comment_author_name: {
        fontSize: 16,
        fontFamily: "Bold",
        color: "#292929",
    },
    comment_text: {
        fontSize: 16,
        marginTop: 0,
        color: "#000",
        fontFamily: "Medium",
    },
    comment_attachment_container: {
        marginTop: 8,
        paddingBottom: 0,
        height: 230,
        width: 230,
        borderRadius: 15,
        backgroundColor: "rgb(240,240,240)"
    },
    attachment_gif_icon: {
        position: "absolute",
        top: 0,
        right: 5,
        zIndex: 99,
        opacity: 0.75,
    },
    attachment_loader: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    comment_attachment_content: {
        height: 230,
        width: 230,
        resizeMode: "cover",
        overlayColor: "#fff",
        borderRadius: 15,

        // flex: 1,
    },
    comment_date: {
        fontSize: 13.5,
        marginTop: 7,
        color: theme.TERTIARY_COLOR,
        fontFamily: "Medium",
    },
    comment_bottom: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: -2
    },
    comment_bottom_left: {
        flexDirection: "row",
        alignItems: "center",
    },
    reply_button: {
        marginLeft: 7,
        fontFamily: "Bold",
        color: theme.SECONDARY_COLOR,
    },
    comment_button_container: {
        flexDirection: "row",
        alignItems: "center",
        top: 8.5,
        right: 0,
        position: "absolute"
    },
    comment_button: {
        height: 23,
        width: 23,
        fill: "#90969D",
    },
    comment_button_value: {
        fontSize: 14,
        fontFamily: "Medium",
        color: "#90969D",
        marginLeft: 3,
    },
    reply_container: {
        marginTop: 13,
        flexDirection: "row",
    },
    reply_author_avatar: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },
    reply_content: {
        marginLeft: 8,
        flexShrink: 1,
        marginTop: Platform.OS === "ios" ? 2 : 0,
    },
    reply_author_name: {
        fontSize: 14,
        fontFamily: "Bold",
        color: "#292929",
    },
    reply_author_text: {
        fontSize: 14,
        fontFamily: "Medium",
        color: "#000",
        marginTop: 2,
    },
    reply_author_date: {
        fontSize: 12,
        marginTop: 2,
        fontFamily: "Medium",
        color: theme.TERTIARY_COLOR,
    },
    replies_count_container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    replies_text: {
        fontSize: 12,
        fontFamily: "Bold",
        color: theme.TERTIARY_COLOR,
    },
    replies_icon: {
        height: 16,
        width: 16,
        fill: theme.TERTIARY_COLOR,
    },
})

export default styles
