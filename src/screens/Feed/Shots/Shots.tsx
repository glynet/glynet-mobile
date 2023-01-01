import React from "react";
import {Image, StyleSheet, View, Text, ScrollView} from "react-native";
import Shot from "./Shot/Shot";

export default function Shots() {
    return (
        <ScrollView style={styles.shots_container} horizontal={true} showsHorizontalScrollIndicator={false}>
            {Array(30).fill("").map((item, index) => {
                return <Shot key={index} />;
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    shots_container: {
        backgroundColor: "#ffffff",
        padding: 12,
        paddingLeft: 0,
        flexDirection: "row",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomColor: "rgba(164,164,164,0.7)",
        borderRadius: 15
    }
});
