import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {CheckmarkIcon, CrossIcon} from "../../../utils/icons";
import styles from "./Item.style";

export default function Item({ isFollowRequest }: { isFollowRequest?: boolean }) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.notification_container}>
            <Image
                style={styles.notification_avatar}
                source={{
                    uri: "https://source.unsplash.com/random"
                }}
            />
            {isFollowRequest && (
                <>
                    <View style={styles.notification_details}>
                        <Text style={{...styles.notification_text, fontFamily: "GilroyBold"}}>Metehan Saral</Text>
                        <Text style={styles.notification_date}>alpsar4l</Text>
                    </View>
                    <View style={styles.request_buttons}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.request_button_container} onPress={() => alert("Kabul geri itildi")}>
                            <CrossIcon style={styles.request_button} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.request_button_container} onPress={() => alert("Kabul edildi")}>
                            <CheckmarkIcon style={styles.request_button} />
                        </TouchableOpacity>
                    </View>
                </>
            )}
            {!isFollowRequest && (
                <View style={styles.notification_details}>
                    <Text style={styles.notification_text}><Text style={{ fontFamily: "GilroyBold", }}>saral</Text> bir gönderini beğendi</Text>
                    <Text style={styles.notification_date}>1 saat önce</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
