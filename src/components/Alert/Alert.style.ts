import { Platform, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"
const theme = getTheme()

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        padding: 30,
        backgroundColor: theme.BOX_BACKGROUND,
        // borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 240,
    },
    image: {
        height: 50,
        width: "100%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: theme.PRIMARY_COLOR,
        marginTop: 15,
    },
    description: {
        fontWeight: "normal",
        fontSize: 14,
        marginTop: Platform.OS === "ios" ? 5 : 0,
        color: theme.SECONDARY_COLOR,
        textAlign: "center",
    },
})

export default styles
