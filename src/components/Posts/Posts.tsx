import React from "react";
import {View, StyleSheet} from "react-native";
import Post from "./Post/Post";

export default function Posts() {
    return (
        <View style={{
            paddingTop: 12,
        }}>
            {Array(20).fill("0").map((value, index) => {
                return <Post key={index} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    posts: {

    }
});
