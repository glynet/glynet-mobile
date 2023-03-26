import { Dimensions, Platform, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()

const avatarSize = Dimensions.get("window").width / 4

const styles = StyleSheet.create({
    profile_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        width: "100%",
        borderBottomWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        // // borderRadius: 12,
        // marginBottom: 12,
    },
    profile_banner_text: {
        height: 120,
        width: "100%",
        backgroundColor: theme.THEME_COLOR,
        // // borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    profile_banner: {
        height: 170,
        width: "100%",
        backgroundColor: theme.THEME_COLOR,
        // // borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    profile_content: {
        marginTop: -85,
        alignItems: "flex-start",
        padding: 14,
    },
    profile_avatar_container: {
        height: avatarSize + 8,
        width: avatarSize + 8,
        borderRadius: 100,
        borderWidth: 3.5,
        borderColor: theme.BOX_BACKGROUND,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    profile_avatar_container_with_shot: {
        height: avatarSize + 14,
        width: avatarSize + 14,
        borderRadius: 100,
        borderWidth: 3.5,
        borderColor: theme.THEME_COLOR,
        backgroundColor: "rgba(255,255,255,0.54)",
        alignItems: "center",
        justifyContent: "center",
    },
    profile_avatar: {
        height: avatarSize,
        width: avatarSize,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },
    profile_details_website: {
        marginTop: 5,
        fontFamily: "GilroyMedium",
        fontSize: Dimensions.get("window").width / 29,
        color: theme.THEME_COLOR,
    },
    profile_details: {
        marginTop: Platform.OS === "ios" ? 10 : 6,
        name: {
            fontFamily: "GilroyBold",
            fontSize: Dimensions.get("window").width / 19,
            color: theme.PRIMARY_COLOR,
        },
        username: {
            marginTop: Platform.OS === "ios" ? 2 : -2,
            fontFamily: "GilroyMedium",
            fontSize: Dimensions.get("window").width / 24,
            color: theme.PRIMARY_COLOR,
        },
        about: {
            marginTop: 5,
            fontFamily: "GilroyMedium",
            fontSize: Dimensions.get("window").width / 27,
            color: theme.PRIMARY_COLOR,
            lineHeight: 19,
        },
    },
    profile_metrics_container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 0,
    },
    profile_metric: {
        fontSize: 15,
        color: theme.SECONDARY_COLOR,
        paddingVertical: 5,
    },
    profile_metric_value: {
        fontFamily: "GilroyBold",
    },
    profile_buttons: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
        width: Dimensions.get("window").width - 20,
    },
    profile_badges: {
        position: "absolute",
        right: 14,
        top: 85 + (14 - 2),
        flexDirection: "row",
    },
    profile_badge: {
        fill: theme.PRIMARY_COLOR,
        height: 22,
        width: 22,
        marginLeft: 4,
    },
    empty_column: {
        width: 7,
    },
    profile_button: {
        backgroundColor: theme.BUTTON_BACKGROUND,
        padding: 10,
        borderRadius: 9,
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.4,
        borderColor: theme.BORDER_COLOR,
        icon: {
            fill: theme.BUTTON_COLOR,
            height: 23,
            width: 23,
        },
    },
    profile_button_with_text: {
        paddingHorizontal: 16,
        text: {
            marginLeft: 6.5,
            color: theme.BUTTON_COLOR,
            fontFamily: "GilroyBold",
            fontSize: 15,
        },
    },
    profile_extras: {
        alignItems: "center",
        marginLeft: -7,
        marginTop: 6,
    },
    profile_extra: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 7,
        marginTop: 3,
        icon: {
            height: Dimensions.get("window").width / 20,
            width: Dimensions.get("window").width / 20,
            fill: theme.SECONDARY_COLOR,
        },
        text: {
            fontFamily: "GilroyMedium",
            fontSize: Dimensions.get("window").width / 29,
            color: theme.SECONDARY_COLOR,
            marginLeft: 2,
        },
    },
})

export default styles
