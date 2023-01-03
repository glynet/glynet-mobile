import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View, Dimensions, TextInput, ImageBackground} from "react-native";
import {
    BellOutlineIcon,
    CameraIcon,
    LocationPinIcon,
    PencilIcon,
    VerticalIcon,
    WebIcon
} from "../../utils/icons";
import ScreenContainer from "../../utils/screen";
import styles from "./EditProfile.style";

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
                <ImageBackground
                    style={styles.profile_banner}
                    imageStyle={styles.profile_banner}
                    source={{
                        uri: "https://source.unsplash.com/random?view"
                    }}
                >
                    <View style={styles.profile_banner_edit}>
                        <CameraIcon style={styles.profile_banner_edit.icon} />
                    </View>
                </ImageBackground>

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
