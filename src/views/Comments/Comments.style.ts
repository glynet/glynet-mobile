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
    new_comment_input: {
        // borderWidth: 1,
        backgroundColor: "#EDEDED",
        borderColor: theme.BORDER_COLOR,
        height: 45,
        borderRadius: 30,
        fontSize: 15,
        paddingHorizontal: 20,
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
})

export default styles
