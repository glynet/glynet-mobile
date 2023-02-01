import React from "react";
import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {
    BookmarkOutlineIcon, CompassOutlineIcon, CrossIcon,
    HeartOutlineIcon,
    PencilIcon, TrashIcon,
    UserOutlineIcon
} from "../../../utils/icons";
import styles from "../../Menu/Menu.style";

export default function Options({ navigation, modalRef }: any) {
    return (
        <ScrollView>
            <View style={styles.menu_top}>
                <Text style={styles.menu_title}>Seçenekler</Text>
                <View style={styles.menu_buttons}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.menu_button} onPress={() => modalRef.current?.close()}>
                        <CrossIcon style={styles.menu_icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.menu_container}>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    navigation.navigate("Settings");
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <UserOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Bağlantıyı Kopyala</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    navigation.navigate("EditProfile");
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <PencilIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Bildir</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    navigation.navigate("DiscoverPeople");
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <CompassOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>ID'yi Kopyala</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    navigation.navigate("Likes");
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <TrashIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Gönderiyi Kaldır</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
