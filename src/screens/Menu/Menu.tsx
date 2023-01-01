import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {
    AlbumOutlineIcon,
    BellOutlineIcon,
    BookmarkOutlineIcon,
    HeartOutlineIcon,
    LogoutIcon,
    PencilIcon,
    SecurityOutlineIcon,
    UserOutlineIcon
} from "../../utils/icons";
import ScreenContainer from "../../utils/screen";

export default function Menu({ navigation }: any) {
    return (
        <ScreenContainer navigation={navigation}>
            <TouchableOpacity activeOpacity={0.8} style={styles.user_container}>
                <Image
                    style={styles.user_avatar}
                    source={{
                        uri: "https://source.unsplash.com/random"
                }}
                />
                <View style={styles.user_details}>
                    <Text style={styles.user_details.name}>Metehan Saral</Text>
                    <Text style={styles.user_details.username}>alpsar4l</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.menu_container}>
                <View style={{
                    backgroundColor: "rgba(241,243,244,0.71)",
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}>
                    <Text style={{
                        fontFamily: "GilroyBold",
                        fontSize: 14,
                        padding: 12,
                        color: "#3c484d",
                        textAlign: "center"
                    }}>SEÇENEKLER</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.menu_item}>
                    <UserOutlineIcon style={styles.menu_item.icon} />
                    <Text style={styles.menu_item.text}>Hesap Ayarları</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.menu_item} onPress={() => navigation.navigate("EditProfile")}>
                    <PencilIcon style={styles.menu_item.icon} />
                    <Text style={styles.menu_item.text}>Profili Düzenle</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.menu_item}>
                    <BellOutlineIcon style={styles.menu_item.icon} />
                    <Text style={styles.menu_item.text}>Bildirim Tercihleri</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.menu_item}>
                    <SecurityOutlineIcon style={styles.menu_item.icon} />
                    <Text style={styles.menu_item.text}>Şifre Değiştir</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.menu_item}>
                    <AlbumOutlineIcon style={styles.menu_item.icon} />
                    <Text style={styles.menu_item.text}>Görünüm</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.menu_item} onPress={() => navigation.navigate("Likes")}>
                    <HeartOutlineIcon style={styles.menu_item.icon} />
                    <Text style={styles.menu_item.text}>Beğeniler</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.menu_item} onPress={() => navigation.navigate("Bookmarks")}>
                    <BookmarkOutlineIcon style={styles.menu_item.icon} />
                    <Text style={styles.menu_item.text}>Kaydedilenler</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.menu_item}>
                    <LogoutIcon style={[styles.menu_item.icon, { fill: "red" }]} />
                    <Text style={[styles.menu_item.text, { color: "red" }]}>Çıkış Yap</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    fontFamily: "GilroyBold",
                    fontSize: 13,
                    padding: 15,
                    textAlign: "center",
                    color: "#5d6d74"
                }}>Glynet &copy; 2023</Text>
            </View>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    user_container: {
        backgroundColor: "#ffffff",
        padding: 12,
        alignItems: "center",
        flexDirection: "row",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomColor: "rgba(164,164,164,0.7)",
        borderRadius: 15,
    },
    user_avatar: {
        height: 70,
        width: 70,
        borderRadius: 100,
        backgroundColor: "purple"
    },
    user_details: {
        marginLeft: 10,
        name: {
            fontFamily: "GilroyBold",
            fontSize: 20,
        },
        username: {
            fontFamily: "GilroyMedium",
            fontSize: 16,
            marginTop: 3
        }
    },
    menu_container: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        marginTop: 12
    },
    menu_item: {
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 0.5,
        borderColor: "rgba(164,164,164,0.49)",
        icon: {
            height: 28,
            width: 28,
            fill: "#4e535c"
        },
        text: {
            color: "#4e535c",
            fontFamily: "GilroyBold",
            fontSize: 16,
            marginLeft: 5
        }
    }
});
