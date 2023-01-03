import React from "react";
import {View, StyleSheet} from "react-native";
import Post from "./Post/Post";

export default function Posts({ navigation }: any) {
    return (
        <View style={styles.posts}>
            {Array(20).fill("0").map((value, index) => {
                return <Post key={index} navigation={navigation} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    posts: {

    },
    post_filters: {
        padding: 12,
        backgroundColor: "red"
    }
});
