import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {MailIcon} from "../../../utils/icons";
import styles from "./Item.style";
import * as SMS from "expo-sms";

export default function Item({ data, sendInvite }: any) {
    const item = {
        name:
            data.name === undefined
                ? "Hayati"
                : data.name,

        number: (
            data.phoneNumbers === undefined ?
                [] :
                data.phoneNumbers
        ).length !== 0 ?
            data.phoneNumbers[0].number :
            "no_number",

        avatar:
            data.image === undefined ?
                require("../../../../assets/avatars/octopus-2.png") :
                { uri: data.image.uri }
    }

    if (item.number === "no_number")
        return null;

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.notification_container}>
            <Image
                style={styles.notification_avatar}
                source={item.avatar}
            />
            <View style={styles.notification_details}>
                <Text style={{...styles.notification_text, fontFamily: "GilroyBold"}}>{item.name}</Text>
                <Text style={styles.notification_date}>{item.number}</Text>
            </View>
            <View style={styles.buttons}>
                {sendInvite && (
                    <TouchableOpacity activeOpacity={0.8} style={styles.button_container} onPress={async () => {
                        await SMS.sendSMSAsync(
                            [item.number],
                            "Selam, seni Glynet'te görmek isterim. https://glynet.com",
                        );
                    }}>
                        <MailIcon style={styles.button_icon} />
                        <Text style={styles.button_text}>Davet Et</Text>
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );
}
