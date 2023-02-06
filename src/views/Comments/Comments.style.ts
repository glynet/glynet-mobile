import {Dimensions, StyleSheet} from "react-native";
import getTheme from "../../constants/colors";

const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.BOX_BACKGROUND,
        borderRadius: 12,
        marginBottom: 65,
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
        height: 35,
        width: 35,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR
    },
    new_comment_input: {
        borderWidth: 1,
        backgroundColor: "rgba(249,249,249,0.82)",
        borderColor: theme.BORDER_COLOR,
        height: 35,
        borderRadius: 20,
        paddingHorizontal: 12,
        width: Dimensions.get("window").width - 115,
    },
    new_comment_send_container: {
        borderWidth: 1,
        backgroundColor: "rgba(249,249,249,0.82)",
        borderColor: theme.BORDER_COLOR,
        height: 35,
        width: 35,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    new_comment_send: {
        height: 19,
        width: 19,
        fill: theme.SECONDARY_COLOR
    }
});

export default styles;
