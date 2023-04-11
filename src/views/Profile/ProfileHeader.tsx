import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Image, Text, TouchableOpacity, View, Dimensions, StatusBar, ActivityIndicator, Platform } from "react-native"
import { BellOutlineIcon, PremiumIcon, StaffIcon, UserAddIcon, UserDoneIcon, VerifiedIcon, VerticalIcon } from "../../utils/icons"
import styles from "./Profile.style"
import ImageView from "react-native-image-viewing"
import { useDispatch, useSelector } from "react-redux"
import { setBlackBackground, setProfile } from "../../store/preferences"
import getTheme from "../../constants/colors"
import TextView from "../../components/TextView/TextView"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import ProfileDropdown from "../../components/ProfileDropdowns/ProfileDropdown"
import BottomModal from "../../utils/modal"
import NotificationDropdown from "../../components/ProfileDropdowns/NotificationDropdown"
import { Video } from "expo-av"
import { follow, loadProfile } from "./ProfileAPI"
import { calculateUserFlags } from "../../utils/flags"

const theme = getTheme()

export type FollowingTypes = "following" | "on_request" | "no_follow" | "waiting"

function ProfileHeader({ username, navigation }: { username: string; navigation: any }) {
    const state = useSelector((state: any) => state) as any
    const dispatch = useDispatch()

    const [profileAuthor, setProfileAuthor] = useState<boolean>(false)
    const [isFollowing, setFollow] = useState<FollowingTypes>("no_follow")
    const [isPrivateProfile, setPrivateProfile] = useState<boolean>(false)

    const [viewBanner, setViewBanner] = useState<boolean>(false)
    const [viewProfilePicture, setViewProfilePicture] = useState<boolean>(false)

    const bottomSheetMoreModalRef = useRef<BottomSheetModal>(null)
    const handlePresentMoreModalPress = useCallback(() => {
        bottomSheetMoreModalRef.current?.present()
    }, [])

    const bottomSheetNotificationModalRef = useRef<BottomSheetModal>(null)
    const handlePresentNotificationModalPress = useCallback(() => {
        bottomSheetNotificationModalRef.current?.present()
    }, [])

    const [profileData, setProfileData] = useState<any>([])
    const [isPremium, setPremium] = useState<boolean>(false)
    const [isFetched, setFetched] = useState<boolean>(false)

    const _follow = () => {
        if (isFollowing === "waiting") return

        setFollow("waiting")

        follow(profileData.username, (response: any) => {
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

    useEffect(() => {
        if (isFetched)
            return console.log("insancıl");

        if (state.preferences.profile.username === username) {
            console.log("reduxtan geldi")
            const data = state.preferences.profile.data

            if (data.available && data.profile.user) {
                setFetched(true)
                
                setProfileData(data.profile.user)
                setPremium(data.profile.premium.is_active)
                setFollow(data.profile.following)
                setPrivateProfile(data.profile.is_private)
            } else {
                navigation.goBack()
            }
        } else {
            console.log("fetch")
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
                    setFollow(data.profile.following)
                    setPrivateProfile(data.profile.is_private)
                } else {
                    navigation.goBack()
                }
            })
        }
    }, [username])

    return (
        <View style={styles.parent_container}>
            <BottomModal modalRef={bottomSheetMoreModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <ProfileDropdown navigation={navigation} modalRef={bottomSheetMoreModalRef} />
            </BottomModal>

            <BottomModal modalRef={bottomSheetNotificationModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <NotificationDropdown navigation={navigation} modalRef={bottomSheetNotificationModalRef} />
            </BottomModal>

            {!isFetched && (
                <View
                    style={{
                        backgroundColor: theme.BOX_BACKGROUND,
                        width: "100%",
                        // borderRadius: 15,
                        marginBottom: 12,
                        padding: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} color={theme.THEME_COLOR} />
                </View>
            )}

            {isFetched && (
                <>
                    {profileData.banner && profileData.banner.type === "image" && (
                        <ImageView
                            images={[
                                {
                                    uri: `${global.CDN_URL}/${profileData.banner.url}`,
                                },
                            ]}
                            imageIndex={0}
                            visible={viewBanner}
                            onRequestClose={() => {
                                setViewBanner(false)
                                StatusBar.setHidden(false)
                                dispatch(setBlackBackground(false))
                            }}
                        />
                    )}
                    <ImageView
                        images={[
                            {
                                uri: `${global.CDN_URL}/${profileData.avatar}`,
                            },
                        ]}
                        imageIndex={0}
                        visible={viewProfilePicture}
                        onRequestClose={() => {
                            setViewProfilePicture(false)
                            StatusBar.setHidden(false)
                            dispatch(setBlackBackground(false))
                        }}
                    />

                    <View style={styles.profile_container}>
                        <TouchableOpacity
                            activeOpacity={0.95}
                            onPress={() => {
                                if (profileData.banner && profileData.banner.type === "image") {
                                    setViewBanner(true)
                                    dispatch(setBlackBackground(true))
                                }
                            }}
                        >
                            {profileData.banner && profileData.banner.type === "text" && <View style={styles.profile_banner_text} />}
                            {profileData.banner && profileData.banner.type === "image" && (
                                <Image
                                    style={styles.profile_banner}
                                    source={{
                                        uri: `${global.CDN_URL}/${profileData.banner.url}`,
                                    }}
                                />
                            )}
                            {profileData.banner && profileData.banner.type === "video" && (
                                <Video
                                    style={styles.profile_banner}
                                    source={{
                                        uri: `${global.CDN_URL}/${profileData.banner.url}`,
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
                            <TouchableOpacity
                                style={styles.profile_avatar_container}
                                activeOpacity={0.8}
                                onPress={() => {
                                    setViewProfilePicture(true)
                                    dispatch(setBlackBackground(true))
                                }}
                            >
                                <Image
                                    style={styles.profile_avatar}
                                    source={{
                                        uri: `${global.CDN_URL}/${profileData.avatar}`,
                                    }}
                                />
                            </TouchableOpacity>

                            <View style={styles.profile_badges}>
                                {calculateUserFlags(profileData?.flags).includes("GLYNET_EMPLOYEE") && <StaffIcon style={styles.profile_badge} />}
                                {isPremium && <PremiumIcon style={styles.profile_badge} />}
                                {calculateUserFlags(profileData?.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.profile_badge} />}
                            </View>

                            <View style={styles.profile_details}>
                                <Text style={styles.profile_details_name}>{profileData.name}</Text>
                                <Text style={styles.profile_details.username}>@{profileData.username}</Text>
                            </View>

                            <View style={styles.profile_metrics_container}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        navigation.push("UserList", {
                                            type: "followers",
                                            value: profileData.username,
                                        })
                                    }}
                                >
                                    <Text style={styles.profile_metric}>
                                        <Text style={styles.profile_metric_value}>{(profileData.details && profileData.details.metrics.followers) || 0}</Text> takipçi
                                    </Text>
                                </TouchableOpacity>
                                <Text>・</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        navigation.push("UserList", {
                                            type: "followings",
                                            value: profileData.username,
                                        })
                                    }}
                                >
                                    <Text style={styles.profile_metric}>
                                        <Text style={styles.profile_metric_value}>{(profileData.details && profileData.details.metrics.followings) || 0}</Text> takip
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {profileData.about && (
                                <TextView
                                    style={styles.profile_details.about}
                                    mentionHashtagPress={() => {
                                        console.log("sa")
                                    }}
                                    mentionHashtagColor={theme.THEME_COLOR}
                                >
                                    {profileData.about}
                                </TextView>
                            )}

                            {profileData.website && <Text style={styles.profile_details_website}>{profileData.website}</Text>}

                            <View style={styles.profile_buttons}>
                                <TouchableOpacity
                                    style={[
                                        styles.profile_button,
                                        styles.profile_button_with_text,
                                        {
                                            width: Dimensions.get("window").width - (profileAuthor ? 71 : 127),
                                        },
                                    ]}
                                    activeOpacity={0.8}
                                    onPress={_follow}
                                >
                                    {isFollowing !== "waiting" && (
                                        <>
                                            {isFollowing === "following" && <UserDoneIcon style={styles.profile_button.icon} />}
                                            {isFollowing !== "following" && <UserAddIcon style={styles.profile_button.icon} />}
                                            <Text style={styles.profile_button_with_text_text}>
                                                {isFollowing === "following" ? "Takip Ediliyor" : isFollowing === "on_request" ? "İstek Gönderildi" : "Takip Et"}
                                            </Text>
                                        </>
                                    )}
                                    {isFollowing === "waiting" && <ActivityIndicator size={"small"} color={theme.PRIMARY_COLOR} />}
                                </TouchableOpacity>
                                {!profileAuthor && (
                                    <>
                                        <View style={styles.empty_column} />
                                        <TouchableOpacity style={styles.profile_button} activeOpacity={0.8} onPress={handlePresentNotificationModalPress}>
                                            <BellOutlineIcon style={styles.profile_button.icon} />
                                        </TouchableOpacity>
                                    </>
                                )}
                                <View style={styles.empty_column} />
                                <TouchableOpacity style={styles.profile_button} activeOpacity={0.8} onPress={handlePresentMoreModalPress}>
                                    <VerticalIcon style={styles.profile_button.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </>
            )}
        </View>
    )
}

export default memo(ProfileHeader)