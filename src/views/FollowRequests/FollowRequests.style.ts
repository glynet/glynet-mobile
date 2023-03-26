import { Dimensions, Platform, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    notifications_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        // borderRadius: 12,
    },
    notification_container: {
        padding: 15,
        borderTopWidth: theme.BORDER_WIDTH,
        borderColor: theme.BOX_BORDER_COLOR,
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
        marginTop: Platform.OS === "ios" ? 5 : 3,
        flex: 1,
    },
    notification_text: {
        fontSize: 16,
        fontFamily: "GilroyMedium",
        color: theme.PRIMARY_COLOR,
    },
    request_username: {
        fontSize: 14,
        marginTop: Platform.OS === "ios" ? 3 : 0,
        color: theme.SECONDARY_COLOR,
        fontFamily: "GilroyMedium",
    },
    notification_date: {
        fontSize: 14,
        marginTop: 3,
        color: theme.SECONDARY_COLOR,
        fontFamily: "GilroyMedium",
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
})

export default styles
