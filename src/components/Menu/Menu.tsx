import React, { memo, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import { BookmarkOutlineIcon, CompassOutlineIcon, CrossIcon, HeartOutlineIcon, PencilIcon, UserOutlineIcon } from "../../utils/icons"
import styles from "./Menu.style"

function Menu({ navigation, modalRef }: any) {
    useEffect(() => {
        console.log("menü render oldu")
    }, [])

    return (
        <ScrollView>
            <View style={styles.menu_top}>
                <Text style={styles.menu_title}>Menu</Text>
                <View style={styles.menu_buttons}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.menu_button} onPress={() => modalRef.current?.close()}>
                        <CrossIcon style={styles.menu_icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.user_container}>
                <Image
                    fadeDuration={0}
                    style={styles.user_avatar}
                    source={{
                        uri: "https://source.unsplash.com/random",
                    }}
                />
                <View style={styles.user_details}>
                    <Text style={styles.user_details_name}>Metehan Saral</Text>
                    <Text style={styles.user_details_username}>alpsar4l</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.menu_container}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        navigation.navigate("Settings")
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <UserOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Hesap Ayarları</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        navigation.navigate("EditProfile")
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <PencilIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Profili Düzenle</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        navigation.navigate("DiscoverPeople")
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <CompassOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Tanıyor Olabileceklerin</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        navigation.navigate("Likes")
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <HeartOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Beğeniler</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.category_container}
                    onPress={() => {
                        navigation.navigate("Bookmarks")
                        modalRef.current?.close()
                    }}
                >
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <BookmarkOutlineIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container_title}>Kaydedilenler</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default memo(Menu)
