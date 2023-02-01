import {Dimensions, StyleSheet} from "react-native";
import getTheme from "../../constants/colors";
const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.BOX_BACKGROUND,
        borderRadius: 12,
        flex: 1,
    },
    top: {
        padding: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // borderBottomWidth: 1,
        borderColor: theme.BORDER_COLOR
    },
    userAvatar: {
        height: Dimensions.get("window").width / 9,
        width: Dimensions.get("window").width / 9,
        borderRadius: 100,
    },
    username: {
        fontSize: 13,
        fontFamily: "GilroyMedium",
        color: theme.SECONDARY_COLOR,
        marginTop: 2,
    },
    location: {
        fontSize: 13,
        fontFamily: "GilroyMedium",
        color: theme.THEME_COLOR,
        marginTop: 2,
    },
    details: {
        marginLeft: 8,
    },
    userName: {
        fontSize: 16,
        fontFamily: "GilroyBold",
        color: theme.PRIMARY_COLOR
    },
    addLocation: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 1.5,
        borderRadius: 30,
        borderWidth: 1,
        padding: 8,
        paddingHorizontal: 10,
        borderColor: theme.BORDER_COLOR,

        icon: {
            height: 16,
            width: 16,
            fill: theme.PRIMARY_COLOR
        },
        text: {
            fontSize: 16,
            color: theme.PRIMARY_COLOR,
            marginLeft: 2,
            fontFamily: "GilroyMedium",
        }
    },
    content: {
        height: 200,
    },
    textArea: {
        textAlign: "left",
        color: theme.PRIMARY_COLOR,
        margin: 12,
        marginTop: 0,
        fontSize: 19,
        maxHeight: 200,
    },
    bottom: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
    },
    send_container: {
        padding: 12,
    },
    send_button: {
        borderRadius: 50,
        padding: 6,
        paddingHorizontal: 13,
        backgroundColor: "rgba(114,66,218,0.16)",
        borderWidth: 1,
        borderColor: theme.THEME_COLOR,
        text: {
            fontFamily: "GilroyBold",
            fontSize: 17,
            color: theme.THEME_COLOR,
        }
    },
    send_button_disabled: {
        borderColor: theme.INPUT_BACKGROUND,
        backgroundColor: theme.INPUT_BACKGROUND,
        text: {
            color: theme.SECONDARY_COLOR,
        }
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 6,
    },
    button: {
        padding: 6,
        borderRadius: 100,
        icon: {
            height: 26,
            width: 26,
            fill: theme.SECONDARY_COLOR,
        }
    },
    attachments: {
        display: "flex",
        marginBottom: 12,
        paddingLeft: 12,
    },
    attachment: {
        marginRight: 12,
        height: 200,
        width: 200,
        borderRadius: 12,
        position: "relative",
        backgroundColor: theme.THEME_COLOR,
    },
    attachment_content: {
        height: 200,
        width: 200,
        borderRadius: 12,
        backgroundColor: theme.THEME_COLOR,
    },
    attachment_buttons: {
        top: 10,
        right: 10,
        position: "absolute",
        zIndex: 1,
    },
    attachment_button: {
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        icon: {
            height: 26,
            width: 26,
            fill: "#d3d3d3",
        }
    }
});

export default styles;
