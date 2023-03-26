import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator, Platform, FlatList, Dimensions } from "react-native"
import Item from "./Item/Item"
import ScreenContainer from "../../utils/screen"
import { ArrowRightIosIcon, PencilIcon, UserAddIcon } from "../../utils/icons"
import styles from "./Container.style"
import { getNotifications } from "./NotificationsAPI"
import Alert from "../../components/Alert/Alert"
import Notify from "../../utils/illustrations/Notify"
import getTheme from "../../constants/colors"
import { useSelector } from "react-redux"
import { FlashList } from "@shopify/flash-list"
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets"

const theme = getTheme()

export default function Notifications({ navigation }: any) {
    const state = useSelector((state: any) => state) as any

    const [showRequests, setShowRequests] = useState<boolean>(false)
    const [followRequests, setRequests] = useState<number>(0)
    const [list, setList] = useState<any>([])
    const [isFetched, setFetched] = useState<boolean>(false)

    const pageHeight = screenHeightWithoutInsets()

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
    }, [state.preferences.setRefresh])

    return (
        <ScreenContainer headerTitle={"Bildirimler"} hideTabs={true} navigation={navigation}>
            {showRequests && followRequests !== 0 && (
                <TouchableOpacity activeOpacity={0.8} style={styles.follow_requests_button_container} onPress={() => navigation.navigate("FollowRequests")}>
                    <View style={styles.follow_requests_icon}>
                        <UserAddIcon
                            style={{
                                height: 20,
                                width: 20,
                                fill: "#000",
                            }}
                        />
                    </View>
                    <View style={styles.follow_requests_details}>
                        <Text style={styles.follow_requests_text}>Takip İstekleri</Text>
                        <Text style={styles.follow_requests_description}>{followRequests} yeni takip isteği</Text>
                    </View>
                    <ArrowRightIosIcon style={styles.category_arrow} />
                </TouchableOpacity>
            )}
            <View style={styles.notifications_container}>
                {(isFetched && list.length !== 0) && (
                    <View style={{ height: pageHeight, width: Dimensions.get("window").width }}>
                        <FlashList
                            data={list}
                            estimatedItemSize={50}
                            renderItem={renderItem}
                        />
                    </View>
                )}

                {isFetched && list.length === 0 && (
                    <Alert image={<Notify themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />} title={"Tertemiz!"} description={"Yeni bildirimler geldiğinde burada görebilirsin!"} />
                )}

                {!isFetched && (
                    <View
                        style={{
                            backgroundColor: theme.BOX_BACKGROUND,
                            width: "100%",
                            borderRadius: 15,
                            marginBottom: 12,
                            padding: 30,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} color={theme.THEME_COLOR} />
                    </View>
                )}
            </View>
        </ScreenContainer>
    )
}
