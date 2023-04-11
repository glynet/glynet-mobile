import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import AppContainer from "../../utils/screen"
import styles from "./CreatePost.style"
import { AlbumIcon, CameraFilledIcon, CrossIcon, LocationPinIcon, MentionIcon, VideoCameraFilledIcon } from "../../utils/icons"
import getTheme from "../../constants/colors"
const theme = getTheme()

export default function CreatePost({ navigation }: any) {
    const [location, setLocation] = useState<string | null>(null)
    const [text, setText] = useState<string>("")
    const [send, setSend] = useState<boolean>(false)

    return (
        <AppContainer headerTitle={"Yeni Gönderi"} hideTabs={true} navigation={navigation}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        style={styles.textArea}
                        value={text}
                        onChange={(e: any) => setText(e.target.value)}
                        placeholder={"Aklından neler geçiyor?"}
                        placeholderTextColor={theme.SECONDARY_COLOR}
                    />
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.attachments}>
                    {Array(4)
                        .fill("")
                        .map((item, index) => {
                            return (
                                <View key={index} style={styles.attachment}>
                                    <View style={styles.attachment_buttons}>
                                        <View style={styles.attachment_button}>
                                            <CrossIcon style={styles.attachment_button.icon} />
                                        </View>
                                    </View>
                                    <Image
                                        style={styles.attachment_content}
                                        source={{
                                            uri: "https://source.unsplash.com/random?view",
                                        }}
                                    />
                                </View>
                            )
                        })}
                </ScrollView>

                <View style={styles.bottom}>
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <AlbumIcon style={styles.button.icon} />
                        </View>
                        <View style={styles.button}>
                            <VideoCameraFilledIcon style={styles.button.icon} />
                        </View>
                        <View style={styles.button}>
                            <CameraFilledIcon style={styles.button.icon} />
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <MentionIcon style={styles.button.icon} />
                        </View>
                        <View style={styles.button}>
                            <LocationPinIcon style={styles.button.icon} />
                        </View>
                    </View>
                </View>
            </View>
        </AppContainer>
    )
}
