import React from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {
    BellFilledIcon,
    BellOffIcon, BellOutlineIcon,
    CrossIcon, CrossIconRounded,
    InfoIcon,
    MuteIcon,
} from "../../utils/icons";
import styles from "../Menu/Menu.style";

export default function NotificationDropdown({ navigation, modalRef }: any) {
    return (
        <ScrollView>
            <View style={styles.menu_top}>
                <Text style={styles.menu_title}>Bildirim Tercihleri</Text>
                <View style={styles.menu_buttons}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.menu_button} onPress={() => modalRef.current?.close()}>
                        <CrossIcon style={styles.menu_icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{...styles.menu_container, marginTop: 0 }}>

                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BellFilledIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Tüm Bildirimleri Al</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BellOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Yalnızca Shotlar</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={() => {
                    modalRef.current?.close();
                }}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BellOffIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Kapalı</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}
