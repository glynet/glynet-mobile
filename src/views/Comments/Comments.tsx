import React, {useState} from "react";
import {View, Text, Image, TextInput} from "react-native";
import ScreenContainer from "../../utils/screen";
import {useRoute} from "@react-navigation/native";
import Comment from "./Comment/Comment";
import styles from "./Comments.style";
import getTheme from "../../constants/colors";
import {PaperPlaneIcon} from "../../utils/icons";

const theme = getTheme();

function Comments({ navigation }: any) {
    const [commentContent, setCommentContent] = useState<string>("");

    return (
        <>
            <ScreenContainer headerTitle={"Yorumlar"} hideTabs={true} navigation={navigation}>
                <View style={styles.container}>
                    {Array(20).fill("").map((data, index: number) => {
                        return <Comment key={index} />;
                    })}
                </View>
            </ScreenContainer>
            <View style={styles.new_comment}>
                <Image
                    style={styles.new_comment_avatar}
                    source={{
                        uri: "https://source.unsplash.com/random?human&i" + Math.floor(Math.random() * 50)
                    }}
                />
                <View style={{marginLeft: 8,}}>
                    <TextInput
                        value={commentContent}
                        onChangeText={setCommentContent}
                        placeholder={"Bir yorum bırak..."}
                        placeholderTextColor={theme.SECONDARY_COLOR}
                        style={styles.new_comment_input}
                    />
                </View>
                <View style={{...styles.new_comment_send_container, marginLeft: 8}}>
                    <PaperPlaneIcon style={styles.new_comment_send} />
                </View>
            </View>
        </>
    );
}

export default Comments;
