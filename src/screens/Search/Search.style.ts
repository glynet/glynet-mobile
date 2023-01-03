import {StyleSheet} from "react-native";
import getTheme from "../../themes/themes";

const theme = getTheme();

const styles = StyleSheet.create({
    results_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        borderRadius: 15,
    },
    result_container: {
        padding: 15,
        flexDirection: "row",
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BOX_BORDER_COLOR,
        width: "100%",
        alignItems: "center"
    },
    result_icon: {
        height: 20,
        width: 20,
        fill: theme.PRIMARY_COLOR
    },
    result_text: {
        color: theme.PRIMARY_COLOR,
        fontSize: 16,
        marginLeft: 13,
    }
});

export default styles;