import {Dimensions, StyleSheet} from "react-native";
import getTheme from "../../../../constants/colors";
const theme = getTheme();

const avatarSize = Dimensions.get("window").width / 6;

const styles = StyleSheet.create({
    shot_container: {
        flexDirection: "column",
        width: avatarSize + 5,
        marginLeft: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    shot_avatar_container: {
        backgroundColor: theme.THEME_COLOR,
        width: avatarSize + 5,
        height: avatarSize + 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    shot_avatar: {
        height: avatarSize,
        width: avatarSize,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: theme.BOX_BACKGROUND
    },
    shot_username: {
        marginTop: 5,
        textAlign: "center",
        fontSize: 12,
        paddingTop: 1,
        fontFamily: "GilroyBold",
        color: theme.THEME_COLOR
    }
});

export default styles;
