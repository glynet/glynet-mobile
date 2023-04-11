import { Dimensions, Platform, StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "orange",
        borderBottomWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
    },
    padding_container: {
        padding: 15
    },
    author_container_parent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    author_container: {
        flexDirection: "row",
        width: "80%",
        alignItems: "center"
    },
    entry_options_container: {
        alignItems: "center",
        height: 45,
        width: 45,
        justifyContent: "center"
    },
    entry_options: {
        height: 21,
        width: 21,
        fill: theme.TERTIARY_COLOR
    },
    author_avatar: {
        height: 45,
        width: 45,
        borderRadius: 100
    },
    entry_text_with_author: {
        fontSize: 14,
    },
    author_details: {
        marginLeft: 8,
    },
    author_name_container: {
        flexDirection: "row",
        alignItems: "center"
    },
    author_name: {
        // fontWeight: "bold",
        fontWeight: "bold",
        color: "#363636",
        fontSize: 16,
    },
    author_badge: {
        height: 15,
        width: 15,
        fill: theme.PRIMARY_COLOR,
        marginLeft: 3,
    },
    entry_date: {
        // fontWeight: "normal",
        fontSize: 14,
        color: "#585858",
        marginTop: Platform.OS === "ios" ? 3 : -1
    },
    entry_text_container: {
        paddingVertical: 0,
        marginTop: -5,
    },
    entry_text: {
        // fontFamily: "sans-serif",
        fontSize: 16,
    },
    entry_metrics: {
        // borderTopWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginTop: 0,
    },
    entry_metrics_mini_users: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 13,
        marginRight: 3,
    },
    entry_metrics_details: {
        flexDirection: "row",
        alignItems: "center",
    },
    entry_metrics_text: {
        marginRight: 7,
        fontSize: 15,
        marginTop: 2,
        // fontWeight: "normal",
        color: theme.SECONDARY_COLOR,
    },
    entry_metrics_text_bold: {
        // fontWeight: "bold",
        fontWeight: "bold",
    },
    entry_metrics_mini_user_avatar: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 100,
        marginLeft: -13
    },
    button_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        marginHorizontal: 15,
    },
    button: {
        padding: 12,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        width: Dimensions.get("window").width / 6
    },
    button_icon: {
        height: 24,
        width: 24,
        fill: "#8C9299"
    },
    button_icon_liked: {
        height: 23,
        width: 23,
        fill: "#FF3E3E"
    },
    button_icon_saved: {
        height: 23,
        width: 23,
        fill: "#FF783E"
    },
    button_value: {
        // fontWeight: "bold",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 3,
        color: "#8C9299",
        marginTop: 3.5,
    },

    single_media_container: {
        paddingBottom: 0,
        width: Dimensions.get("window").width - 30,
    },
    single_attachment: {
        width: Dimensions.get("window").width - 30,
        height: Dimensions.get("window").width - 30,
        borderRadius: 15,
        backgroundColor: "#242424"
    },

    double_media_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 0,
        // width: Dimensions.get("window").width - 30,
    },
    vertical_double_media_container: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    double_attachment: {
        width: (Dimensions.get("window").width - 30) / 2 - 3,
        height: (Dimensions.get("window").width - 30) / 2,
        borderRadius: 15,
        backgroundColor: "#242424"
    },

    single_long_attachment: {
        width: (Dimensions.get("window").width - 30) / 2 - 3,
        height: Dimensions.get("window").width - 23,
        borderRadius: 15,
        backgroundColor: "#242424"
    },
    double_attachment_more: {
        width: (Dimensions.get("window").width - 30) / 2 - 3,
        height: (Dimensions.get("window").width - 30) / 2,
        backgroundColor: "#242424",
        position: "absolute",
        top: 0,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    double_attachment_more_text: {
        fontSize: 42,
        // fontWeight: "bold",
        fontWeight: "bold",
        color: "hsla(0,0%,100%,0.79)"
    },

    entry_loop_container: {
        paddingTop: 15,
    },
    entry_loop_attachment: {
        backgroundColor: "#242424",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 1.25,
    },

    entry_loop_icon_container: {
        position: "absolute",
        top: 20,
        left: 15,
        zIndex: 9
    },
    entry_loop_icon: {
        height: 32,
        width: 32,
        fill: "rgba(255,255,255,0.84)"
    },
    click_to_continue_loop_container: {
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 1.25,
        padding: 15,
        paddingBottom: 20,
        justifyContent: "flex-end"
    },
    continue_button: {
        backgroundColor: "hsla(200,14%,96%,0.93)",
        padding: 14,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    continue_button_text: {
        // fontWeight: "bold",
        fontWeight: "bold",
        fontSize: 15,
    }
})

export default styles
