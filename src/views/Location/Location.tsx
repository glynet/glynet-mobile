import React, { useRef } from "react"
import PostList from "../../components/PostList/PostList"
import AppContainer from "../../utils/screen"
import { useRoute } from "@react-navigation/native"
import useRouteParams from "../../hooks/useRouteParams"

export default function Location({ navigation }: any) {
    const location = useRef(useRouteParams(useRoute(), "location")).current

    return (
        <AppContainer headerTitle={location} navigation={navigation}>
            <PostList
                collect={"location"} 
                params={`q=${location}`}
                navigation={navigation}
            />
        </AppContainer>
    )
}
