import React from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { AttachmentIcon, BookmarkFilledIcon, BookmarkOutlineIcon, CrossIcon, FlagIcon, TrashIcon } from "../../../utils/icons"
import styles from "../../Menu/Menu.style"

export default function Options({ isMarked, updateMarked, navigation, modalRef }: any) {
    return (
        <ScrollView>
            <View style={styles.menu_top}>
                <Text style={styles.menu_title}>Seçenekler</Text>
            </View>

            <View style={{ ...styles.menu_container, marginTop: 0 }}>
                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={updateMarked}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            {!isMarked && <BookmarkOutlineIcon style={styles.category_container.icon} />}
                            {isMarked && <BookmarkFilledIcon style={styles.category_container.icon} />}
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>{isMarked ? "Kaydedildi" : "Kaydet"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.category_container} onPress={async () => {}}>
                    <View style={styles.category_container_left}>
                        <View style={styles.category_container.icon_container}>
                            <AttachmentIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Bağlantıyı Kopyala</Text>
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
                            <Text style={styles.category_container.title}>Bildir</Text>
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
                            <TrashIcon style={styles.category_container.icon} />
                        </View>
                        <View style={styles.category_container.details}>
                            <Text style={styles.category_container.title}>Kaldır</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
