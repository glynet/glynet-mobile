import {StyleSheet} from "react-native";
import getTheme from "../../constants/colors";
const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    image: {
        height: 85,
        width: "100%",
    },
    title: {
        fontFamily: "GilroyBold",
        fontSize: 20,
        color: theme.PRIMARY_COLOR,
        marginTop: 30,
    },
    description: {
        fontFamily: "GilroyMedium",
        fontSize: 14,
        marginTop: 5,
        color: theme.SECONDARY_COLOR
    }
});

export default styles;
