import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Item from "./Item/Item"
import AppContainer from "../../utils/screen"
import { ArrowRightIosIcon, UserAddIcon } from "../../utils/icons"
import styles from "./Notifications.style"
import { getNotifications } from "./NotificationsAPI"
import Alert from "../../components/Alert/Alert"
import Bird from "../../utils/handcrafts/Bird"
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets"
import FreshList from "../../components/FreshList/FreshList"
import Loader from "../../components/Loader/Loader"
import ScaleButton from "../../components/ScaleButton/ScaleButton"
import scaleButtonStyle from "../../views/Communities/Communities.style"

export default function Notifications({ navigation }: any) {
    const [showRequests, setShowRequests] = useState<boolean>(false)
    const [followRequests, setRequests] = useState<number>(0)
    const [list, setList] = useState<any>([])
    const [isFetched, setFetched] = useState<boolean>(false)

    const pageHeight = screenHeightWithoutInsets(115)

    const renderItem = ({ item, index }: any) => {
        return <Item content={item} index={index} key={index} navigation={navigation} />
    }

    useEffect(() => {
        setFetched(false)
        setShowRequests(false)
        setRequests(0)
        setList([])

        getNotifications((response: any) => {
            const data = response.data

            if (data.available) {
                setList(data.list)
                setFetched(true)
                setShowRequests(data.follow_requests.is_private)
                setRequests(data.follow_requests.count)
            }
        })
    }, [])

    return (
        <AppContainer headerTitle={"Bildirimler"} hideTabs={false} navigation={navigation}>
            <View style={{ height: pageHeight }}>
                {isFetched && (
                    <FreshList
                        data={list}
                        renderComponent={renderItem}
                        HeaderComponent={followRequests !== 0 && (
                            <ScaleButton
                                onPress={() => navigation.push("UserList", {
                                    type: "follow_requests"
                                })}
                                activeScale={0.95}
                                contentContainerStyle={[scaleButtonStyle.header_button, { marginBottom: 15 }]}
                            >
                                <View>
                                    <Text style={scaleButtonStyle.header_button_title}>Takip İstekleri</Text>
                                    <Text style={scaleButtonStyle.header_button_description}>{followRequests} yeni takip isteği</Text>
                                </View>
                                <View>
                                    <ArrowRightIosIcon style={scaleButtonStyle.header_button_icon} />
                                </View>
                            </ScaleButton>
                        )}
                    />
                )}
                {(isFetched && list.length === 0) && (
                    <View style={styles.center_container}>
                        <Alert
                            image={<Bird />}
                            title={"Pırıl pırıl!"}
                            description={"Hepimiz yeni mektup taşıyan bir güvercini bekliyoruz..."}
                        />
                    </View>
                )}
                {!isFetched && (
                    <View style={styles.center_container}>
                        <Loader clearStyles={true} />
                    </View>
                )}
            </View>
        </AppContainer>
    )
}
