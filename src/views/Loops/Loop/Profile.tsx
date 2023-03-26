import React, { memo } from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "./Loop.style"
import { VerifiedIcon } from "../../../utils/icons"
import TextView from "../../../components/TextView/TextView"
import { calculateUserFlags } from "../../../utils/flags"

const Profile = ({ author, text, navigation }: any) => {
    return (
        <View style={styles.details_content}>
            <View style={styles.author_details}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.author_avatar}
                    onPress={() => {
                        navigation.push("Profile", { name: author.username })
                    }}
                >
                    <Image
                        source={{
                            uri: global.CDN_URL + "/" + author.avatar,
                        }}
                        style={styles.author_avatar}
                    />
                </TouchableOpacity>
                <View style={styles.author_username_container}>
                    <View style={styles.author_name_container}>
                        <Text
                            style={styles.author_name}
                            onPress={() => {
                                navigation.push("Profile", {
                                    name: author.username,
                                })
                            }}
                        >
                            {author.username}
                        </Text>
                        {calculateUserFlags(author.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.author_badge} />}
                    </View>
                </View>
            </View>

            {text.length !== 0 && (
                <View style={styles.text_content}>
                    <TextView style={styles.text} mentionHashtagColor={"#FFFFFF"}>
                        {text.length >= 128 ? text.slice(0, 128) + "..." : text}
                    </TextView>
                </View>
            )}

            {/*
            <View style={styles.loop_bottom}>                            
                <View style={styles.loop_mute_button_container}>
                    <View style={styles.loop_mute_button}>
                        <PlayIconFilled style={styles.loop_bottom_icon} />
                    </View>
                    <MarqueeView style={styles.loop_bottom_text_container} speed={0.08}>
                        <Text style={styles.loop_bottom_text_title}><Text style={{ fontFamily: "GilroyBold" }}>orijinal 31 ses</Text> - {author.username}</Text>
                    </MarqueeView>
                </View>
            </View>
            */}
        </View>
    )
}

export default memo(Profile)
