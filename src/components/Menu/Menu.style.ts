import {Dimensions, StyleSheet} from "react-native";
import getTheme from "../../themes/themes";
const theme = getTheme();

const styles = StyleSheet.create({
    user_container: {
        padding: 12,
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        margin: 12,
        marginTop: 0,
        marginBottom: 3,
        borderColor: "rgba(227,223,223,0.93)",
        borderRadius: 15,
        backgroundColor: "rgba(249,250,251,0.93)",
    },
    user_avatar: {
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: "purple"
    },
    user_details: {
        marginLeft: 10,
        name: {
            fontFamily: "GilroyBold",
            fontSize: 20,
        },
        username: {
            fontFamily: "GilroyMedium",
            fontSize: 16,
            marginTop: 2
        }
    },
    menu_container: {
        marginTop: 12,
        borderColor: theme.BORDER_COLOR,
        borderBottomWidth: 1,
    },

    category_container_left: {
        flexDirection: "row",
        alignItems: "center",
    },
    category_arrow: {
        height: 22,
        width: 22,

        fill: theme.PRIMARY_COLOR,
    },
    category_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        padding: 15,
        paddingTop: 0,
        icon_container: {
            padding: 7,
            backgroundColor: theme.BUTTON_BACKGROUND,
            borderRadius: 9,
        },
        icon: {
            height: 22,
            width: 22,
            fill: theme.PRIMARY_COLOR,
        },
        details: {
            marginLeft: 8,
        },
        title: {
            fontSize: 15,
            fontFamily: "GilroyBold",
            color: theme.PRIMARY_COLOR
        },
        description: {
            fontSize: 13,
            fontFamily: "GilroyMedium",
            marginTop: 4,
            color: theme.SECONDARY_COLOR,
            width: Dimensions.get("window").width / 1.3,
        }
    }
});

export default styles;
