import React from "react"
import PostList from "../../components/PostList/PostList"
import AppContainer from "../../utils/screen"
import { Button } from "react-native"
import Vibes from "./Vibes/Vibes"

export default function Feed({ navigation }: any) {
    return (
        <AppContainer navigation={navigation}>
            {false && <Button onPress={() => {
                navigation.navigate("Comments", {
                    post_id: "1024835969960026112",
                    is_reply: false,
                })
            }} title="YORUMLARA GİT" />}

            <PostList
                collect={"feed"}
                navigation={navigation}
                HeaderComponent={<Vibes />}
            />
        </AppContainer>
    )
}
