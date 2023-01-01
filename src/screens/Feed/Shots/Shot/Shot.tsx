import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

export default function Shot() {
    const [isViewed, setViewed] = useState<boolean>(Math.floor(Math.random() * 100) < 50);

    return (
        <TouchableOpacity style={[
            styles.shot_container,
            !isViewed ? { opacity: 0.8 } : null
        ]} activeOpacity={0.7}>
            <View style={[
                styles.shot_avatar_container,
                !isViewed ? { backgroundColor: "rgba(142,142,148,0.62)" } : null
            ]}>
                <Image
                    style={styles.shot_avatar}
                    source={{
                        uri: "https://source.unsplash.com/random"
                    }}
                />
            </View>
            <Text style={[
                styles.shot_username,
                !isViewed ? { color: "#76767b" } : null
            ]}>alpsar4l</Text>
        </TouchableOpacity>
    )
}

const indicatorColor = "#e05c1a";

const avatarSize = 65;

const styles = StyleSheet.create({
    shot_container: {
        flexDirection: "column",
        width: avatarSize + 5,
        marginLeft: 12,
    },
    shot_avatar_container: {
        backgroundColor: indicatorColor,
        width: avatarSize + 5,
        height: avatarSize + 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    shot_avatar: {
        height: avatarSize,
        width: avatarSize,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#ffffff"
    },
    shot_username: {
        marginTop: 5,
        textAlign: "center",
        fontSize: 12,
        paddingTop: 1,
        fontFamily: "GilroyBold",
        color: indicatorColor
    }
});
