import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import ScreenContainer from "../../utils/screen";
import styles from "./CreatePost.style";
import {AlbumIcon, CameraFilledIcon, CrossIcon, LocationPinIcon, VideoCameraFilledIcon} from "../../utils/icons";
import getTheme from "../../constants/colors";
const theme = getTheme();

export default function CreatePost({ navigation }: any) {
    const [location, setLocation] = useState<string|null>(null);
    const [text, setText] = useState<string>("");
    const [send, setSend] = useState<boolean>(false);

    return (
        <ScreenContainer headerTitle={"Yeni Gönderi"} hideTabs={true} navigation={navigation}>
            <View style={styles.container}>

                <View style={styles.top}>
                    <Image
                        style={styles.userAvatar}
                        source={{
                            uri: "https://source.unsplash.com/random?human"
                        }}
                    />
                    <View style={styles.details}>
                        <Text style={styles.userName}>Metehan Saral</Text>
                        {location === null && <Text style={styles.username} onPress={() => setLocation("Caddebostan")}>@saral</Text>}
                        {location !== null && <Text style={styles.location} onPress={() => setLocation(null)}>{location}</Text>}
                    </View>
                </View>

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
                    {Array(4).fill("").map((item, index) => {
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
                                        uri: "https://source.unsplash.com/random?view"
                                    }}
                                />
                            </View>
                        );
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
                    <View style={styles.send_container}>
                        <TouchableOpacity activeOpacity={0.8} style={[
                            styles.send_button,
                            !send ? styles.send_button_disabled : null
                        ]}>
                            <Text style={[
                                styles.send_button.text,
                                !send ? styles.send_button_disabled.text : null
                            ]}>Paylaş</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScreenContainer>
    )
}
