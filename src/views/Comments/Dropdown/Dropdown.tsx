import React from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {AttachmentIcon, BookmarkOutlineIcon, CrossIcon, FlagIcon, TextIcon, TrashIcon} from "../../../utils/icons";
import styles from "../../../components/Menu/Menu.style";

export default function Dropdown({ navigation, modalRef }: any) {
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

            <View style={{...styles.menu_container, marginTop: 0 }}>

                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    navigation.navigate("EditProfile");
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <TextIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Metni Kopyala</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    navigation.navigate("EditProfile");
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <FlagIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Bildir</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    navigation.navigate("EditProfile");
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <TrashIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Kaldır</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}
