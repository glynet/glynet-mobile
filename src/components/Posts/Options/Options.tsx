import React from "react";
import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {AttachmentIcon, CrossIcon, TrashIcon} from "../../../utils/icons";
import styles from "../../Menu/Menu.style";
import optionStyles from "./Options.style";

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

            <View style={optionStyles.container}>
                <TouchableOpacity activeOpacity={0.8} style={optionStyles.button}>
                    <AttachmentIcon style={optionStyles.button_icon} />
                    <Text style={optionStyles.button_text}>Bağlantıyı Kopyala</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={optionStyles.button}>
                    <TrashIcon style={optionStyles.button_icon} />
                    <Text style={optionStyles.button_text}>Kaldır</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
