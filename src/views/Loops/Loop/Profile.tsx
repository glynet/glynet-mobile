import React, { memo } from "react"
import { View, Image, Text, TouchableOpacity, Pressable } from "react-native"
import styles from "./Loop.style"
import { VerifiedIcon } from "../../../utils/icons"
import TextView from "../../../components/TextView/TextView"
import { calculateUserFlags } from "../../../utils/flags"
import Avatar from "../../../components/Avatar/Avatar"
import cdnUrl from "../../../helpers/cdnUrl"
import moment from "moment"

const Profile = ({ author, text, navigation, location, published_at }: any) => {
    function profile_link() {
        navigation.push("Profile", { name: author.username })
    }

    function location_link() {
        navigation.navigate("Location", { location })
    }

    return (
        <View style={styles.details_content}>
            <View style={styles.author_details}>
                <View style={styles.author_username_container}>
                    <View style={styles.author_name_container}>
                        <Text style={styles.author_name} onPress={profile_link}>{author.username}</Text>
                        {calculateUserFlags(author.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.author_badge} />}
                    </View>
                </View>

            </View>

            {text.length !== 0 && (
                <View style={styles.text_content}>
                    <TextView style={styles.text} mentionHashtagColor={"#F5F5F5"}>
                        {text.length >= 128 ? text.slice(0, 128) + "..." : text}
                    </TextView>
                </View>
            )}

            {location !== null && <Text onPress={location_link} style={styles.location_text}>{location}</Text>}
            {(location === null) && <Text style={styles.location_text}>{moment.unix(published_at).fromNow()}</Text>}
        </View>
    )
}

export default memo(Profile)
