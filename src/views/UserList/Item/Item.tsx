import { ActivityIndicator, Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { CheckmarkIcon, CrossIcon, UserAddIcon, UserDoneIcon, VerifiedIcon } from "../../../utils/icons"
import styles from "./Item.style"
import { sliceText } from "../../../utils/functions"
import { calculateUserFlags } from "../../../utils/flags"
import { FollowingTypes } from "../../Profile/Profile"
import { follow } from "../../Profile/ProfileAPI"
import getTheme from "../../../constants/colors"

const theme = getTheme()

export default function Item({ item, index, navigation }: any) {
    const [isFollowing, setFollow] = useState<FollowingTypes>("following")

    const _follow = () => {
        if (isFollowing === "waiting") return

        setFollow("waiting")

        follow(item.user.data.username, (response: any) => {
            const data = response.data

            if (data.status && data.status === "following") {
                setFollow("following")
            } else if (data.status && data.status === "waiting") {
                setFollow("on_request")
            } else {
                setFollow("no_follow")
            }
        })
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.notification_container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.push("Profile", { name: item.user.data.username })} style={styles.user_details}>
                <Image
                    style={styles.notification_avatar}
                    source={{
                        uri: global.CDN_URL + "/" + item.user.data.avatar,
                    }}
                />
                <View style={styles.notification_details}>
                    <View style={styles.user_name}>
                        <Text
                            style={{
                                ...styles.notification_text,
                                fontFamily: "GilroyBold",
                            }}
                        >
                            {sliceText(item.user.data.name, 16, true)}
                        </Text>
                        {calculateUserFlags(item.user.data.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.user_badge} />}
                    </View>
                    <Text style={styles.notification_date}>@{sliceText(item.user.data.username, 16, true)}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.buttons}>
                <TouchableOpacity activeOpacity={0.8} style={styles.button_container} onPress={_follow}>
                    {isFollowing === "following" && (
                        <>
                            <UserDoneIcon style={styles.button_icon} />
                            <Text style={styles.button_text}>Takip Ediliyor</Text>
                        </>
                    )}
                    {isFollowing === "no_follow" && (
                        <>
                            <UserAddIcon style={styles.button_icon} />
                            <Text style={styles.button_text}>Takip Et</Text>
                        </>
                    )}
                    {isFollowing === "on_request" && (
                        <>
                            <UserAddIcon style={styles.button_icon} />
                            <Text style={styles.button_text}>İstek Gönderildi</Text>
                        </>
                    )}
                    {isFollowing === "waiting" && (
                        <>
                            <ActivityIndicator size={"small"} color={theme.PRIMARY_COLOR} />
                        </>
                    )}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
