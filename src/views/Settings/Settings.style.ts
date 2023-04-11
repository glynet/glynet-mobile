import { Dimensions, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"
const theme = getTheme()

const styles = StyleSheet.create({
    profile_inputs_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        width: "100%",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: 15,
    },
    profile_input_container: {
        padding: 15,
        borderBottomWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
    },
    profile_input_title: {
        fontWeight: "bold",
        fontSize: 15,
        color: theme.PRIMARY_COLOR,
    },
    profile_input_title_desc: {
        fontWeight: "normal",
        fontSize: 13,
        color: theme.SECONDARY_COLOR,
        marginTop: 4,
    },
    profile_input_warn: {
        fontWeight: "normal",
        fontSize: 11,
        marginTop: 7,
        color: "#ff0000",
    },
    profile_input: {
        borderWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        backgroundColor: theme.INPUT_BACKGROUND,
        padding: 12,
        fontSize: 14,
        // borderRadius: 12,
        marginTop: 7,
        color: theme.PRIMARY_COLOR,
    },

    profile_buttons: {
        flexDirection: "row",
        marginTop: 15 - 12,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
    },
    profile_button: {
        padding: 14,
        borderRadius: 9,
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: theme.BUTTON_BACKGROUND,
        backgroundColor: theme.BUTTON_BACKGROUND,
        text: {
            color: theme.BUTTON_COLOR,
            marginLeft: 4,
            fontWeight: "bold",
            fontSize: 14,
        },
    },
    profile_button_colored: {
        borderColor: "rgba(1,6,255,0.73)",
        backgroundColor: "rgba(0,5,255,0.16)",
        text: {
            color: "rgb(0,2,108)",
        },
    },
    follow_requests_button_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        // borderRadius: 12,
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
        justifyContent: "center",
    },
    follow_requests_details: {
        marginLeft: 10,
    },
    follow_requests_text: {
        fontSize: 16,
        fontWeight: "bold",
        color: theme.PRIMARY_COLOR,
    },
    follow_requests_description: {
        fontSize: 14,
        marginTop: 3,
        color: theme.SECONDARY_COLOR,
        fontWeight: "normal",
    },
    category_arrow: {
        height: 22,
        width: 22,
        position: "absolute",
        right: 12,
        fill: theme.PRIMARY_COLOR,
    },
})

export default styles
