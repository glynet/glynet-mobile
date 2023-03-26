import { Image, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import styles from "./Spotlight.style"

export default function Spotlight() {
    const [isViewed, setViewed] = useState<boolean>(Math.floor(Math.random() * 100) < 50)

    return (
        <TouchableOpacity style={[styles.shot_container, !isViewed ? { opacity: 0.8 } : null]} activeOpacity={0.7}>
            <View style={[styles.shot_avatar_container, !isViewed ? { backgroundColor: "rgba(142,142,148,0.62)" } : null]}>
                <Image
                    style={styles.shot_avatar}
                    source={{
                        uri: "https://source.unsplash.com/random",
                    }}
                />
            </View>
            <Text style={[styles.shot_username, !isViewed ? { color: "#76767b" } : null]}>alpsar4l</Text>
        </TouchableOpacity>
    )
}
