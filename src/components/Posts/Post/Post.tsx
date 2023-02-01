import {Image, Text, TouchableOpacity, View} from "react-native";
import {
    BookmarkFilledIcon,
    BookmarkOutlineIcon,
    CommentIcon,
    HeartFilledIcon,
    HeartOutlineIcon, VerifiedIcon,
    VerticalIcon
} from "../../../utils/icons";
import React, {useCallback, useMemo, useRef, useState} from "react";
import getTheme from "../../../constants/colors";
import TextView from "../../TextView/TextView";
import {useRoute} from "@react-navigation/native";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BottomModal from "../../../utils/modal";
import Options from "../Options/Options";
import styles from "./Post.style";

const theme = getTheme();

export default function Post({ navigation }: any) {
    const route = useRoute() as any;

    const [isLiked, setLiked] = useState<boolean>(false);
    const [isMarked, setMarked] = useState<boolean>(false);

    const id = Math.floor(Math.random() * 2000);

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const mentionHashtagClick = (text: any) => {
        if (text.slice(0, 1) === "#") {
            if (route.params?.tag !== text.slice(1)) {
                navigation.push("Hashtag", { tag: text.slice(1) });
            }
        } else {
            if (route.params?.name !== text.slice(1)) {
                navigation.push("Profile", {name: text.slice(1)});
            }
        }
    };

    return (
        <View style={styles.post}>
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <Options navigation={navigation} modalRef={bottomSheetModalRef} />
            </BottomModal>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <View style={styles.post_author}>
                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: "https://source.unsplash.com/random?human&" + id,
                            }}
                            style={styles.post_author_avatar}
                        />
                    </TouchableOpacity>
                    <View style={styles.post_author_details}>

                        <View style={styles.post_author_name}>
                            <Text style={styles.post_author_name_text}>Metehan Saral</Text>
                            <VerifiedIcon style={styles.post_author_verified_icon} />
                        </View>

                        {id < 40 && <Text style={styles.post_author_date}><Text onPress={() => navigation.navigate("Location", { location: "Kuruçeşme" })} style={styles.post_author_location}>Kuruçeşme</Text> ─ 1 saat önce</Text>}
                        {id >= 40 && <Text style={styles.post_author_date}>1 saat önce</Text>}
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{
                    padding: 12,
                    paddingBottom: 0,
                    alignItems: "center",
                }} onPress={handlePresentModalPress}>
                    <VerticalIcon style={{
                        height: 22,
                        width: 22,
                        fill: theme.POST_BUTTON_COLOR
                    }} />
                </TouchableOpacity>
            </View>

            {id < 60 && <View style={styles.post_text_container}>
                <TextView
                    style={styles.post_text}
                    mentionHashtagPress={mentionHashtagClick}
                    mentionHashtagColor={theme.THEME_COLOR}
                >
                    #nomatter what I did it didn't mean at all (oh)
                    Whenever I said no you said "come along"
                    And now I have lost my #throne
                    #yousaid you would walk me home

                    @ecealtug, @alpsar4l
                </TextView>
            </View>}

            {(id > 50) && <View style={styles.post_content_container}>
                <Image
                    source={{
                        uri: "https://source.unsplash.com/random?" + id,
                    }}
                    style={styles.post_content}
                />
            </View>}

            <View style={styles.post_buttons_container}>
                <View style={[styles.post_button, isLiked ? styles.post_button_red : null]}>
                    <TouchableOpacity activeOpacity={0.8} style={{
                        ...styles.post_button_part,
                        alignItems: "flex-end",
                    }} onPress={() => setLiked(!isLiked)}>
                        {isLiked && <HeartFilledIcon style={[styles.post_button.icon, styles.post_button_red.icon]} />}
                        {!isLiked && <HeartOutlineIcon style={styles.post_button.icon} />}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{
                        ...styles.post_button_part,
                        alignItems: "flex-start",
                    }} onPress={() => navigation.navigate("UserList", { title: "Beğenenler" })}>
                        <Text style={[styles.post_button.text, isLiked ? styles.post_button_red.text : null]}>12</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.post_button, ...styles.post_button_padding }}>
                    <CommentIcon style={styles.post_button.icon} />
                    <Text style={styles.post_button.text}>24</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.post_button, ...styles.post_button_padding }} onPress={() => setMarked(!isMarked)}>
                    {isMarked && <BookmarkFilledIcon style={[styles.post_button.icon]} />}
                    {!isMarked && <BookmarkOutlineIcon style={styles.post_button.icon} />}
                </TouchableOpacity>
            </View>

        </View>
    )
}
