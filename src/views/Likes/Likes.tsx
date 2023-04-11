import React from "react"
import AppContainer from "../../utils/screen"
import PostList from "../../components/PostList/PostList"

export default function Likes({ navigation }: any) {
    return (
        <AppContainer headerTitle={"Beğeniler"} navigation={navigation}>
            <PostList
                collect={"likes"} 
                navigation={navigation}
            />
        </AppContainer>
    )
}
