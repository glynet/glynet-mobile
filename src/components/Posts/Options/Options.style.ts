import getTheme from "../../../constants/colors";
import {StyleSheet} from "react-native";

const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        paddingTop: 5,
        justifyContent: "space-between"
    },
    button: {
        padding: 15,
        paddingVertical: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(141,141,141,0.05)",
        borderWidth: 1,
        borderColor: theme.BORDER_COLOR,
        width: "48%",
        borderRadius: 15
    },
    button_icon: {
        height: 24,
        width: 24,
        fill: theme.SECONDARY_COLOR
    },
    button_text: {
        marginTop: 8,
        fontFamily: "GilroyBold",
        fontSize: 14,
        color: theme.SECONDARY_COLOR
    }
});

export default styles;
