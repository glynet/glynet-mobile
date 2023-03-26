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
        backgroundColor: theme.THEME_COLOR,
    },
    comment_right: {
        marginLeft: 10,
        marginTop: 3,
        flexShrink: 1,
    },
    comment_content: {},
    comment_author_name: {
        fontSize: 14,
        fontFamily: "GilroyBold",
        color: "#292929",
    },
    comment_text: {
        fontSize: 15,
        marginTop: 0,
        color: "#000",
        fontFamily: "GilroyMedium",
    },
    comment_attachment_container: {
        paddingTop: 10,
        paddingBottom: 3,
    },
    comment_attachment_content: {
        height: 130,
        width: undefined,
        resizeMode: "contain",
        borderRadius: 10,
        aspectRatio: 1,
        flex: 1,
    },
    comment_date: {
        fontSize: 12,
        marginTop: 7,
        color: theme.TERTIARY_COLOR,
        fontFamily: "GilroyMedium",
    },
    comment_bottom: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 0,
    },
    comment_bottom_left: {
        flexDirection: "row",
        alignItems: "center",
    },
    reply_button: {
        marginLeft: 7,
        fontFamily: "GilroyBold",
        color: theme.SECONDARY_COLOR,
    },
    comment_button_container: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "red",
        width: 40,
    },
    comment_button: {
        height: 21,
        width: 21,
        fill: "#90969D",
    },
    comment_button_value: {
        fontSize: 14,
        fontFamily: "GilroyMedium",
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
        fontFamily: "GilroyBold",
        color: "#292929",
    },
    reply_author_text: {
        fontSize: 14,
        fontFamily: "GilroyMedium",
        color: "#000",
        marginTop: 2,
    },
    reply_author_date: {
        fontSize: 12,
        marginTop: 2,
        fontFamily: "GilroyMedium",
        color: theme.TERTIARY_COLOR,
    },
    replies_count_container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    replies_text: {
        fontSize: 12,
        fontFamily: "GilroyBold",
        color: theme.TERTIARY_COLOR,
    },
    replies_icon: {
        height: 16,
        width: 16,
        fill: theme.TERTIARY_COLOR,
    },
})

export default styles
