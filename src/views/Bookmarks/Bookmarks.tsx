import React from "react"
import AppContainer from "../../utils/screen"
import PostList from "../../components/PostList/PostList"

export default function Bookmarks({ navigation }: any) {
    return (
        <AppContainer headerTitle={"Kaydedilenler"} navigation={navigation}>
            <PostList
                collect={"bookmarks"}
                navigation={navigation}
            />
        </AppContainer>
    )
}
