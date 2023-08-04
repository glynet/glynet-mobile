import { Dimensions, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()
const avatarSize = Dimensions.get("window").width / 4

const styles = StyleSheet.create({
    profile_inputs_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        width: "100%",
        // borderRadius: 12,
        marginBottom: 12,
    },
    profile_input_container: {
        padding: 12,
        borderTopWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
    },
    profile_input_title: {
        fontFamily: "Medium",
        fontSize: 14,
        color: theme.PRIMARY_COLOR,
    },
    profile_input: {
        borderWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        backgroundColor: theme.INPUT_BACKGROUND,
        padding: 12,
        fontSize: 14,
        // borderRadius: 12,
        marginTop: 7,
        color: theme.PRIMARY_COLOR,
    },

    profile_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        width: "100%",
        // borderRadius: 12,
        marginBottom: 12,
    },
    profile_banner: {
        height: 170,
        width: "100%",
        backgroundColor: theme.THEME_COLOR,
        // borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    profile_content: {
        marginTop: -85,
        alignItems: "flex-start",
        padding: 14,
    },
    profile_avatar_container: {
        height: avatarSize + 14,
        width: avatarSize + 14,
        borderRadius: 100,
        // borderWidth: 3.5,
        borderColor: theme.THEME_COLOR,
        // backgroundColor: "rgba(255,255,255,0.54)",
        alignItems: "center",
        justifyContent: "center",
    },
    profile_avatar: {
        height: avatarSize,
        width: avatarSize,
        borderRadius: 100,
    },
    profile_details_website: {
        marginTop: 7,
        fontFamily: "Medium",
        fontSize: Dimensions.get("window").width / 29,
        color: theme.THEME_COLOR,
    },
    profile_details: {
        marginTop: 10,
        name: {
            fontFamily: "Bold",
            fontSize: Dimensions.get("window").width / 21,
            color: theme.PRIMARY_COLOR,
        },
        username: {
            marginTop: 3,
            fontFamily: "Medium",
            fontSize: Dimensions.get("window").width / 27,
            color: theme.PRIMARY_COLOR,
        },
        about: {
            marginTop: 10,
            fontFamily: "Medium",
            fontSize: Dimensions.get("window").width / 29,
            color: theme.PRIMARY_COLOR,
        },
    },
    profile_metrics_container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 0,
    },
    profile_metric: {
        fontSize: 14,
        color: theme.SECONDARY_COLOR,
        paddingVertical: 5,
        opacity: 0.7,
    },
    profile_metric_value: {
        fontFamily: "Bold",
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
    },
    profile_badge: {
        fill: theme.PRIMARY_COLOR,
        height: 19,
        width: 19,
        marginLeft: 4,
    },
    empty_column: {
        width: 7,
    },
    profile_button: {
        backgroundColor: theme.BUTTON_BACKGROUND,
        padding: 8,
        borderRadius: 9,
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.4,
        opacity: 0.7,
        borderColor: theme.BORDER_COLOR,
        icon: {
            fill: theme.BUTTON_COLOR,
            height: 19,
            width: 19,
        },
    },
    profile_button_with_text: {
        paddingHorizontal: 12,
        text: {
            marginLeft: 4,
            color: theme.BUTTON_COLOR,
            fontFamily: "Bold",
            fontSize: 14,
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
            fontFamily: "Medium",
            fontSize: Dimensions.get("window").width / 29,
            color: theme.SECONDARY_COLOR,
            marginLeft: 2,
        },
    },
    profile_banner_edit: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 170,
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: 18,
        // borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "rgba(1,1,1,0.36)",
        icon: {
            height: 24,
            width: 24,
            fill: "rgba(255,255,255,0.68)",
        },
    },
    profile_avatar_edit: {
        position: "absolute",
        top: 6,
        left: 6,
        height: avatarSize,
        width: avatarSize,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: "rgba(1,1,1,0.24)",
        icon: {
            height: 28,
            width: 28,
            fill: "rgba(255,255,255,0.82)",
        },
    },
})

export default styles
