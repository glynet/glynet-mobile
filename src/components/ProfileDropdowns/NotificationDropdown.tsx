import React from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { BellFilledIcon, BellOffIcon, BellOutlineIcon, CrossIcon } from "../../utils/icons"
import styles from "../Menu/Menu.style"

export default function NotificationDropdown({ navigation, modalRef, callback }: any) {
    return (
        <ScrollView>
            <View style={styles.menu_top}>
                <Text style={styles.menu_title}>Bildirim Seçenekleri</Text>
            </View>

            <View style={{ ...styles.menu_container, marginTop: 0 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        modalRef.current?.close()
                        callback(1)
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BellFilledIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Tüm Bildirimleri Al</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        modalRef.current?.close()
                        callback(2)
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BellOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Yalnızca Vibes</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        modalRef.current?.close()
                        callback(0)
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BellOffIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Kapalı</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
