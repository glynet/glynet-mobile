import {Dimensions, StyleSheet} from "react-native";
import getTheme from "../../themes/themes";
const theme = getTheme();

const styles = StyleSheet.create({
    follow_requests_button_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        borderRadius: 12,
        marginBottom: 12,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    follow_requests_icon: {
        height: 45,
        width: 45,
        borderRadius: 100,
        backgroundColor: "#ececec",
        alignItems: "center",
        justifyContent: "center"
    },
    follow_requests_details: {
        marginLeft: 10,
    },
    follow_requests_text: {
        fontSize: 16,
        fontFamily: "GilroyBold",
        color: theme.PRIMARY_COLOR,
    },
    follow_requests_description: {
        fontSize: 14,
        marginTop: 3,
        color: theme.SECONDARY_COLOR,
        fontFamily: "GilroyMedium",
    },
    category_arrow: {
        height: 22,
        width: 22,
        position: "absolute",
        right: 12,
        fill: theme.PRIMARY_COLOR,
    },
    notifications_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        borderRadius: 12,
    },

    search_container: {
        padding: 15,
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BOX_BORDER_COLOR,
    },
    search: {
        padding: 12,
        borderRadius: 10,
        fontSize: 14,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",

        height: 44,

        borderWidth: 1,
        backgroundColor: "rgba(249,249,249,0.82)",
        borderColor: "#bbc1c5"
    },
    search_icon: {
        position: "absolute",
        top: 25.5,
        right: 24,
    }
});

export default styles;
