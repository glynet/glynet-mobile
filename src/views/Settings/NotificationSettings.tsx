import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import ScreenContainer from "../../utils/screen"
import Switch from "../../components/Switch/Switch"
import styles from "./Settings.style"
import { storeData } from "../../utils/localStorage"
import { useDispatch, useSelector } from "react-redux"
import { setCompactNotifications } from "../../store/preferences"

export default function NotificationSettings({ navigation }: any) {
    const state = useSelector((state: any) => state) as any
    const dispatch = useDispatch()

    const [sendEmail, setSendEmail] = useState<boolean>(false)
    const [compactMode, setCompactMode] = useState<boolean>(state.preferences.compactNotifications)

    useEffect(() => {
        setTimeout(() => {
            storeData("compact_notifications", compactMode.toString())
            dispatch(setCompactNotifications(compactMode))
        }, 150)
    }, [compactMode])

    return (
        <ScreenContainer headerTitle={"Bildirim Ayarları"} hideTabs={true} navigation={navigation}>
            <View style={styles.profile_inputs_container}>
                <View style={{ ...styles.profile_input_container }}>
                    <Text style={styles.profile_input_title}>E-Posta yoluyla bildirim alma</Text>
                    <Text style={styles.profile_input_title_desc}>Bize göre* önemli bildirimleri e-posta yoluyla alma.</Text>
                    <Switch selected={sendEmail} selector={setSendEmail} greenText={"Bildirim alayım"} redText={"Bildirim almayayım"} />
                </View>
                <View
                    style={{
                        ...styles.profile_input_container,
                        borderBottomWidth: 0,
                    }}
                >
                    <Text style={styles.profile_input_title}>Kompakt Görünüm</Text>
                    <Text style={styles.profile_input_title_desc}>Bildirimlere göz atarken gönderi önizlemelerini küçültme</Text>
                    <Switch selected={compactMode} selector={setCompactMode} greenText={"Ciks Görünüm"} redText={"Kompakt"} />
                </View>
            </View>
        </ScreenContainer>
    )
}
