import { Dimensions, StyleSheet } from "react-native"
import getTheme from "./constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.APP_BACKGROUND,
    },
    body: {
        height: "100%",
        width: "100%",
    },
    header: {
        backgroundColor: "#fff", // theme.APP_BACKGROUND,
        width: "100%",
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BORDER_COLOR,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    header_search: {
        justifyContent: "flex-start",
        height: 65,
        paddingRight: 12,
    },
    header_search_input: {
        padding: 12,
        borderRadius: 10,
        fontSize: 14,
        width: Dimensions.get("window").width - 70,
        marginLeft: -5,
        flexDirection: "row",
        justifyContent: "space-between",

        height: 48,

        borderWidth: 1,
        backgroundColor: "rgba(249,249,249,0.62)",
        borderColor: "#bbc1c5",
    },
    header_search_icon_container: {
        position: "absolute",
        top: 13.5,
        right: 12,
    },
    headerButton: {
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        icon: {
            fill: theme.HEADER_ITEM_COLOR,
            height: 26,
            width: 26,
        },
    },
    headerAvatar: {
        height: 36,
        width: 36,
        marginRight: 12,
        borderRadius: 20,
    },
    headerText: {
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        text: {
            marginTop: -2,
            fontSize: 22,
            color: theme.HEADER_ITEM_COLOR,
            fontFamily: "GilroyBold",
        },
    },
    content: {
        marginBottom: Dimensions.get("window").width / 6.5,
    },
    bottomBar: {
        backgroundColor: "#000", // theme.APP_BACKGROUND,
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopWidth: theme.BORDER_WIDTH,
        borderTopColor: "#141419",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    buttonContainer: {
        height: Dimensions.get("window").width / 6.5,
        width: Dimensions.get("window").width / 6.5,
        justifyContent: "center",
        icon: {
            height: 28,
            opacity: 1,
            fill: "#8c96aa", // theme.HEADER_ITEM_COLOR
        },
        icon_selected: {
            height: 28,
            opacity: 1,
            fill: "#e4ebed", // theme.HEADER_ITEM_COLOR
        },
    },
})

export default styles
