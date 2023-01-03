import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View, Dimensions} from "react-native";
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

            <Posts />
        </ScreenContainer>
    );
}
