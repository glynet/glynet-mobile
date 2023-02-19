import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View, Dimensions, TextInput, ImageBackground, StatusBar} from "react-native";
import {
    BellOutlineIcon,
    CameraIcon,
    LocationPinIcon,
    PencilIcon, UserAddIcon, UserDoneIcon, VerifiedIcon,
    VerticalIcon,
    WebIcon
} from "../../utils/icons";
import ScreenContainer from "../../utils/screen";
import styles from "./EditProfile.style";
import ImageView from "react-native-image-viewing";
import {setBlackBackground} from "../../store/preferences";
import TextView from "../../components/TextView/TextView";
import getTheme from "../../constants/colors";

const theme = getTheme();

export default function EditProfile({ navigation }: any) {
    const [isFollowing, setFollow] = useState<boolean>(false);

    const [name, setName] = useState<string>("Metehan Alp Saral");
    const [username, setUsername] = useState<string>("alpsar4l");
    const [about, setAbout] = useState<string>("Founder & CEO at @Glynet, senior member of Eva");

    const [location, setLocation] = useState<string>("Istanbul");
    const [website, setWebsite] = useState<string>("glynet.com");

    return (
        <ScreenContainer headerTitle={"Profili Düzenleyici"} hideTabs={true} navigation={navigation}>
            <View style={styles.profile_container}>
                <View style={styles.profile_container}>
                    <TouchableOpacity activeOpacity={0.95}>
                        <Image style={styles.profile_banner} source={{
                            uri: "https://source.unsplash.com/random?view"
                        }} />
                    </TouchableOpacity>
                    <View style={styles.profile_content}>
                        <TouchableOpacity style={styles.profile_avatar_container} activeOpacity={0.8}>
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
                            <Text style={styles.profile_details.name}>{name}</Text>
                            <Text style={styles.profile_details.username}>@{username}</Text>
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
                        >{about}</TextView>

                        {website.length !== 0 && <Text style={styles.profile_details_website}>{website}</Text>}

                        <View style={styles.profile_buttons}>
                            <View
                                style={[
                                    styles.profile_button,
                                    styles.profile_button_with_text,
                                    { width: Dimensions.get("window").width - 71}
                                ]}
                            >
                                <PencilIcon style={styles.profile_button.icon} />
                                <Text style={styles.profile_button_with_text.text}>Profili Düzenle</Text>
                            </View>
                            <View style={styles.empty_column} />
                            <View style={styles.profile_button}>
                                <VerticalIcon style={styles.profile_button.icon} />
                            </View>
                        </View>

                    </View>
                </View>
            </View>

            <View style={styles.profile_inputs_container}>
                <View style={{...styles.profile_input_container, borderTopWidth: 0}}>
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

                <View style={{
                    padding: 12,
                }}>
                    <TouchableOpacity
                        style={[
                            styles.profile_button,
                            styles.profile_button_with_text,
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
