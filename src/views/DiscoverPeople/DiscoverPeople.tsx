import React, { useEffect, useState } from "react"
import { View, ActivityIndicator, Platform } from "react-native"
import Item from "./Item/Item"
import ScreenContainer from "../../utils/screen"
import styles from "./Container.style"
import getTheme from "../../constants/colors"
import * as Contacts from "expo-contacts"
import * as SMS from "expo-sms"
import Alert from "../../components/Alert/Alert"
import FeelingBlue from "../../utils/illustrations/FeelingBlue"

const theme = getTheme()

export default function DiscoverPeople({ navigation }: any) {
    const [isFetching, setFetching] = useState<boolean>(false)
    const [sendInvite, setSendInvite] = useState<boolean>(false)
    const [data, setData] = useState<any>([])

    const getContacts = async (): Promise<boolean> => {
        const { status } = await Contacts.requestPermissionsAsync()

        if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
            })

            if (data.length > 0) {
                setFetching(true)
                setData(data)
            }

            if (await SMS.isAvailableAsync()) setSendInvite(true)

            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        getContacts().then((received) => console.log("APP > Contacts Received: " + received))
    }, [])

    return (
        <ScreenContainer headerTitle={"Tanıyor Olabileceklerin"} hideTabs={true} navigation={navigation}>
            <View style={styles.notifications_container}>
                {isFetching &&
                    data.map((item: any, index: number) => {
                        return <Item data={item} sendInvite={sendInvite} key={index} />
                    })}
                {!isFetching && (
                    <View
                        style={{
                            padding: 30,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} color={theme.THEME_COLOR} />
                    </View>
                )}
                {isFetching && data.length === 0 && (
                    <Alert
                        image={<FeelingBlue style={{ height: 85, width: "100%" }} themeColor={theme.ILLUSTRATION_COLOR} />}
                        title={"Kimse yok"}
                        description={"Tanıyor olabileceklerini gösterebilmemiz için öncelikle rehberinde bir kaç kişinin olması gerekiyor..."}
                    />
                )}
            </View>
        </ScreenContainer>
    )
}
