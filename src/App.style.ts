import {Dimensions, StyleSheet} from "react-native";

const appBackgroundColor = "#F7F7F7";
const contentBackgroundColor = "#E7E8EE";
const headerItemColor = "#1E2129";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appBackgroundColor,
    },
    body: {
        backgroundColor: appBackgroundColor,
        height: "100%",
        width: "100%",
    },
    header: {
        backgroundColor: appBackgroundColor,
        width: "100%",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(164,164,164,0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    header_search: {
        justifyContent: "flex-start",
        height: 65,
        paddingRight: 12,
    },
    headerSearch: {
        backgroundColor: "#e4e4e4",
        padding: 12,
        borderRadius: 13,
        fontSize: 14,
        width: Dimensions.get("window").width - 70,
        marginLeft: -5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerButton: {
        height: 65,
        width: 65,
        alignItems: "center",
        justifyContent: "center",
        icon: {
            fill: headerItemColor,
            height: 28,
            width: 28,
        }
    },
    headerText: {
        alignItems: "center",
        justifyContent: "center",
        height: 65,
        text: {
            marginTop: -2,
            fontSize: 25,
            color: headerItemColor,
            fontFamily: "GilroyBold",
        }
    },
    content: {
        backgroundColor: contentBackgroundColor,
        marginBottom: 65,
    },
    bottomBar: {
        backgroundColor: appBackgroundColor,
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: "rgba(164,164,164,0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    buttonContainer: {
        height: 65,
        width: 65,
        justifyContent: "center",
        icon: {
            height: 28,
            opacity: 0.8,
            fill: headerItemColor
        }
    }
});

export default styles;
