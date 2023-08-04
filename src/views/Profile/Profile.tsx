import React, { useMemo, useRef } from "react"
import PostList from "../../components/PostList/PostList"
import AppContainer from "../../utils/screen"
import { useRoute } from "@react-navigation/native"
import ProfileHeader from "./ProfileHeader"
import useRouteParams from "../../hooks/useRouteParams"

export default function Profile({ navigation }: any) {
    const username = useRef(useRouteParams(useRoute(), "name"))

    return (
        <AppContainer hideHeader={false} headerTitle={username.current} navigation={navigation}>
            <PostList
                collect={"profile"}
                params={username}
                navigation={navigation}
                HeaderComponent={<ProfileHeader username={username.current} navigation={navigation} />}
            />
        </AppContainer>
    )
}
