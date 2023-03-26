import React, { useEffect, useState } from "react"
import { View, Image, Text, TouchableOpacity, ActivityIndicator, Platform } from "react-native"
import ScreenContainer from "../../utils/screen"
import styles from "./FollowRequests.style"
import { CheckmarkIcon, CrossIcon } from "../../utils/icons"
import getTheme from "../../constants/colors"
import { useDispatch, useSelector } from "react-redux"
import { setRefresh } from "../../store/preferences"
import { getFollowRequests, updateUser } from "./FollowRequestsAPI"

const theme = getTheme()

export default function FollowRequests({ navigation }: any) {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state) as any

    const [list, setList] = useState<any>([])
    const [isFetched, setFetched] = useState<boolean>(false)

    const _update = (user: string, accept: boolean) => {
        setFetched(false)

        updateUser(user, accept, (response: any) => {
            const data = response.data
            setFetched(true)

            if (data.status) {
                const new_list = list.filter((item: any) => item.user.id !== user)
                setList(new_list)

                if (new_list.length === 0) {
                    navigation.navigate("Notifications")
                    dispatch(setRefresh())
                }
            }
        })
    }

    useEffect(() => {
        setFetched(false)

        getFollowRequests((response: any) => {
            const data = response.data

            if (data.list) {
                setList(data.list)
                setFetched(true)
            }
        })
    }, [state.preferences.setRefresh])

    return (
        <ScreenContainer headerTitle={"Takip İstekleri"} hideTabs={true} navigation={navigation}>
            <View style={styles.notifications_container}>
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

                {isFetched &&
                    list.length !== 0 &&
                    list.map((item: any, index: number) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} style={[styles.notification_container, index === 0 && { borderTopWidth: 0 }]} key={index}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.follow_request_author}
                                    onPress={() =>
                                        navigation.navigate("Profile", {
                                            name: item.user.username,
                                        })
                                    }
                                >
                                    <Image
                                        style={styles.notification_avatar}
                                        source={{
                                            uri: `${global.CDN_URL}/${item.user.avatar}`,
                                        }}
                                    />
                                    <View style={styles.request_details}>
                                        <Text
                                            style={{
                                                ...styles.notification_text,
                                                fontFamily: "GilroyBold",
                                            }}
                                        >
                                            {item.user.name}
                                        </Text>
                                        <Text style={styles.request_username}>{item.user.username}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.request_buttons}>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.request_button_container} onPress={() => _update(item.user.id, false)}>
                                        <CrossIcon style={styles.request_button} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.request_button_container} onPress={() => _update(item.user.id, true)}>
                                        <CheckmarkIcon style={styles.request_button} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
            </View>
        </ScreenContainer>
    )
}
