import React, { useState } from "react"
import { Text, View } from "react-native"
import AppContainer from "../../utils/screen"
import Switch from "../../components/Switch/Switch"
import styles from "./Settings.style"

export default function PrivacySettings({ navigation }: any) {
    const [profilePrivacy, setProfilePrivacy] = useState<boolean>(false)
    const [hideNSFW, setHideNSFW] = useState<boolean>(true)

    return (
        <AppContainer headerTitle={"Gizlilik ve Güvenlik"} hideTabs={false} navigation={navigation}>
            {/* <TouchableOpacity activeOpacity={0.8} style={styles.follow_requests_button_container} onPress={() => navigation.navigate("LoginDevices")}>
                <View style={styles.follow_requests_icon}>
                    <SecurityOutlineIcon style={{
                        height: 20,
                        width: 20,
                        fill: "#000"
                    }}/>
                </View>
                <View style={styles.follow_requests_details}>
                    <Text style={styles.follow_requests_text}>Giriş yapılan cihazlar</Text>
                    <Text style={styles.follow_requests_description}>Son giriş yapılan cihazları görüntüleyin</Text>
                </View>
                <ArrowRightIosIcon style={styles.category_arrow} />
            </TouchableOpacity> */}

            <View style={styles.profile_inputs_container}>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>Profil gizliliği</Text>
                    <Text style={styles.profile_input_title_desc}>Herkese açık profiller tüm kullanıcılar tarafından görünür ve arama motoru sonuçlarında yer alır.</Text>
                    <Switch selected={profilePrivacy} selector={setProfilePrivacy} greenText={"Herkese açık"} redText={"Gizli"} />
                </View>
                <View
                    style={{
                        ...styles.profile_input_container,
                        borderBottomWidth: 0,
                    }}
                >
                    <Text style={styles.profile_input_title}>Sakıncalı içeriği buzla</Text>
                    <Text style={styles.profile_input_title_desc}>Sakıncalı içerik olarak işaretlenen gönderileri ve shotları buzla.</Text>
                    <Switch selected={hideNSFW} selector={setHideNSFW} greenText={"Göster"} redText={"Buzla"} />
                </View>
            </View>
        </AppContainer>
    )
}
