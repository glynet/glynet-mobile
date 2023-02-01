import {StyleSheet} from "react-native";
import getTheme from "../../../constants/colors";

const theme = getTheme();

const styles = StyleSheet.create({
    shots_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        borderBottomColor: "rgba(164,164,164,0.7)",
        borderRadius: 15,
        marginBottom: 12,
    },
    shots_title: {
        padding: 12,
        paddingBottom: 0,
        fontFamily: "GilroyBold",
        fontSize: 18,
        color: theme.PRIMARY_COLOR,
    }
});

export default styles;
