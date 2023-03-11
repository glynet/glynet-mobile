import React, {useEffect, useState} from "react";
import {View, StyleSheet, ActivityIndicator, Platform} from "react-native";
import Post from "./Post/Post";
import getTheme from "../../constants/colors";
import axios from "axios";

const theme = getTheme();

export default function Posts({ type, params, navigation }: any) {
    const [isFetched, setFetched] = useState<boolean>(false);
    const [posts, setPosts] = useState([]) as any;

    useEffect(() => {
        setFetched(false);

        axios({
            method: "GET",
            url: "/api/@me/posts" + `?w=${type}${params !== undefined ? "&" + params : ""}`
        }).then((response: any) => {
            const data = response.data;
            console.log(data.status, data.code);

            if (data.status) {
                setFetched(true);
                setPosts(data.list);
            }
        }).catch((error: any) => {
            const errMessage = error.toJSON();
            console.log(errMessage);
        });
    }, []);

    return (
        <View style={styles.posts}>
            {isFetched && posts.map((post: any, index: number) => {
                return <Post
                    content={post} 
                    key={index} 
                    navigation={navigation} 
                />;
            })}
            {!isFetched && (
                <View style={{
                    backgroundColor: theme.BOX_BACKGROUND,
                    width: "100%",
                    borderRadius: 15,
                    marginBottom: 12,
                    padding: 30,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <ActivityIndicator
                        size={Platform.OS === "ios" ? "small" : "large"}
                        color={theme.THEME_COLOR}
                    />
                </View>
            )}
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
