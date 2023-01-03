import {Dimensions, StyleSheet} from "react-native";
import getTheme from "../../themes/themes";
const theme = getTheme();

const styles = StyleSheet.create({
    list_container: {
        marginBottom: 12,
        paddingTop: 12,
        flexDirection: "column",
        borderTopWidth: 1,
        borderColor: "rgba(227,223,223,0.93)",
    },
    user_container: {
        padding: 12,
        paddingTop: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    user_avatar: {
        height: 35,
        width: 35,
        borderRadius: 100,
        backgroundColor: theme.THEME_COLOR
    },
    user_details: {
        marginLeft: 7,
    },
    user_name: {
        fontFamily: "GilroyBold",
        fontSize: 15,
        color: theme.PRIMARY_COLOR
    },
    user_username: {
        fontFamily: "GilroyMedium",
        fontSize: 12,
        marginTop: 3,
        color: theme.SECONDARY_COLOR
    }
});

export default styles;
