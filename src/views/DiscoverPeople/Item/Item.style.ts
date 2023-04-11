import { StyleSheet } from "react-native"
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
    notification_details: {
        marginLeft: 10,
    },
    notification_text: {
        fontSize: 16,
        fontWeight: "normal",
        color: theme.PRIMARY_COLOR,
    },
    notification_date: {
        fontSize: 14,
        marginTop: 3,
        color: theme.SECONDARY_COLOR,
        fontWeight: "normal",
    },
    notification_avatar: {
        height: 45,
        width: 45,
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
        fontWeight: "bold",
        marginLeft: 4,
        color: theme.BUTTON_COLOR,
    },
})

export default styles
