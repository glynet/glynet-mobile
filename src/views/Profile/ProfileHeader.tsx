import React, { memo, useEffect, useRef, useState } from "react"
import { Image, Text, TouchableOpacity, View, Dimensions, Pressable, TouchableHighlight } from "react-native"
import { BellOffIcon, BellOutlineIcon, PremiumIcon, StaffIcon, UserAddIcon, UserDoneIcon, VerifiedIcon } from "../../utils/icons"
import styles from "./Profile.style"
import ImageView from "react-native-image-viewing"
import { useDispatch, useSelector } from "react-redux"
import { setBarColor, setBlackBackground, setProfile } from "../../store/preferences"
import getTheme from "../../constants/colors"
import { Video } from "expo-av"
import { follow, loadProfile, updateNotifications } from "./ProfileAPI"
import { calculateUserFlags } from "../../utils/flags"
import { vibrate } from "../../helpers/vibration"
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import cdnUrl from "../../helpers/cdnUrl"
import ScaleButton from "../../components/ScaleButton/ScaleButton"
import Avatar from "../../components/Avatar/Avatar"
import { useToast } from "react-native-toast-notifications";
import Loader from "../../components/Loader/Loader"
import { ImageViewHeader } from "../../utils/imageViewCustomize"

const theme = getTheme()

export type FollowingTypes = "following" | "on_request" | "no_follow" | "waiting"

const Spacer = ({ height = 16 }) => <View style={{ height }} />;

function ProfileHeader({ username, navigation }: { username: string; navigation: any }) {
    const state = useSelector((state: any) => state) as any
    const dispatch = useDispatch()

    const toast = useToast()

    const [profileAuthor, setProfileAuthor] = useState<boolean>(false)
    const [isFollowing, setFollow] = useState<FollowingTypes>("no_follow")
    const [viewBanner, setViewBanner] = useState<boolean>(false)
    const [viewProfilePicture, setViewProfilePicture] = useState<boolean>(false)
    const [notificationsType, setNotificationsType] = useState<boolean>(false)
    const [profileData, setProfileData] = useState<any>([])
    const [isPremium, setPremium] = useState<boolean>(false)
    const [isFetched, setFetched] = useState<boolean>(false)

    const avatarSize = useRef((Dimensions.get("window").width / 4) + 8);

    function _follow() {
        function dispatch_follow_status(status: string) {
            const data = state.preferences.profile.data
            data["profile"]["following"] = status

            dispatch(setProfile({
                username: username,
                isFetched: true,
                data: data,
            }))
        }

        if (isFollowing === "waiting") return

        setFollow("waiting")

        follow(profileData.username, (response: any) => {
            const data = response.data

            if (data.status && data.status === "following") {
                setFollow("following")
                dispatch_follow_status("following")
                toast.show(username + ", takip edilmeye başlandı")
            } else if (data.status && data.status === "waiting") {
                setFollow("on_request")
                dispatch_follow_status("on_request")
                toast.show(username + ", takip isteği gönderildi")
            } else {
                setFollow("no_follow")
                dispatch_follow_status("no_follow")
                toast.show(username + ", takipten çıkıldı")
            }
        })
    }

    function notificationsCallback() {
        const type = !notificationsType;

        vibrate(1)
        setNotificationsType(type)

        let convertedType = "never";
        if (type) {
            convertedType = "all_notifications"
            toast.show(username + " için bildirimler açıldı")
        } else {
            toast.show(username + " için bildirimler kapatıldı")
        }

        updateNotifications(profileData.id, convertedType, (response: any) => {
            const data = response.data
            console.log(data)
        })
    }

    function profile_image_view_close() {
        setViewProfilePicture(false)
        dispatch(setBarColor(theme.STATUS_BAR_COLOR))
    }

    function header_image_view_close() {
        setViewBanner(false)
        dispatch(setBarColor(theme.STATUS_BAR_COLOR))
    }

    useEffect(() => {
        setTimeout(() => {
            if (isFetched)
                return console.log("insancıl");

            if (state.preferences.profile.username === username) {
                console.log(username + " veri reduxtan geldi")
                const data = state.preferences.profile.data

                if (data.available && data.profile.user) {
                    setFetched(true)

                    setProfileData(data.profile.user)
                    setPremium(data.profile.premium.is_active)
                    setFollow(data.profile.following)
                } else {
                    navigation.goBack()
                }
            } else {
                console.log(username + " veri fetch edildi")
                loadProfile(username, (response: any) => {
                    const data = response.data

                    setFetched(true)

                    dispatch(setProfile({
                        username: username,
                        isFetched: true,
                        data: data,
                    }))

                    if (data.available && data.profile.user) {
                        setProfileData(data.profile.user)
                        setPremium(data.profile.premium.is_active)
                        console.log(data.profile.following)
                        setFollow(data.profile.following)
                    } else {
                        navigation.goBack()
                    }
                })
            }
        }, 0)
    }, [username])

    return (
        <View style={[styles.parent_container]}>
            {!isFetched && (
                <MotiView
                    transition={{ type: "timing" }}
                    stylePriority={"animate"}
                    animate={{ backgroundColor: "#ffffff" }}
                    style={styles.profile_container}
                >
                    <Skeleton colorMode={"light"} width={"100%"} height={170} radius={0} />
                    <View style={styles.profile_content}>
                        <View style={styles.profile_avatar_container}>
                            <Skeleton colorMode={"light"} radius="round" height={avatarSize.current} width={avatarSize.current} />
                        </View>
                        <View style={styles.profile_badges}>
                            <Skeleton colorMode={"light"} radius="round" height={22} width={22} />
                        </View>
                        <View style={styles.profile_details}>
                            <Spacer height={6} />
                            <Skeleton colorMode={"light"} width={170} height={27} />
                            <Spacer height={6} />
                            <Skeleton colorMode={"light"} width={140} height={27} />
                        </View>
                        <View style={styles.profile_buttons}>
                            <Skeleton colorMode={"light"} width={Dimensions.get("window").width - 31} height={40} />
                        </View>
                    </View>
                </MotiView>
            )}

            {isFetched && (
                <>
                    {profileData.banner && profileData.banner.type === "image" && (
                        <ImageView
                            images={[ { uri: cdnUrl(profileData.banner.url) } ]}
                            imageIndex={0}
                            visible={viewBanner}
                            onRequestClose={header_image_view_close}
                            HeaderComponent={() => <ImageViewHeader
                                callback={header_image_view_close}
                                bgColor="#000"
                            />}
                        />
                    )}

                    <ImageView
                        images={[ { uri: cdnUrl(profileData.avatar) } ]}
                        imageIndex={0}
                        visible={viewProfilePicture}
                        onRequestClose={profile_image_view_close}
                        HeaderComponent={() => <ImageViewHeader
                            callback={profile_image_view_close}
                            bgColor={profileData?.color_palette?.average_color_hex}
                        />}
                        backgroundColor={profileData?.color_palette?.average_color_hex}
                    />

                    <View style={styles.profile_container}>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => {
                            if (profileData.banner && profileData.banner.type === "image") {
                                setViewBanner(true)
                                dispatch(setBlackBackground(true))
                            }
                        }}>
                            {profileData.banner && profileData.banner.type === "text" && (
                                <View style={[styles.profile_banner_text, { backgroundColor: profileData.color_palette.average_color_hex }]} />
                            )}
                            {profileData.banner && profileData.banner.type === "image" && (
                                <Image
                                    style={[styles.profile_banner, { backgroundColor: profileData.color_palette.average_color_hex }]}
                                    source={{
                                        uri: cdnUrl(profileData.banner.url)
                                    }}
                                />
                            )}
                            {profileData.banner && profileData.banner.type === "video" && (
                                <Video
                                    style={[styles.profile_banner, { backgroundColor: profileData.color_palette.average_color_hex }]}
                                    source={{
                                        uri: cdnUrl(profileData.banner.url)
                                    }}
                                    useNativeControls={false}
                                    // @ts-ignore
                                    resizeMode={"cover"}
                                    isLooping={true}
                                    isMuted={true}
                                    shouldPlay={true}
                                />
                            )}
                        </TouchableOpacity>

                        <View style={styles.profile_content}>
                            <TouchableHighlight
                                style={styles.profile_avatar_container}
                                activeOpacity={0.8}
                                underlayColor={"#fff"}
                            >
                                <Avatar
                                    src={cdnUrl(profileData.avatar)}
                                    size={avatarSize.current - 8}
                                    radius={100}
                                    onPress={() => {
                                        setViewProfilePicture(true)
                                    }}
                                />
                            </TouchableHighlight>

                            <View style={styles.profile_badges}>
                                {calculateUserFlags(profileData?.flags).includes("GLYNET_EMPLOYEE") && (
                                    <Pressable onPress={() => {
                                        toast.show("Looplens Bekçisi")
                                    }}>
                                        <StaffIcon style={styles.profile_badge} />
                                    </Pressable>
                                )}
                                {isPremium && (
                                    <Pressable onPress={() => {
                                        toast.show("Lens+ Abonesi")
                                    }}>
                                        <PremiumIcon style={styles.profile_badge} />
                                    </Pressable>
                                )}
                                {calculateUserFlags(profileData?.flags).includes("VERIFIED_USER") && (
                                    <Pressable onPress={() => {
                                        toast.show("Onaylanmış Profil")
                                    }}>
                                        <VerifiedIcon style={styles.profile_badge} />
                                    </Pressable>
                                )}
                            </View>

                            <View style={styles.profile_details}>
                                <Text style={styles.profile_details_name}>{profileData.name}</Text>
                                <Text style={styles.profile_details.username}>{profileData.username}</Text>
                            </View>

                            <View style={styles.profile_metrics_container}>
                                <Pressable onPress={() => {
                                    navigation.push("UserList", { type: "followers", value: profileData.username })
                                }}>
                                    <Text style={styles.profile_metric}>
                                        <Text style={styles.profile_metric_value}>{(profileData.details && profileData.details.metrics.followers) || 0}</Text> takipçi
                                    </Text>
                                </Pressable>
                                <Text>・</Text>
                                <Pressable onPress={() => {
                                    navigation.push("UserList", { type: "followings", value: profileData.username })
                                }}>
                                    <Text style={styles.profile_metric}>
                                        <Text style={styles.profile_metric_value}>{(profileData.details && profileData.details.metrics.followings) || 0}</Text> takip
                                    </Text>
                                </Pressable>
                            </View>

                            {profileData.about && (<Text style={styles.profile_details.about}>{profileData.about}</Text>)}
                            {profileData.website && (<Text style={[ styles.profile_details_website, { color: profileData.color_palette.average_color_hex }]}>{profileData.website.replace(/^(https?|ftp):\/\//, "")}</Text>)}

                            <View style={styles.profile_buttons}>
                                <ScaleButton activeScale={0.92} onPress={_follow} contentContainerStyle={[
                                    styles.profile_button,
                                    styles.profile_button_with_text,
                                    { width: Dimensions.get("window").width - 81 },
                                ]}>
                                    {isFollowing !== "waiting" && (
                                        <>
                                            {isFollowing === "following" && <UserDoneIcon style={styles.profile_button.icon} />}
                                            {isFollowing !== "following" && <UserAddIcon style={styles.profile_button.icon} />}
                                            <Text style={styles.profile_button_with_text_text}>
                                                {isFollowing === "following" ? "Takip Ediliyor" : isFollowing === "on_request" ? "İstek Gönderildi" : "Takip Et"}
                                            </Text>
                                        </>
                                    )}
                                    {isFollowing === "waiting" && <Loader clearStyles={true} size={"small"} />}
                                </ScaleButton>
                                {!profileAuthor && (
                                    <>
                                        <View style={styles.empty_column} />
                                        <ScaleButton contentContainerStyle={styles.profile_button} activeScale={0.9} onPress={notificationsCallback}>
                                            {!notificationsType && <BellOffIcon style={styles.profile_button.icon} />}
                                            {notificationsType && <BellOutlineIcon style={styles.profile_button.icon} />}
                                        </ScaleButton>
                                    </>
                                )}
                            </View>
                        </View>
                    </View>
                </>
            )}
        </View>
    )
}

export default memo(ProfileHeader)
