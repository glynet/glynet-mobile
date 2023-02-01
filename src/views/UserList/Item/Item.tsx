import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {CheckmarkIcon, CrossIcon, UserAddIcon, UserDoneIcon} from "../../../utils/icons";
import styles from "./Item.style";

export default function Item({ data }: any) {
    const [isFollowing, setFollowing] = useState<boolean>(data.isFollowing);

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.notification_container}>
            <Image
                style={styles.notification_avatar}
                source={{
                    uri: "https://source.unsplash.com/random?human&" + data.id
                }}
            />
            <View style={styles.notification_details}>
                <Text style={{...styles.notification_text, fontFamily: "GilroyBold"}}>{data.name}</Text>
                <Text style={styles.notification_date}>{data.username}</Text>
            </View>
            <View style={styles.buttons}>
                {isFollowing && (
                    <TouchableOpacity activeOpacity={0.8} style={styles.button_container} onPress={() => setFollowing(false)}>
                        <UserDoneIcon style={styles.button_icon} />
                        <Text style={styles.button_text}>Takip Ediliyor</Text>
                    </TouchableOpacity>
                )}
                {!isFollowing && (
                    <TouchableOpacity activeOpacity={0.8} style={styles.button_container} onPress={() => setFollowing(true)}>
                        <UserAddIcon style={styles.button_icon} />
                        <Text style={styles.button_text}>Takip Et</Text>
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );
}
