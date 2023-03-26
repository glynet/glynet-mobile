import { Dimensions, StyleSheet } from "react-native"
import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.THEME_COLOR,
        height: Dimensions.get("window").width / 2,
        margin: 2,
    },
    thumbnail: {
        width: "100%",
        height: Dimensions.get("window").width / 2,
    },
    original_loop: {
        position: "absolute",
        top: 10,
        left: 5,
        zIndex: 6,
        opacity: 0.8,
    },
    original_loop_icon: {
        fill: "#fff",
        height: 23,
        width: 23,
    },
})

export default styles
