import { Dimensions, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"
const theme = getTheme()

const styles = StyleSheet.create({
    user_container: {
        padding: 12,
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        margin: 15,
        marginTop: 0,
        marginBottom: 3,
        borderColor: "rgba(227,223,223,0.93)",
        borderRadius: 15,
        backgroundColor: "rgba(249,250,251,0.93)",
    },
    user_avatar: {
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },
    user_details: {
        marginLeft: 10,
    },
    user_details_name: {
        fontWeight: "bold",
        fontSize: 20,
    },
    user_details_username: {
        fontWeight: "normal",
        fontSize: 16,
        marginTop: 2,
    },
    menu_container: {
        marginTop: 15,
        marginBottom: 0,
        borderColor: theme.BORDER_COLOR,
        borderBottomWidth: 0,
    },

    menu_top: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menu_title: {
        fontSize: 27,
        fontWeight: "bold",
        color: theme.PRIMARY_COLOR,
    },

    menu_buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    menu_button: {
        height: 36,
        width: 36,
        borderRadius: 100,
        backgroundColor: "rgba(185,190,193,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    menu_icon: {
        height: 24,
        width: 24,
        fill: theme.PRIMARY_COLOR,
    },

    category_container_left: {
        flexDirection: "row",
        alignItems: "center",
    },
    category_arrow: {
        height: 22,
        width: 22,

        fill: theme.PRIMARY_COLOR,
    },
    category_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        padding: 15,
        paddingTop: 0,
        icon_container: {
            padding: 8,
            backgroundColor: theme.BUTTON_BACKGROUND,
            borderRadius: 11,
        },
        icon: {
            height: 27,
            width: 27,
            fill: theme.PRIMARY_COLOR,
        },
        details: {
            marginLeft: 8,
        },
        description: {
            fontSize: 13,
            fontWeight: "normal",
            marginTop: 4,
            color: theme.SECONDARY_COLOR,
            width: Dimensions.get("window").width / 1.3,
        },
    },
    category_container_title: {
        fontSize: 19,
        fontWeight: "bold",
        color: theme.PRIMARY_COLOR,
    },
    footer: {
        paddingBottom: 20,
    },
    footer_text: {
        fontWeight: "normal",
        fontSize: 13,
        padding: 15,
        textAlign: "center",
        color: "#5d6d74",
    },
})

export default styles
