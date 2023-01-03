import {StyleSheet} from "react-native";
import getTheme from "../../../themes/themes";

const theme = getTheme();

const styles = StyleSheet.create({
    notification_container: {
        padding: 15,
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BOX_BORDER_COLOR,
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    notification_details: {
        marginLeft: 10,
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
    }
});

export default styles;
