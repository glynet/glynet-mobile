import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from "react-native"
import { PencilIcon } from "../../utils/icons"
import AppContainer from "../../utils/screen"
import { useRoute } from "@react-navigation/native"
import getTheme from "../../constants/colors"

const theme = getTheme()

export default function PasswordSettings({ navigation }: any) {
    const [currentMail, setCurrentMail] = useState<string>("")
    const [newMail, setNewMail] = useState<string>("")
    const [newMailAgain, setNewMailAgain] = useState<string>("")

    const [isValid, setValid] = useState<boolean>(false)

    useEffect(() => {
        setValid(false)

        if (newMail.length >= 6) {
            if (newMail === newMailAgain) {
                setValid(true)
            }
        }
    }, [currentMail, newMail, newMailAgain])

    return (
        <AppContainer headerTitle={"Şifre Değiştirme"} hideTabs={true} navigation={navigation}>
            <View style={styles.profile_inputs_container}>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>Güncel şifre</Text>
                    <TextInput value={currentMail} onChangeText={(newValue) => setCurrentMail(newValue)} placeholder={"Güncel şifre"} style={styles.profile_input} maxLength={24} />
                </View>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>Yeni şifre</Text>
                    <TextInput value={newMail} onChangeText={(newValue) => setNewMail(newValue)} placeholder={"Yeni şifre"} style={styles.profile_input} maxLength={24} />
                </View>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>Yeni şifre tekrarı</Text>
                    <TextInput value={newMailAgain} onChangeText={(newValue) => setNewMailAgain(newValue)} placeholder={"Yeni şifre tekrarı"} style={styles.profile_input} maxLength={24} />
                </View>
                <View style={{ padding: 15 }}>
                    {!isValid && (
                        <View style={styles.profile_button}>
                            <Text style={styles.profile_button.text}>Şifreyi Güncelle</Text>
                        </View>
                    )}
                    {isValid && (
                        <TouchableOpacity style={[styles.profile_button, styles.profile_button_colored]} activeOpacity={0.8}>
                            <Text style={[styles.profile_button.text, styles.profile_button_colored.text]}>Şifreyi Güncelle</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    profile_inputs_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        width: "100%",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: 15,
    },
    profile_input_container: {
        padding: 15,
        borderBottomWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
    },
    profile_input_title: {
        fontWeight: "normal",
        fontSize: 14,
        color: theme.PRIMARY_COLOR,
    },
    profile_input_warn: {
        fontWeight: "normal",
        fontSize: 11,
        marginTop: 7,
        color: "#ff0000",
    },
    profile_input: {
        borderWidth: theme.BORDER_WIDTH,
        borderColor: theme.BORDER_COLOR,
        backgroundColor: theme.INPUT_BACKGROUND,
        padding: 12,
        fontSize: 14,
        // borderRadius: 12,
        marginTop: 7,
        color: theme.PRIMARY_COLOR,
    },

    profile_buttons: {
        flexDirection: "row",
        marginTop: 15 - 12,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
    },
    profile_button: {
        padding: 14,
        // borderRadius: 12,
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: theme.BUTTON_BACKGROUND,
        backgroundColor: theme.BUTTON_BACKGROUND,
        text: {
            color: theme.BUTTON_COLOR,
            marginLeft: 4,
            fontWeight: "bold",
            fontSize: 14,
        },
    },
    profile_button_colored: {
        borderColor: "rgba(1,6,255,0.73)",
        backgroundColor: "rgba(0,5,255,0.16)",
        text: {
            color: "rgb(0,2,108)",
        },
    },
})
