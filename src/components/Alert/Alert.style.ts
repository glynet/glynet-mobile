import {StyleSheet} from "react-native";
import getTheme from "../../constants/colors";
const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: theme.BOX_BACKGROUND,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 240,
    },
    image: {
        height: 50,
        width: "100%",
    },
    title: {
        fontFamily: "GilroyBold",
        fontSize: 20,
        color: theme.PRIMARY_COLOR,
        marginTop: 15,
    },
    description: {
        fontFamily: "GilroyMedium",
        fontSize: 14,
        marginTop: 5,
        color: theme.SECONDARY_COLOR
    }
});

export default styles;
