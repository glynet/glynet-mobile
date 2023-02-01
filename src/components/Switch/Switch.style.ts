import {StyleSheet} from "react-native";
import getTheme from "../../constants/colors";

const theme = getTheme();

const styles = StyleSheet.create({
    switch_container: {
        width: "100%",
        backgroundColor: "rgba(236,236,238,0.48)",
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,
        borderWidth: theme.BORDER_WIDTH,
        padding: 4.5,
        borderColor: theme.BORDER_COLOR
    },
    switch_item: {
        width: "50%",
        // backgroundColor: "green",
        borderRadius: 30,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    switch_item_green: {
        backgroundColor: "rgba(62,241,62,0.42)",
        borderRadius: 30,
    },
    switch_item_red: {
        backgroundColor: "rgba(255,93,93,0.36)",
        borderRadius: 30,
    },
    switch_text: {
        fontSize: 15,
        fontFamily: "GilroyBold",
        color: theme.SECONDARY_COLOR
    },
    switch_text_green: {
        color: "#037b28",
    },
    switch_text_red: {
        color: "#dc0b0b",
    },
});

export default styles;
