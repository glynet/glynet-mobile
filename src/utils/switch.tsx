import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import getTheme from "../themes/themes";

const theme = getTheme();

export default function Switch(props: any) {
    return (
        <View style={styles.switch_container}>
            <TouchableOpacity activeOpacity={0.8} style={[styles.switch_item, !props.selected ? styles.switch_item_green : null]} onPress={() => {
                props.selector(false);
            }}>
                <Text style={[styles.switch_text, !props.selected ? styles.switch_text_green : null]}>{props.greenText}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={[styles.switch_item, props.selected ? styles.switch_item_red : null]} onPress={() => {
                props.selector(true);
            }}>
                <Text style={[styles.switch_text, props.selected ? styles.switch_text_red : null]}>{props.redText}</Text>
            </TouchableOpacity>
        </View>
    );
}

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
