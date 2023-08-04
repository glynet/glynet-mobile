import React, { memo, useCallback, useMemo, useRef } from "react"
import AppStyles from "../../App.style"
import { Text, Image, TextInput, View, Alert, Pressable } from "react-native"
import { ArrowLeftIcon, CheckmarkOutlineIcon, BellOutlineIcon, CameraIcon, SearchOutlineIcon, SettingsIcon, TrashIcon, VerticalIcon } from "../../utils/icons"
import { useRoute } from "@react-navigation/native"
import { sendNotification } from "../../hooks/sendNotifications"
import { setInput } from "../../store/header"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import ScaleButton from "../ScaleButton/ScaleButton"

import { BottomSheetModal } from "@gorhom/bottom-sheet"
import ProfileDropdown from "../ProfileDropdowns/ProfileDropdown"
import BottomModal from "../../utils/modal"

function Header({ title, navigation }: any) {
    const dispatch = useDispatch()
    const state = useSelector((state) => state) as any
    const route = useRoute()

    if (title !== undefined) {
        const bottomSheetMoreModalRef = useRef<BottomSheetModal>(null)
        const handlePresentMoreModalPress = useCallback(() => {
            bottomSheetMoreModalRef.current?.present()
        }, [])

        return (
            <View style={AppStyles.header}>
                <ScaleButton onPress={() => navigation.goBack()} contentContainerStyle={AppStyles.headerButton}>
                    <ArrowLeftIcon style={AppStyles.headerButton.icon} />
                </ScaleButton>
                <Pressable style={AppStyles.headerText}>
                    <Text style={AppStyles.headerText.text}>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</Text>
                </Pressable>

                {route.name === "Notifications" && (
                    <ScaleButton activeScale={0.7} contentContainerStyle={AppStyles.headerButton} onPress={() => navigation.navigate("NotificationSettings")}>
                        <SettingsIcon style={AppStyles.headerButton.icon} />
                    </ScaleButton>
                )}

                {route.name === "Profile" && (
                    <>
                        <BottomModal modalRef={bottomSheetMoreModalRef} snapPoints={useMemo(() => ["43%", "43%"], [])}>
                            <ProfileDropdown navigation={navigation} modalRef={bottomSheetMoreModalRef} />
                        </BottomModal>
                        <ScaleButton activeScale={0.7} contentContainerStyle={AppStyles.headerButton} onPress={handlePresentMoreModalPress}>
                            <VerticalIcon style={AppStyles.headerButton.icon} />
                        </ScaleButton>
                    </>
                )}

                {route.name === "Bookmarks" && (
                    <ScaleButton
                        activeScale={0.7}
                        contentContainerStyle={AppStyles.headerButton}
                        onPress={() => {
                            Alert.alert("Emin misiniz?", "Devam ederseniz tüm kaydedilenler listeden çıkartılacak.", [
                                { text: "Vazgeçtim", style: "cancel" },
                                {
                                    text: "Sil Gitsin",
                                    onPress: () => {
                                        axios.delete("/api/@me/posts/bookmarks").then((response: any) => {
                                            if (response.data.status) {
                                                Alert.alert("Tamamdır", "Kaydedilenler başarıyla sıfırlandı.")
                                                navigation.goBack()
                                            } else {
                                                Alert.alert("Bir hata meydana geldi", "Kaydedilenler sıfırlanırken bir hata meydana geldi, lütfen daha sonra tekrar deneyin.")
                                            }
                                        })
                                    },
                                },
                            ])
                        }}
                    >
                        <TrashIcon style={AppStyles.headerButton.icon} />
                    </ScaleButton>
                )}

                {!["Notifications", "Profile", "Bookmarks"].includes(route.name) && (
                    <Pressable style={[AppStyles.headerButton, { opacity: 0 }]}>
                        <ArrowLeftIcon style={AppStyles.headerButton.icon} />
                    </Pressable>
                )}
            </View>
        )
    } else {
        return (
            <View style={[AppStyles.header]}>
                <ScaleButton activeScale={0.7} contentContainerStyle={AppStyles.headerButton} onPress={() => alert("Kamera")}>
                    <CameraIcon style={AppStyles.headerButton.icon} />
                </ScaleButton>

                <Image
                    source={require("../../../assets/looplens-text-250x70-mono.png")}
                    style={{
                        height: 30,
                        resizeMode: "contain"
                    }}
                />

                <ScaleButton
                    activeScale={0.7}
                    contentContainerStyle={AppStyles.headerButton}
                    onPress={() => {
                        navigation.navigate("Notifications")
                        sendNotification({
                            title: "avokadoyesili",
                            body: "bir yorumunu beğendi",
                        })
                    }}
                >
                    <BellOutlineIcon style={AppStyles.headerButton.icon} />
                </ScaleButton>
            </View>
        )
    }
}

export default memo(Header)
