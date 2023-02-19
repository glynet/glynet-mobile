import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useCallback, useMemo, useRef, useState} from "react";
import styles from "./Comment.style";
import {ArrowRightIosIcon, HeartFilledIcon, HeartOutlineIcon} from "../../../utils/icons";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BottomModal from "../../../utils/modal";
import Dropdown from "../Dropdown/Dropdown";

function Comment() {
    const [isLiked, setLiked] = useState<boolean>(Math.floor(Math.random() * 50) < 25);

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.comment} onLongPress={handlePresentModalPress}>
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["35%", "35%"], [])}>
                <Dropdown modalRef={bottomSheetModalRef} />
            </BottomModal>

            <Image
                style={styles.comment_author_avatar}
                source={{
                    uri: "https://source.unsplash.com/random?human&i" + Math.floor(Math.random() * 50)
                }}
            />
            <View style={styles.comment_right}>
                <View style={styles.comment_content}>
                    <Text style={styles.comment_author_name}>Metehan Saral</Text>
                    <Text style={styles.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    {Math.floor(Math.random() * 50) < 25 && <>
                    <View style={styles.comment_attachment_container}>
                        <Image
                            style={styles.comment_attachment_content}
                            source={{
                                uri: "https://media.tenor.com/6tlB3xGf1AoAAAAM/cat-white.gif"
                            }}
                        />
                    </View>
                    </>}
                    <View style={styles.comment_bottom}>
                        <View style={styles.comment_bottom_left}>
                            <Text style={styles.comment_date}>1 saat önce</Text>
                            <Text style={[styles.comment_date, styles.reply_button]}>yanıtla</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setLiked(!isLiked)}
                            style={styles.comment_button_container}
                            activeOpacity={1}
                        >
                            {!isLiked && <HeartOutlineIcon style={styles.comment_button}/>}
                            {isLiked && <HeartFilledIcon style={{...styles.comment_button, fill: "red"}}/>}
                            <Text style={[styles.comment_button_value, isLiked ? {color: "red"} : null]}>0</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {Math.floor(Math.random() * 50) < 25 && <>
                    <TouchableOpacity activeOpacity={0.8} style={styles.reply_container}>
                        <Image
                            style={styles.reply_author_avatar}
                            source={{
                                uri: "https://source.unsplash.com/random?human&r=1"
                            }}
                        />
                        <View style={styles.reply_content}>
                            <Text style={styles.reply_author_name}>Alp Saral <Text style={styles.reply_author_date}>1 saat önce</Text></Text>
                            <Text style={styles.reply_author_text}>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.replies_count_container}>
                        <Text style={styles.replies_text}>diğer {Math.floor(Math.random() * 100)} yanıtı oku...</Text>
                        <ArrowRightIosIcon style={styles.replies_icon}/>
                    </TouchableOpacity>
                </>}
            </View>
        </TouchableOpacity>
    );
}

export default Comment;
