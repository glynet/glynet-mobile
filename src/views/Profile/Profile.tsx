import React, {useCallback, useMemo, useRef, useState} from "react";
import {Image, Text, TouchableOpacity, View, Dimensions, StatusBar} from "react-native";
import {
    BellOutlineIcon,
    LocationPinIcon,
    PencilIcon, UserAddIcon, UserDoneIcon, VerifiedIcon,
    VerticalIcon,
    WebIcon
} from "../../utils/icons";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";
import {useRoute} from "@react-navigation/native";
import styles from "./Profile.style";
import ImageView from "react-native-image-viewing";
import {useDispatch, useSelector} from "react-redux";
import {setBlackBackground} from "../../store/preferences";
import getTheme from "../../constants/colors";
import TextView from "../../components/TextView/TextView";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import ProfileDropdown from "../../components/ProfileDropdowns/ProfileDropdown";
import BottomModal from "../../utils/modal";
import NotificationDropdown from "../../components/ProfileDropdowns/NotificationDropdown";

const theme = getTheme();

export default function Profile({ navigation }: any) {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();

    const route = useRoute();

    const [profileAuthor, setProfileAuthor] = useState<boolean>(true);
    const [isFollowing, setFollow] = useState<boolean>(false);

    const [viewBanner, setViewBanner] = useState<boolean>(false);
    const [viewProfilePicture, setViewProfilePicture] = useState<boolean>(false);

    const bottomSheetMoreModalRef = useRef<BottomSheetModal>(null);
    const handlePresentMoreModalPress = useCallback(() => {
        bottomSheetMoreModalRef.current?.present();
    }, []);

    const bottomSheetNotificationModalRef = useRef<BottomSheetModal>(null);
    const handlePresentNotificationModalPress = useCallback(() => {
        bottomSheetNotificationModalRef.current?.present();
    }, []);

    return (
        <ScreenContainer headerTitle={(route.params as any).name} navigation={navigation}>
            <BottomModal modalRef={bottomSheetMoreModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <ProfileDropdown navigation={navigation} modalRef={bottomSheetMoreModalRef} />
            </BottomModal>

            <BottomModal modalRef={bottomSheetNotificationModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <NotificationDropdown navigation={navigation} modalRef={bottomSheetNotificationModalRef} />
            </BottomModal>

            <ImageView
                images={[{
                    uri: "https://source.unsplash.com/random?view"
                }]}
                imageIndex={0}
                visible={viewBanner}
                onRequestClose={() => {
                    setViewBanner(false);
                    StatusBar.setHidden(false);
                    dispatch(setBlackBackground(false));
                }}
            />
            <ImageView
                images={[{
                    uri: "https://source.unsplash.com/random?human"
                }]}
                imageIndex={0}
                visible={viewProfilePicture}
                onRequestClose={() => {
                    setViewProfilePicture(false);
                    StatusBar.setHidden(false);
                    dispatch(setBlackBackground(false));
                }}
            />

            <View style={styles.profile_container}>
                <TouchableOpacity activeOpacity={0.95} onPress={() => {
                    setViewBanner(true);
                    dispatch(setBlackBackground(true));
                }}>
                    <Image style={styles.profile_banner} source={{
                        uri: "https://source.unsplash.com/random?view"
                    }} />
                </TouchableOpacity>
                <View style={styles.profile_content}>
                    <TouchableOpacity style={styles.profile_avatar_container} activeOpacity={0.8} onPress={() => {
                        setViewProfilePicture(true);
                        dispatch(setBlackBackground(true));
                    }}>
                        <Image
                            style={styles.profile_avatar}
                            source={{
                                uri: "https://source.unsplash.com/random?human"
                            }}
                        />
                    </TouchableOpacity>

                    <View style={styles.profile_badges}>
                        <VerifiedIcon style={styles.profile_badge} />
                    </View>

                    <View style={styles.profile_details}>
                        <Text onPress={() => setProfileAuthor(!profileAuthor)} style={styles.profile_details.name}>Metehan Alp Saral</Text>
                        <Text style={styles.profile_details.username}>@alpsar4l</Text>
                    </View>

                    <View style={styles.profile_metrics_container}>
                        <Text style={styles.profile_metric}><Text style={styles.profile_metric_value}>89k</Text> takipçi</Text>
                        <Text>・</Text>
                        <Text style={styles.profile_metric}><Text style={styles.profile_metric_value}>101</Text> takip</Text>
                    </View>

                    <TextView
                        style={styles.profile_details.about}
                        mentionHashtagPress={() => { console.log("sa") }}
                        mentionHashtagColor={theme.THEME_COLOR}
                    >Founder & CEO at @Glynet, senior member of Eva</TextView>

                    <Text style={styles.profile_details_website}>glynet.com</Text>

                    <View style={styles.profile_buttons}>
                        <TouchableOpacity
                            style={[
                                styles.profile_button,
                                styles.profile_button_with_text,
                                { width: Dimensions.get("window").width - (profileAuthor ? 71 : 115) }
                            ]}
                            activeOpacity={0.8}
                            // onPress={() => setFollow(!isFollowing)}
                            onPress={() => navigation.navigate("EditProfile")}
                        >
                            {!profileAuthor && <>
                                {isFollowing && <UserDoneIcon style={styles.profile_button.icon} />}
                                {!isFollowing && <UserAddIcon style={styles.profile_button.icon} />}
                                <Text style={styles.profile_button_with_text.text}>{isFollowing ? "Takip Ediliyor" : "Takip Et"}</Text>
                            </>}
                            {profileAuthor && <>
                                <PencilIcon style={styles.profile_button.icon} />
                                <Text style={styles.profile_button_with_text.text}>Profili Düzenle</Text>
                            </>}
                        </TouchableOpacity>
                        {!profileAuthor && <>
                            <View style={styles.empty_column}/>
                            <TouchableOpacity style={styles.profile_button} activeOpacity={0.8} onPress={handlePresentNotificationModalPress}>
                                <BellOutlineIcon style={styles.profile_button.icon} />
                            </TouchableOpacity>
                        </>}
                        <View style={styles.empty_column} />
                        <TouchableOpacity style={styles.profile_button} activeOpacity={0.8} onPress={handlePresentMoreModalPress}>
                            <VerticalIcon style={styles.profile_button.icon} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <Posts navigation={navigation} />
        </ScreenContainer>
    );
}
