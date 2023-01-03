import React from "react";
import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {
    BookmarkOutlineIcon,
    HeartOutlineIcon,
    PencilIcon,
    UserOutlineIcon
} from "../../utils/icons";
import styles from "./UserList.style";

export default function UserList({ navigation, modalRef }: any) {
    return (
        <ScrollView>
            <View style={{padding: 12, paddingTop: 5}}>
                <Text style={{ fontSize: 20, fontFamily: "GilroyBold" }}>Beğenenler</Text>
            </View>

            <View style={styles.list_container}>
                {Array(20).fill("Hey!").map((value, index: number) => {
                    return (
                        <View style={styles.user_container} key={index}>
                            <Image
                                style={styles.user_avatar}
                                source={{
                                    uri: "https://source.unsplash.com/random?human&" + index
                                }}
                            />
                            <View style={styles.user_details}>
                                <Text style={styles.user_name}>Metehan Saral</Text>
                                <Text style={styles.user_username}>alpsar4l</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    );
}
