import { StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    shots_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        // borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        // borderRadius: 15,
        // marginBottom: 12,
    },
    shots_title: {
        padding: 12,
        paddingBottom: 0,
        fontWeight: "bold",
        fontSize: 18,
        color: theme.PRIMARY_COLOR,
    },
})

export default styles
