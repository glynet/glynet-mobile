import React from "react"
import PostList from "../../components/PostList/PostList"
import Spotlights from "./Spotlights/Spotlights"
import AppContainer from "../../utils/screen"

export default function Feed({ navigation }: any) {
    return (
        <AppContainer navigation={navigation}>
            <PostList
                collect={"feed"}
                navigation={navigation}
                HeaderComponent={<Spotlights />}
            />
        </AppContainer>
    )
}
