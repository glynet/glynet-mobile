import React from "react"
import { View, Text, TouchableOpacity, ScrollView, Share } from "react-native"
import { CrossIcon, CrossIconRounded, FlagIcon, InfoIcon, MuteIcon, PaperPlaneIcon } from "../../utils/icons"
import styles from "../Menu/Menu.style"

export default function ProfileDropdown({ navigation, modalRef }: any) {
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

            <View style={{ ...styles.menu_container, marginTop: 0 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={async () => {
                        await Share.share({
                            message: "https://www.glynet.com/@alpsar4l",
                        })
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <PaperPlaneIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Profili Paylaş</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <CrossIconRounded style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Engelle</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <MuteIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Sessize Al</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <InfoIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Bu Profil Hakkında</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <FlagIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Bildir</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
