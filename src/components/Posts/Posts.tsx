import React, {useEffect, useState} from "react";
import {View, StyleSheet, ActivityIndicator, Platform} from "react-native";
import Post from "./Post/Post";
import getTheme from "../../constants/colors";

const theme = getTheme();

export default function Posts({ navigation }: any) {
    const [isFetched, setFetched] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setFetched(true);
        }, 500);
    }, []);

    return (
        <View style={styles.posts}>
            {isFetched && Array(20).fill("0").map((value, index) => {
                return <Post key={index} navigation={navigation} />
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
