import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function Notification() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.notification_container}>
            <Image
                style={styles.notification_avatar}
                source={{
                    uri: "https://source.unsplash.com/random"
                }}
            />
            <View style={styles.notification_details}>
                <Text style={styles.notification_text}><Text style={{ fontFamily: "GilroyBold", }}>metehansaral</Text> bir gönderini beğendi</Text>
                <Text style={styles.notification_date}>1 saat önce</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    notification_container: {
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(164,164,164,0.7)",
        flexDirection: "row",
        alignItems: "center"
    },
    notification_details: {
        marginLeft: 10,
    },
    notification_text: {
        fontSize: 16,
        fontFamily: "GilroyMedium",
        color: "#373b4b",
    },
    notification_date: {
        fontSize: 14,
        marginTop: 3,
        color: "#666a7b",
        fontFamily: "GilroyMedium",
    },
    notification_avatar: {
        height: 45,
        width: 45,
        borderRadius: 100,
        backgroundColor: "purple"
    }
});
