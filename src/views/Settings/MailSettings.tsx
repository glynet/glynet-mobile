import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from "react-native"
import AppContainer from "../../utils/screen"
import getTheme from "../../constants/colors"

const theme = getTheme()

export default function MailSettings({ navigation }: any) {
    const [currentMail, setCurrentMail] = useState<string>("metehansaral@glynet.com")
    const [newMail, setNewMail] = useState<string>(currentMail)
    const [isValid, setValid] = useState<boolean>(true)

    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

    return (
        <AppContainer headerTitle={"E-Posta Ayarları"} hideTabs={true} navigation={navigation}>
            <View style={styles.profile_inputs_container}>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>E-posta adresi</Text>
                    <TextInput
                        value={newMail}
                        placeholder={"E-posta adresi"}
                        onChangeText={(newValue) => {
                            setNewMail(newValue)
                            setValid(Boolean(newValue.match(isValidEmail)))
                        }}
                        style={styles.profile_input}
                        maxLength={24}
                    />
                    {!isValid && <Text style={styles.profile_input_warn}>Lütfen geçerli bir e-posta adresi girin.</Text>}
                </View>
                <View style={{ padding: 15 }}>
                    {(newMail === currentMail || !isValid) && (
                        <View style={styles.profile_button}>
                            <Text style={styles.profile_button.text}>E-Posta Adresini Güncelle</Text>
                        </View>
                    )}
                    {newMail !== currentMail && isValid && (
                        <TouchableOpacity style={[styles.profile_button, styles.profile_button_colored]} activeOpacity={0.8}>
                            <Text style={[styles.profile_button.text, styles.profile_button_colored.text]}>E-Posta Adresini Güncelle</Text>
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
