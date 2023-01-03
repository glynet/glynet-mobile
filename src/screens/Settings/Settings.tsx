import React, {useState} from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    AlbumOutlineIcon, ArrowRightIosIcon,
    BellOutlineIcon, EyeOutlineIcon, LogoutIcon,
    MailIcon, MoonIcon,
    PencilIcon,
    SecurityOutlineIcon, SunIcon,
    TrashIcon,
} from "../../utils/icons";
import ScreenContainer from "../../utils/screen";
import getTheme from "../../themes/themes";

const theme = getTheme();

export default function Settings({ navigation }: any) {
    const [lightMode, setLightMode] = useState<boolean>(true);

    return (
        <ScreenContainer headerTitle={"Ayarlar"} hideTabs={true} navigation={navigation}>
            <View style={styles.settings_container}>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => navigation.navigate("EditProfile")}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <PencilIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Profili düzenle</Text>
                            <Text style={styles.category_container.description}>Bunu mu arıyordun?</Text>
                        </View>
                    </View>
                    <View>
                        <ArrowRightIosIcon style={styles.category_arrow} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => navigation.navigate("MailSettings")}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <MailIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>E-posta</Text>
                            <Text style={styles.category_container.description}>metehansaral@glynet.com</Text>
                        </View>
                    </View>
                    <View>
                        <ArrowRightIosIcon style={styles.category_arrow} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => navigation.navigate("PrivacySettings")}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <EyeOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Gizlilik & Güvenlik</Text>
                            <Text style={styles.category_container.description}>O "defteri" kapatalı çok oldu.</Text>
                        </View>
                    </View>
                    <View>
                        <ArrowRightIosIcon style={styles.category_arrow} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => navigation.navigate("NotificationSettings")}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BellOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Bildirimler</Text>
                            <Text style={styles.category_container.description}>Ding dong! Orada kimse var mı?</Text>
                        </View>
                    </View>
                    <View>
                        <ArrowRightIosIcon style={styles.category_arrow} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => setLightMode(!lightMode)}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            {!lightMode && <MoonIcon style={styles.category_container.icon} />}
                            {lightMode && <SunIcon style={styles.category_container.icon} />}
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Görünüm</Text>
                            {!lightMode && <Text style={styles.category_container.description}>Simsiyah gecenin koynundayım</Text>}
                            {lightMode && <Text style={styles.category_container.description}>Işıl ışıl her yer...</Text>}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => navigation.navigate("PasswordSettings")}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <SecurityOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Şifre değiştirme</Text>
                            <Text style={styles.category_container.description}>Tehlikede mi hissediyorsunuz? Şifrenizi yenileyin.</Text>
                        </View>
                    </View>
                    <View>
                        <ArrowRightIosIcon style={styles.category_arrow} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <TrashIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Hesabımı sil</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{...styles.category_container, borderBottomWidth: 0 }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <LogoutIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Çıkış yap</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    settings_container: {
        backgroundColor: theme.BOX_BACKGROUND,
        width: "100%",
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 0,
        borderRadius: 15,
    },
    category_container_left: {
        flexDirection: "row",
        alignItems: "center",
    },
    category_arrow: {
        height: 22,
        width: 22,

        fill: theme.PRIMARY_COLOR,
    },
    category_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        borderBottomWidth: theme.BORDER_WIDTH,
        borderBottomColor: theme.BORDER_COLOR,
        padding: 15,
        icon_container: {
            padding: 7,
            backgroundColor: theme.BUTTON_BACKGROUND,
            borderRadius: 9,
        },
        icon: {
            height: 22,
            width: 22,
            fill: theme.PRIMARY_COLOR,
        },
        details: {
            marginLeft: 8,
        },
        title: {
            fontSize: 15,
            fontFamily: "GilroyBold",
            color: theme.PRIMARY_COLOR
        },
        description: {
            fontSize: 13,
            fontFamily: "GilroyMedium",
            marginTop: 4,
            color: theme.SECONDARY_COLOR,
            width: Dimensions.get("window").width / 1.3,
        }
    }
});
