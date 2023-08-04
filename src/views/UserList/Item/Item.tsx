import { Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { UserAddIcon, UserDoneIcon, UserRemoveIcon, VerifiedIcon } from "../../../utils/icons"
import styles from "./Item.style"
import { sliceText } from "../../../utils/functions"
import { calculateUserFlags } from "../../../utils/flags"
import { FollowingTypes } from "../../Profile/ProfileHeader"
import { follow } from "../../Profile/ProfileAPI"
import getTheme from "../../../constants/colors"
import Avatar from "../../../components/Avatar/Avatar"
import cdnUrl from "../../../helpers/cdnUrl"
import Loader from "../../../components/Loader/Loader"
import { acceptUser } from "../UserListAPI"
import { useToast } from "react-native-toast-notifications"

const theme = getTheme()

export default function Item({ type, item, index, navigation }: any) {
    const toast = useToast()

    const [isFollowing, setFollow] = useState<FollowingTypes>("following")
    const [requestStatus, setRequestStatus] = useState(0)

    function _follow() {
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

    function _update(accept: boolean) {
        if (requestStatus !== 0) return

        setRequestStatus(accept ? 1 : 2)

        acceptUser(item.user.data.id, accept, (response: any) => {
            const data = response.data
            console.log(data)

            if (data.status) {
                if (accept) {
                    toast.show(`${item.user.data.username} kişisinin takip isteği onaylandı`)
                } else {
                    toast.show(`${item.user.data.username} kişisinin takip isteği reddedildi`)
                }

                setRequestStatus(3)
            } else {
                if (accept) {
                    toast.show(`${item.user.data.username} kişisinin takip isteği onaylanırken bir hata meydana geldi`)
                } else {
                    toast.show(`${item.user.data.username} kişisinin takip isteği reddedilirken bir hata meydana geldi`)
                }
            }
        })
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.notification_container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.push("Profile", { name: item.user.data.username })} style={styles.user_details}>
                <Avatar
                    src={cdnUrl(item.user.data.avatar)}
                    size={48}
                    radius={100}
                />
                <View style={styles.notification_details}>
                    <View style={styles.user_name}>
                        <Text style={{ ...styles.notification_text, fontFamily: "Bold" }}>{sliceText(item.user.data.name, 12, true)}</Text>
                        {calculateUserFlags(item.user.data.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.user_badge} />}
                    </View>
                    <Text style={styles.notification_date}>{sliceText(item.user.data.username, 16, true)}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.buttons}>
                {type !== "follow_requests" && (
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
                            <Loader clearStyles={true} size={"small"} />
                        )}
                    </TouchableOpacity>
                )}
                {(type === "follow_requests" && requestStatus !== 3) && (
                    <>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button_container} onPress={() => _update(true)}>
                            {requestStatus !== 1 && (
                                <>
                                    <UserAddIcon style={styles.button_icon} />
                                    <Text style={styles.button_text}>Onayla</Text>
                                </>
                            )}

                            {requestStatus === 1 && (
                                <Loader clearStyles={true} size={"small"} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button_container} onPress={() => _update(false)}>
                            {requestStatus !== 2 && (
                                <>
                                    <UserRemoveIcon style={styles.button_icon} />
                                    <Text style={styles.button_text}>Reddet</Text>
                                </>
                            )}

                            {requestStatus === 2 && (
                                <Loader clearStyles={true} size={"small"} />
                            )}
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </TouchableOpacity>
    )
}
