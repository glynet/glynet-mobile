import { Platform, StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    notification_container: {
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BOX_BORDER_COLOR,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        justifyContent: "space-between",
        // backgroundColor: "red"
    },
    user_details: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    notification_details: {
        marginLeft: 9,
    },
    user_name: {
        flexDirection: "row",
        alignItems: "center",
    },
    notification_text: {
        fontSize: 16,
        fontFamily: "Medium",
        color: theme.PRIMARY_COLOR,
    },
    notification_date: {
        fontSize: 14,
        marginTop: Platform.OS === "ios" ? 2 : -2,
        color: theme.SECONDARY_COLOR,
        fontFamily: "Medium",
    },
    user_badge: {
        height: 16,
        width: 16,
        fill: theme.PRIMARY_COLOR,
        marginLeft: 3,
    },
    notification_avatar: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },

    buttons: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        right: 15,
        zIndex: 999
    },
    button_container: {
        backgroundColor: "#fff",
        padding: 9,
        paddingHorizontal: 11,
        borderRadius: 13,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        marginLeft: 7,
    },
    button_icon: {
        height: 18,
        width: 18,
        fill: theme.BUTTON_COLOR,
    },
    button_text: {
        fontSize: 14,
        fontFamily: "Bold",
        marginLeft: 4,
        color: theme.BUTTON_COLOR,
    },
})

export default styles
