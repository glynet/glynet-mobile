import { Dimensions, StyleSheet } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
    container: {},
    loader: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    top: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
    },
    audio_cover: {
        borderRadius: 15,
        width: Dimensions.get("window").width / 3.5,
        height: Dimensions.get("window").width / 3.5,
        backgroundColor: theme.THEME_COLOR,
    },
    audio_details: {
        marginLeft: 10,
    },
    audio_title: {
        fontFamily: "GilroyBold",
        fontSize: 21,
    },
    audio_author: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 7,
    },
    audio_author_avatar: {
        height: 27,
        width: 27,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
    },
    audio_author_details: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4,
    },
    audio_author_name: {
        fontFamily: "GilroyBold",
        fontSize: 16,
    },
    audio_count: {
        fontFamily: "GilroyMedium",
        fontSize: 14,
        color: "#2E2E2E",
        marginTop: 10,
    },
    use_audio_container: {
        position: "absolute",
        bottom: 80,
        width: "100%",
        zIndex: 9,
        justifyContent: "center",
        alignItems: "center",
    },
    use_audio: {
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR,
        padding: 15,
        width: 180,
        alignItems: "center",
        justifyContent: "center",
    },
    use_audio_text: {
        fontFamily: "GilroyBold",
        fontSize: 17,
        color: "#fff",
    },
    audio_list_container: {
        margin: -2,
    },
})

export default styles
