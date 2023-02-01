import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View, Dimensions, StatusBar} from "react-native";
import {
    BellOutlineIcon,
    LocationPinIcon,
    PencilIcon,
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
import * as WebBrowser from "expo-web-browser";

export default function Profile({ navigation }: any) {
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();

    const route = useRoute();

    const [isFollowing, setFollow] = useState<boolean>(false);

    const [viewBanner, setViewBanner] = useState<boolean>(false);
    const [viewProfilePicture, setViewProfilePicture] = useState<boolean>(false);

    return (
        <ScreenContainer headerTitle={(route.params as any).name} navigation={navigation}>
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
                    <View style={styles.profile_details}>
                        <Text style={styles.profile_details.name}>Metehan Alp Saral</Text>
                        <Text style={styles.profile_details.username}>Founder & CEO at @Glynet, senior member of Eva</Text>
                    </View>

                    <View style={styles.profile_extras}>
                        <View style={[styles.profile_extra, {marginLeft: 0}]}>
                            <LocationPinIcon style={styles.profile_extra.icon} />
                            <Text style={styles.profile_extra.text}>Istanbul</Text>
                        </View>

                        <View style={styles.profile_extra}>
                            <WebIcon style={styles.profile_extra.icon} />
                            <Text style={styles.profile_extra.text} onPress={async () => await WebBrowser.openBrowserAsync('https://glynet.com')}>glynet.com</Text>
                        </View>
                    </View>

                    <View style={styles.profile_buttons}>
                        <TouchableOpacity
                            style={[
                                styles.profile_button,
                                styles.profile_button_with_text,
                                { width: Dimensions.get("window").width - 115 }
                            ]}
                            activeOpacity={0.8}
                            // onPress={() => setFollow(!isFollowing)}
                            onPress={() => navigation.navigate("EditProfile")}
                        >
                            {/* {isFollowing && <UserDoneIcon style={styles.profile_button.icon} />}
                            {!isFollowing && <UserAddIcon style={styles.profile_button.icon} />}
                            <Text style={styles.profile_button_with_text.text}>{isFollowing ? "Takip Ediliyor" : "Takip Et"}</Text> */}

                            <PencilIcon style={styles.profile_button.icon} />
                            <Text style={styles.profile_button_with_text.text}>Profili Düzenle</Text>
                        </TouchableOpacity>
                        <View style={styles.empty_column} />
                        <TouchableOpacity style={styles.profile_button} activeOpacity={0.8}>
                            <BellOutlineIcon style={styles.profile_button.icon} />
                        </TouchableOpacity>
                        <View style={styles.empty_column} />
                        <TouchableOpacity style={styles.profile_button} activeOpacity={0.8}>
                            <VerticalIcon style={styles.profile_button.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Posts navigation={navigation} />
        </ScreenContainer>
    );
}
