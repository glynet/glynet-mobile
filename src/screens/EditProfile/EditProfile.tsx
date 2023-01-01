import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput} from "react-native";
import {
    BellOutlineIcon, CameraIcon,
    LocationPinIcon, PencilIcon,
    UserAddIcon,
    UserDoneIcon,
    VerticalIcon,
    WebIcon
} from "../../utils/icons";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";
import {useRoute} from "@react-navigation/native";

export default function EditProfile({ navigation }: any) {
    const route = useRoute();

    const [isFollowing, setFollow] = useState<boolean>(false);

    const [name, setName] = useState<string>("Metehan Alp Saral");
    const [username, setUsername] = useState<string>("alpsar4l");
    const [about, setAbout] = useState<string>("Founder & CEO at @Glynet, senior member of Eva");

    const [location, setLocation] = useState<string>("Istanbul");
    const [website, setWebsite] = useState<string>("glynet.com");

    return (
        <ScreenContainer headerTitle={"Profili Düzenleyici"} hideTabs={true} navigation={navigation}>
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
                        <View style={styles.profile_avatar_edit}>
                            <CameraIcon style={styles.profile_avatar_edit.icon} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.profile_details}>
                        <Text style={styles.profile_details.name}>{name}</Text>
                        {about.length !== 0 && <Text style={styles.profile_details.username}>{about}</Text>}
                    </View>

                    {(location.length !== 0 || website.length !== 0) && <View style={styles.profile_extras}>
                        {location.length !== 0 && <View style={[styles.profile_extra, {marginLeft: 0}]}>
                            <LocationPinIcon style={styles.profile_extra.icon}/>
                            <Text style={styles.profile_extra.text}>{location}</Text>
                        </View>}

                        {website.length !== 0 && <View style={styles.profile_extra}>
                            <WebIcon style={styles.profile_extra.icon}/>
                            <Text style={styles.profile_extra.text}>{website}</Text>
                        </View>}
                    </View>}

                    <View style={[
                        styles.profile_buttons,
                        { opacity: 0.6 }
                    ]}>
                        <TouchableOpacity
                            style={[
                                styles.profile_button,
                                styles.profile_button_with_text,
                                { width: Dimensions.get('window').width - 110 }
                            ]}
                            activeOpacity={0.8}
                            onPress={() => setFollow(!isFollowing)}
                        >
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

            <View style={styles.profile_inputs_container}>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>İsim</Text>
                    <TextInput
                        value={name}
                        onChangeText={newName => setName(newName)}
                        placeholder={"İsim"}
                        style={styles.profile_input}
                        maxLength={24}
                    />
                </View>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>Kullanıcı Adı</Text>
                    <TextInput
                        value={username}
                        onChangeText={newUsername => setUsername(newUsername)}
                        placeholder={"Kullanıcı Adı"}
                        style={styles.profile_input}
                        maxLength={24}
                    />
                </View>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>Hakkında</Text>
                    <TextInput
                        value={about}
                        onChangeText={newData => setAbout(newData)}
                        placeholder={"Hakkında"}
                        style={styles.profile_input}
                        maxLength={128}
                    />
                </View>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>İnternet Sitesi</Text>
                    <TextInput
                        value={website}
                        onChangeText={newData => setWebsite(newData)}
                        placeholder={"İnternet Sitesi"}
                        style={styles.profile_input}
                        maxLength={64}
                    />
                </View>
                <View style={styles.profile_input_container}>
                    <Text style={styles.profile_input_title}>Konum</Text>
                    <TextInput
                        value={location}
                        onChangeText={newData => setLocation(newData)}
                        placeholder={"Konum"}
                        style={styles.profile_input}
                        maxLength={24}
                    />
                </View>

                <View style={{
                    padding: 12,
                }}>
                    <TouchableOpacity
                        style={[
                            styles.profile_button,
                            styles.profile_button_with_text,
                            styles.profile_button_colored,
                            { width: "100%" }
                        ]}
                        activeOpacity={0.8}
                        onPress={() => setFollow(!isFollowing)}
                    >
                        <PencilIcon style={styles.profile_button.icon} />
                        <Text style={styles.profile_button_with_text.text}>Değişiklikleri Kaydet</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScreenContainer>
    );
}

const themeColor = "#3a27d9";

const avatarSize = 90;

const styles = StyleSheet.create({
    profile_inputs_container: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        width: "100%",
        marginVertical: 12,
        borderBottomColor: "rgba(164,164,164,0.7)",
    },
    profile_input_container: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#ececec"
    },
    profile_input_title: {
        fontFamily: "GilroyBold",
        fontSize: 13,
        color: "#252934"
    },
    profile_input: {
        borderWidth: 1,
        borderColor: "rgba(209,206,206,0.7)",
        backgroundColor: "rgba(238,241,241,0.7)",
        padding: 12,
        fontSize: 14,
        borderRadius: 12,
        marginTop: 7,
    },

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
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    profile_avatar: {
        height: avatarSize,
        width: avatarSize,
        borderRadius: 100,
    },
    profile_avatar_edit: {
        position: "absolute",
        top: 6,
        left: 6,
        height: avatarSize,
        width: avatarSize,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: "rgba(1,1,1,0.24)",
        icon: {
            height: 28,
            width: 28,
            fill: "rgba(255,255,255,0.82)"
        }
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
        backgroundColor: "#efeff4",
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
    profile_button_colored: {
        padding: 12,
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
