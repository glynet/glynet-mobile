import React, { useRef } from "react"
import PostList from "../../components/PostList/PostList"
import AppContainer from "../../utils/screen"
import { useRoute } from "@react-navigation/native"
import ProfileHeader from "./ProfileHeader"
import useRouteParams from "../../hooks/useRouteParams"

export default function Profile({ navigation }: any) {
    const username = useRouteParams(useRoute(), "name")

    return (
        <AppContainer headerTitle={username} navigation={navigation}>
            <PostList
                collect={"profile"}
                params={username}
                navigation={navigation}
                HeaderComponent={<ProfileHeader username={username} navigation={navigation} />}
            />
        </AppContainer>
    )
}