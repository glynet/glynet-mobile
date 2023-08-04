import { Dimensions, Platform, StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    notification_container: {
        padding: 15,
        paddingLeft: 15 - 5,
        // borderTopWidth: theme.BORDER_WIDTH,
        borderLeftColor: "transparent",
        borderLeftWidth: 5,
        flexDirection: "row",
        position: "relative",
        width: "100%",
    },
    follow_request_author: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    request_details: {
        marginLeft: 10,
        flex: 1,
    },
    notification_details: {
        marginLeft: 10,
        marginTop: Platform.OS === "ios" ? 5 : -3.5,
        flex: 1,
    },
    notification_name_container: {
        flexDirection: "row",
        alignItems: "center",
    },
    notification_text: {
        fontSize: 16,
        fontFamily: "Medium",
        color: theme.PRIMARY_COLOR,
    },
    user_badge: {
        height: 16,
        width: 16,
        fill: theme.PRIMARY_COLOR,
        marginLeft: 3,
    },
    request_username: {
        fontSize: 14,
        marginTop: Platform.OS === "ios" ? 3 : 0,
        color: theme.SECONDARY_COLOR,
        fontFamily: "Medium",
    },
    notification_date: {
        fontSize: 14,
        marginTop: 2,
        color: theme.SECONDARY_COLOR,
        fontFamily: "Medium",
    },
    notification_avatar: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },
    request_buttons: {
        position: "absolute",
        top: 20,
        right: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    request_button_container: {
        backgroundColor: "rgba(234,236,237,0.34)",
        padding: 5,
        borderRadius: 100,
        borderWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        marginLeft: 7,
    },
    request_button: {
        height: 24,
        width: 24,
        fill: theme.BUTTON_COLOR,
    },

    embed_post: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.BORDER_COLOR,
        width: "100%",
        marginTop: 8,
        marginVertical: 6.5,
        backgroundColor: "rgba(255,255,255,0.8)"
    },
    embed_post_image_container: {},
    embed_post_image: {
        height: Dimensions.get("window").width,
        width: "100%",
        borderRadius: 10,
        backgroundColor: theme.THEME_COLOR,
    },
    embed_text_container: {
        padding: 10,
    },
    embed_text: {
        fontFamily: "Medium",
        fontSize: 15,
        lineHeight: 18,
        color: theme.PRIMARY_COLOR,
    },
    embed_comment: {
        flexDirection: "row",
        marginLeft: -3,
    },
    embed_comment_icon: {
        height: 16,
        width: 16,
        marginTop: 2,
        fill: theme.PRIMARY_COLOR,
    },
})

export default styles
