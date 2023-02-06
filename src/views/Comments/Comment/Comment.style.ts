import {Dimensions, StyleSheet} from "react-native";
import getTheme from "../../../constants/colors";

const theme = getTheme();

const styles = StyleSheet.create({
    comment: {
        padding: 15,
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BOX_BORDER_COLOR,
        flexDirection: "row",
        width: Dimensions.get("window").width,
    },
    comment_author_avatar: {
        height: 35,
        width: 35,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR
    },
    comment_right: {
        marginLeft: 10,
        marginTop: 3,
        flexShrink: 1
    },
    comment_content: {},
    comment_author_name: {
        fontSize: 15,
        fontFamily: "GilroyBold",
        color: theme.PRIMARY_COLOR,
    },
    comment_text: {
        fontSize: 14,
        marginTop: 3,
        color: theme.SECONDARY_COLOR,
        fontFamily: "GilroyMedium",
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
        color: theme.SECONDARY_COLOR
    },
    comment_button_container: {
        flexDirection: "row",
        alignItems: "center"
    },
    comment_button: {
        height: 17,
        width: 17,
        fill: theme.SECONDARY_COLOR
    },
    comment_button_value: {
        fontSize: 12,
        fontfamily: "GilroyMedium",
        color: theme.SECONDARY_COLOR,
        marginLeft: 3,
    },
    reply_container: {
        marginTop: 13,
        flexDirection: "row",
    },
    reply_author_avatar: {
        height: 30,
        width: 30,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR
    },
    reply_content: {
        marginLeft: 7,
        flexShrink: 1,
        marginTop: 2.5,
    },
    reply_author_name: {
        fontSize: 12,
        fontFamily: "GilroyBold",
        color: theme.SECONDARY_COLOR
    },
    reply_author_text: {
        fontSize: 12,
        fontFamily: "GilroyMedium",
        color: theme.SECONDARY_COLOR,
        marginTop: 2,
    },
    reply_author_date: {
        fontSize: 12,
        fontFamily: "GilroyMedium",
        color: theme.SECONDARY_COLOR,
        marginLeft: 5,
    },
    replies_count_container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    replies_text: {
        fontSize: 12,
        fontFamily: "GilroyBold",
        color: theme.TERTIARY_COLOR
    },
    replies_icon: {
        height: 16,
        width: 16,
        fill: theme.TERTIARY_COLOR
    }
});

export default styles;
