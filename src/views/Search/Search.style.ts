import { StyleSheet } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    results_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        borderRadius: 15,
    },
    result_container: {
        padding: 15,
        flexDirection: "row",
        borderTopWidth: theme.BORDER_WIDTH,
        borderColor: theme.BOX_BORDER_COLOR,
        width: "100%",
        alignItems: "center",
    },
    result_icon_container: {
        height: 45,
        width: 45,
        backgroundColor: theme.POST_BUTTON_BACKGROUND,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    result_icon_image: {
        height: 45,
        width: 45,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },
    result_icon: {
        height: 25,
        width: 25,
        fill: theme.PRIMARY_COLOR,
    },
    result_text: {
        color: theme.PRIMARY_COLOR,
        fontSize: 18,
        marginLeft: 10,
    },
})

export default styles
