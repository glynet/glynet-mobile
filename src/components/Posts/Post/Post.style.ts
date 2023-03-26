import { Dimensions, Platform, StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()
const defaultPadding = 12

const styles = StyleSheet.create({
    post: {
        backgroundColor: theme.BOX_BACKGROUND,
        width: "100%",
        borderBottomWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        // borderRadius: 15,
        // marginBottom: 12,
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
        flexDirection: "row",
        alignItems: "center",
    },
    post_author_verified_icon: {
        fill: theme.PRIMARY_COLOR,
        height: 16,
        width: 16,
        marginLeft: 4,
    },
    post_author_name_text: {
        fontSize: 16,
        fontFamily: "GilroyBold",
        color: theme.PRIMARY_COLOR,
    },
    post_author_date: {
        fontSize: 13,
        fontFamily: "GilroyMedium",
        color: theme.SECONDARY_COLOR,
        marginTop: 2,
    },
    post_author_location: {
        fontSize: 13,
        fontFamily: "GilroyMedium",
        color: theme.THEME_COLOR,
        marginTop: 2,
    },

    post_content_container: {
        paddingTop: defaultPadding,
    },
    post_content: {
        // width: "100%",
        // height: (Dimensions.get("window").width - defaultPadding),
        // borderRadius: defaultPadding,
        backgroundColor: theme.THEME_COLOR,
    },

    post_text_container: {
        padding: defaultPadding,
        paddingBottom: 0,
    },
    post_text: {
        fontSize: 16,
    },

    post_buttons_container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        // paddingTop: 0,
        justifyContent: "space-between",
    },
    post_button_part: {
        width: "50%",
        justifyContent: "center",
        height: 38,
    },
    post_button_padding: {
        height: 38,
    },
    post_button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: Dimensions.get("window").width / 3 - 12 * 1.2,
        borderColor: theme.BORDER_COLOR,
        borderWidth: theme.BORDER_WIDTH,
        icon: {
            height: 23,
            width: 23,
            fill: theme.POST_BUTTON_COLOR,
        },
        text: {
            fontFamily: "GilroyBold",
            fontSize: 17,
            color: theme.POST_BUTTON_COLOR,
            marginTop: Platform.OS === "ios" ? 3 : 0,
            marginLeft: 4,
        },
    },
    post_button_red: {
        backgroundColor: "", // "rgba(255,71,71,0.24)",
        icon: {
            fill: "#FF0000",
        },
        text: {
            color: "#FF0000",
        },
    },
})

export default styles
