import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput} from "react-native";
import ScreenContainer from "../../utils/screen";
import getTheme from "../../themes/themes";
import Switch from "../../utils/switch";
import styles from "./Settings.style";

export default function NotificationSettings({ navigation }: any) {
    const [sendEmail, setSendEmail] = useState<boolean>(false);

    return (
        <ScreenContainer headerTitle={"Bildirim Ayarları"} hideTabs={true} navigation={navigation}>
            <View style={styles.profile_inputs_container}>
                <View style={{...styles.profile_input_container, borderBottomWidth: 0}}>
                    <Text style={styles.profile_input_title}>E-Posta yoluyla bildirim alma</Text>
                    <Text style={styles.profile_input_title_desc}>Bize göre* önemli bildirimleri e-posta yoluyla alma.</Text>
                    <Switch
                        selected={sendEmail}
                        selector={setSendEmail}
                        greenText={"Bildirim alayım"}
                        redText={"Bildirim almayayım"}
                    />
                </View>
            </View>
        </ScreenContainer>
    );
}
