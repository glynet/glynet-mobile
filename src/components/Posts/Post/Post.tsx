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
import moment from "moment";
import { like, save } from "../PostsAPI";
import { calculateUserFlags } from "../../../utils/flags";

const theme = getTheme();

export default function Post({ content, navigation }: any) {
    const route = useRoute() as any;

    const [likeCount, setLikeCount] = useState<number>(content.content.details.likes.count);
    const [isLiked, setLiked] = useState<boolean>(content.content.details.likes.is_liked);
    const [isMarked, setMarked] = useState<boolean>(content.content.details.is_bookmarked);

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

    const _like = () => {
        if (isLiked) {
            let newCount = Math.abs(likeCount - 1);
            setLikeCount(newCount);
            setLiked(false);
        } else {
            let newCount = Math.abs(likeCount + 1);
            setLikeCount(newCount);
            setLiked(true);
        }

        like(content.id, (response: any) => {
            const status = response.data.status; // bool
        });
    }

    const _save = () => {
        setMarked(!isMarked);

        save(content.id, (response: any) => {
            const status = response.data.status; // bool
            console.log(status);
        });
    }

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
                    <TouchableOpacity onPress={() => navigation.navigate("Profile", { name: content.author.username })}>
                        <Image
                            source={{
                                uri: `${global.CDN_URL}/${content.author.avatar}`,
                            }}
                            style={styles.post_author_avatar}
                        />
                    </TouchableOpacity>
                    <View style={styles.post_author_details}>

                        <View style={styles.post_author_name}>
                            <Text onPress={() => navigation.navigate("Profile", { name: content.author.username })} style={styles.post_author_name_text}>{content.author.name}</Text>
                            {calculateUserFlags(content.author.flags).includes("VERIFIED_USER") && <VerifiedIcon style={styles.post_author_verified_icon} />}
                        </View>

                        {content.content.location !== "" && <Text style={styles.post_author_date}><Text onPress={() => navigation.navigate("Location", { location: content.content.location })} style={styles.post_author_location}>{content.content.location}</Text> ─ {moment.unix(content.content.timestamp).fromNow()}</Text>}
                        {content.content.location === "" && <Text style={styles.post_author_date}>{moment.unix(content.content.timestamp).fromNow()}</Text>}
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

            {content.content.text !== "" && <View style={styles.post_text_container}>
                <TextView
                    style={styles.post_text}
                    mentionHashtagPress={mentionHashtagClick}
                    mentionHashtagColor={theme.THEME_COLOR}
                >{content.content.text}</TextView>
            </View>}

            {(content.content.attachments.length !== 0 && content.content.attachments[0] !== "") && <View style={styles.post_content_container}>
                <Image
                    source={{
                        uri: `${global.CDN_URL}/${content.content.attachments[0]}`
                    }}
                    style={styles.post_content}
                />
            </View>}

            <View style={styles.post_buttons_container}>
                <View style={[styles.post_button, isLiked ? styles.post_button_red : null]}>
                    <TouchableOpacity activeOpacity={0.8} style={{
                        ...styles.post_button_part,
                        alignItems: "flex-end",
                    }} onPress={_like}>
                        {isLiked && <HeartFilledIcon style={[styles.post_button.icon, styles.post_button_red.icon]} />}
                        {!isLiked && <HeartOutlineIcon style={styles.post_button.icon} />}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{...styles.post_button_part, alignItems: "flex-start"}} onPress={() => navigation.navigate("UserList", { title: "Beğenenler" })}>
                        <Text style={[styles.post_button.text, isLiked ? styles.post_button_red.text : null]}>{likeCount}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.post_button, ...styles.post_button_padding }} onPress={() => navigation.navigate("Comments")}>
                    <CommentIcon style={styles.post_button.icon} />
                    <Text style={styles.post_button.text}>{content.content.details.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.post_button, ...styles.post_button_padding }} onPress={_save}>
                    {isMarked && <BookmarkFilledIcon style={[styles.post_button.icon]} />}
                    {!isMarked && <BookmarkOutlineIcon style={styles.post_button.icon} />}
                </TouchableOpacity>
            </View>

        </View>
    )
}
