import { Dimensions, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.BOX_BACKGROUND,
    },
    loader: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    new_comment: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        zIndex: 99,
        backgroundColor: "#fff",
        padding: 15,
        borderTopWidth: theme.BORDER_WIDTH,
        borderTopColor: theme.BOX_BORDER_COLOR,
        flexDirection: "row",
        width: Dimensions.get("window").width,
    },
    new_comment_avatar: {
        height: 45,
        width: 45,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },
    new_comment_input_container: {
        // borderWidth: 1,
        backgroundColor: "rgb(242,242,242)",
        borderColor: theme.BORDER_COLOR,
        height: 45,
        borderRadius: 30,
        fontSize: 15,
        paddingHorizontal: 15,
        marginLeft: 10,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width - 85
    },
    new_comment_input: {
        width: "90%",
        fontFamily: "Medium",
    },
    new_comment_send_container: {
        borderWidth: 1,
        backgroundColor: "rgba(249,249,249,0.82)",
        borderColor: theme.BORDER_COLOR,
        height: 45,
        width: 45,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    new_comment_send: {
        height: 25,
        width: 25,
        fill: "#141416",
    },
    new_comment_input_buttons_container: {
        position: "absolute",
        top: 15,
        right: 15,
        height: 45,
        flexDirection: "row",
        alignItems: "center",
    },
    new_comment_input_button: {
        height: 45,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
    },
    disabled_button: {
        opacity: 0.5,
    }
})

export default styles
