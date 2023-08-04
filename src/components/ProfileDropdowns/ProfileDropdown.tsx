import React, { useState } from "react"
import { Share, View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';
import { sliceText } from "../../utils/functions";
import ScaleButton from "../ScaleButton/ScaleButton";
import { useDispatch, useSelector } from "react-redux";
import * as Clipboard from "expo-clipboard";
import { useToast } from "react-native-toast-notifications";
import { vibrate } from "../../helpers/vibration";
import axios from "axios";
import { setProfile } from "../../store/preferences";

export default function ProfileDropdown({ navigation, modalRef }: any) {
    const state = useSelector((state: any) => state) as any
    const dispatch = useDispatch()
    const toast = useToast()

    const [isMuted, setMuted] = useState<boolean>(state.preferences.profile.data.profile.is_muted)
    const [isBlocked, setBlocked] = useState<boolean>(state.preferences.profile.data.profile.is_blocked)

    async function copylink() {
        vibrate()

        await Clipboard.setStringAsync("https://glynet.com/@" + state.preferences.profile.username).then(() => {
            toast.show("Bağlantı panoya kopyalandı")
        })
    }

    async function share() {
        Share.share({
            message: "https://glynet.com/@" + state.preferences.profile.username
        })
        .then((result) => console.log(result))
        .catch((errorMsg) => console.log(errorMsg));
    }

    function report() {
        modalRef.current?.close()
        navigation.navigate("Report", {
            username: state.preferences.profile.username
        })
    }

    function barrier(type: "block" | "mute") {
        if (type === "mute") setMuted(!isMuted)
        if (type === "block") setBlocked(!isBlocked)

        const profile_data_redux = state.preferences.profile;

        axios({
            method: "POST",
            url: "/api/@me/v1/profile/barrier/" + type,
            data: { username: state.preferences.profile.username },
        })
            .then((data) => {
                const response = data.data;

                if (response.status === "blocked") {
                    if (type === "mute") {
                        setMuted(true)
                        profile_data_redux["data"]["profile"]["is_muted"] = true
                        toast.show(state.preferences.profile.username + " susturuldu")
                    } else if (type === "block") {
                        setBlocked(true)
                        profile_data_redux["data"]["profile"]["is_blocked"] = true
                        toast.show(state.preferences.profile.username + " engellendi")
                    }

                    dispatch(setProfile(profile_data_redux))
                } else {
                    if (type === "mute") {
                        setMuted(false)
                        profile_data_redux["data"]["profile"]["is_muted"] = false
                        toast.show(state.preferences.profile.username + " susturması kaldırıldı")
                    } else if (type === "block") {
                        setBlocked(false)
                        profile_data_redux["data"]["profile"]["is_blocked"] = false
                        toast.show(state.preferences.profile.username + " engelleme kaldırıldı")
                    }

                    dispatch(setProfile(profile_data_redux))
                }
            })
            .catch(() => {
                if (type === "mute") setMuted(!isMuted)
                if (type === "block") setBlocked(!isBlocked)
                toast.show("Bir hata meydana geldi, daha sonra tekrar deneyin")
            })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.group_h}>
                    <ScaleButton contentContainerStyle={[styles.item_h, styles.no_marginl]} activeScale={0.9} onPress={copylink}>
                        <Feather name="link" size={24} color="black" />
                        <View style={styles.item_text_h}>
                            <Text style={styles.item_text}>{sliceText("Bağlantıyı kopyala", 14)}</Text>
                        </View>
                    </ScaleButton>
                    <ScaleButton contentContainerStyle={[styles.item_h]} activeScale={0.9} onPress={share}>
                        <Feather name="share" size={24} color="black" />
                        <View style={styles.item_text_h}>
                            <Text style={styles.item_text}>Paylaş</Text>
                        </View>
                    </ScaleButton>
                </View>
                <View style={styles.group}>
                    <ScaleButton activeScale={0.9} contentContainerStyle={[styles.item, styles.no_border]} onPress={() => barrier("mute")}>
                        <Text style={styles.item_text}>{isMuted ? "Susturmayı kaldır" : "Sessize al"}</Text>
                    </ScaleButton>
                </View>
                <View style={styles.group}>
                    <ScaleButton activeScale={0.9} contentContainerStyle={[styles.item, styles.no_border]} onPress={() => barrier("block")}>
                        <Text style={[styles.item_text, styles.item_red_text]}>{isBlocked ? "Engeli kaldır" : "Engelle"}</Text>
                    </ScaleButton>
                    <ScaleButton activeScale={0.9} contentContainerStyle={styles.item} onPress={report}>
                        <Text style={[styles.item_text, styles.item_red_text]}>Bildir</Text>
                    </ScaleButton>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 17
    },
    group_h: {
        flexDirection: "row",
        marginBottom: 15,
    },
    group: {
        backgroundColor: "rgba(245,246,247,0.8)",
        borderRadius: 10,
        marginBottom: 15,
    },
    item_text_h: {
        marginTop: 5,
    },
    item_h: {
        backgroundColor: "rgba(245,246,247,0.8)",
        borderRadius: 10,
        marginLeft: 15,
        width: "100%",
        flexShrink: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        flexDirection: "column"
    },
    item: {
        padding: 15,
        borderTopColor: "rgb(234,234,234)",
        borderTopWidth: 1,
    },
    item_text: {
        fontSize: 15.5,
        fontFamily: "Bold",
        color: "rgb(30,30,30)"
    },
    item_red_text: {
        color: "rgb(225,38,38)"
    },
    no_border: {
        borderTopWidth: 0,
    },
    no_marginl: {
        marginLeft: 0
    }
})
