import { StyleSheet } from "react-native"
import getTheme from "../../constants/colors"
const theme = getTheme()

const styles = StyleSheet.create({
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
        height: 50,
        width: 50,
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
        fontFamily: "Bold",
        color: theme.PRIMARY_COLOR,
    },
    follow_requests_description: {
        fontSize: 14,
        marginTop: 0,
        color: theme.SECONDARY_COLOR,
        fontFamily: "Medium",
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
        // borderRadius: 12,
    },
    center_container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default styles
