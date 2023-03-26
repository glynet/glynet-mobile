import React from "react"
import Posts from "../../components/Posts/Posts"
import ScreenContainer from "../../utils/screen"

export default function Bookmarks({ navigation }: any) {
    return (
        <ScreenContainer headerTitle={"Kaydedilenler"} navigation={navigation}>
            <Posts type={"bookmarks"} navigation={navigation} />
        </ScreenContainer>
    )
}
