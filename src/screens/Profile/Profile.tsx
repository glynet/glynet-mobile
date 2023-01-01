import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View, Dimensions} from "react-native";
import {
    BellOutlineIcon,
    LocationPinIcon, PencilIcon,
    UserAddIcon,
    UserDoneIcon,
    VerticalIcon,
    WebIcon
} from "../../utils/icons";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";
import {useRoute} from "@react-navigation/native";

export default function Profile({ navigation }: any) {
    const route = useRoute();

    const [isFollowing, setFollow] = useState<boolean>(false);

    return (
        <ScreenContainer headerTitle={(route.params as any).name} navigation={navigation}>
            <View style={styles.profile_container}>
                <Image
                    style={styles.profile_banner}
                        source={{
                            uri: "https://source.unsplash.com/random?view"
                    }}
                />

                <View style={styles.profile_content}>
                    <TouchableOpacity style={styles.profile_avatar_container} activeOpacity={0.8}>
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
                            <Text style={styles.profile_extra.text}>glynet.com</Text>
                        </View>
                    </View>

                    <View style={styles.profile_buttons}>
                        <TouchableOpacity
                            style={[
                                styles.profile_button,
                                styles.profile_button_with_text,
                                { width: Dimensions.get('window').width - 110 }
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

            <Posts />
        </ScreenContainer>
    );
}

const themeColor = "#3a27d9";

const avatarSize = 90;

const styles = StyleSheet.create({
    profile_container: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: 15,
        width: "100%",
        borderBottomColor: "rgba(164,164,164,0.7)",
    },
    profile_banner: {
        height: 170,
        width: "100%",
    },
    profile_content: {
        marginTop: -72.5,
        alignItems: "center",
    },
    profile_avatar_container: {
        height: avatarSize + 12,
        width: avatarSize + 12,
        borderRadius: 100,
        borderWidth: 3.5,
        borderColor: themeColor,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.54)",
        justifyContent: "center",
    },
    profile_avatar: {
        height: avatarSize,
        width: avatarSize,
        borderRadius: 100,
    },
    profile_details: {
        marginTop: 10,
        alignItems: "center",
        name: {
            fontFamily: "GilroyBold",
            fontSize: 18,
            color: "#1e2425"
        },
        username: {
            marginTop: 5,
            fontFamily: "GilroyMedium",
            fontSize: 13,
            color: "#4d5053"
        }
    },
    profile_buttons: {
        flexDirection: "row",
        marginTop: 15 - 12,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
    },
    empty_column: {
        width: 7
    },
    profile_button: {
        backgroundColor: "#F0F1F4",
        padding: 8,
        borderRadius: 9,
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        icon: {
            fill: "#414055",
            height: 22,
            width: 22
        },
    },
    profile_button_with_text: {
        paddingHorizontal: 12,
        text: {
            marginLeft: 4,
            color: "#414055",
            fontFamily: "GilroyBold",
            fontSize: 14,
        }
    },
    profile_extras: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        paddingBottom: 0
    },
    profile_extra: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 7,
        icon: {
            height: 15,
            width: 15,
            fill: "#8E949B"
        },
        text: {
            fontFamily: "GilroyMedium",
            fontSize: 12,
            color: "#687076",
            marginLeft: 2,
        }
    }
});
