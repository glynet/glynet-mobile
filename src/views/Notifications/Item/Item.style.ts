import {StyleSheet} from "react-native";
import getTheme from "../../../constants/colors";

const theme = getTheme();

const styles = StyleSheet.create({
    notification_container: {
        padding: 15,
        borderTopWidth: theme.BORDER_WIDTH,
        borderColor: theme.BOX_BORDER_COLOR,
        flexDirection: "row",
        position: "relative",
        width: "100%",
    },
    notification_details: {
        marginLeft: 10,
        marginTop: 5,
        flex: 1,
    },
    notification_text: {
        fontSize: 16,
        fontFamily: "GilroyMedium",
        color: theme.PRIMARY_COLOR,
    },
    notification_date: {
        fontSize: 14,
        marginTop: 3,
        color: theme.SECONDARY_COLOR,
        fontFamily: "GilroyMedium",
    },
    notification_avatar: {
        height: 45,
        width: 45,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR
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
        fill: theme.BUTTON_COLOR
    },

    embed_post: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: theme.BORDER_COLOR,
        width: "100%",
        marginVertical: 6.5,
    },
    embed_post_image_container: {},
    embed_post_image: {
        height: 170,
        width: "100%",
        borderRadius: 15,
        backgroundColor: theme.THEME_COLOR
    },
    embed_text_container: {
        padding: 10,
    },
    embed_text: {
        fontFamily: "GilroyMedium",
        fontSize: 14,
        lineHeight: 18,
        color: theme.PRIMARY_COLOR
    },
    embed_comment: {
        flexDirection: "row",
        marginLeft: -3,
    },
    embed_comment_icon: {
        height: 16,
        width: 16,
        marginTop: 2,
        fill: theme.PRIMARY_COLOR
    }
});

export default styles;
