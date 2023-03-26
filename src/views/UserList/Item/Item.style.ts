import { Platform, StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    notification_container: {
        padding: 15,
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BOX_BORDER_COLOR,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    user_details: {
        flexDirection: "row",
        alignItems: "center",
    },
    notification_details: {
        marginLeft: 10,
    },
    user_name: {
        flexDirection: "row",
        alignItems: "center",
    },
    notification_text: {
        fontSize: 16,
        fontFamily: "GilroyMedium",
        color: theme.PRIMARY_COLOR,
    },
    notification_date: {
        fontSize: 14,
        marginTop: Platform.OS === "ios" ? 3 : 0,
        color: theme.SECONDARY_COLOR,
        fontFamily: "GilroyMedium",
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
        position: "absolute",
        top: 20,
        right: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    button_container: {
        backgroundColor: "rgba(234,236,237,0.34)",
        padding: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        marginLeft: 7,
    },
    button_icon: {
        height: 16,
        width: 16,
        fill: theme.BUTTON_COLOR,
    },
    button_text: {
        fontSize: 14,
        fontFamily: "GilroyBold",
        marginLeft: 4,
        color: theme.BUTTON_COLOR,
    },
})

export default styles
