import React, { useRef } from "react"
import AppContainer from "../../utils/screen"
import { useRoute } from "@react-navigation/native"
import PostList from "../../components/PostList/PostList"
import useRouteParams from "../../hooks/useRouteParams"

export default function Hashtag({ navigation }: any) {
    const hashtag = useRef(useRouteParams(useRoute(), "tag")).current

    return (
        <AppContainer headerTitle={`#${hashtag}`} navigation={navigation}>
            <PostList
                collect={"hashtag"} 
                params={`q=${hashtag}`}
                navigation={navigation}
            />
        </AppContainer>
    )
}
