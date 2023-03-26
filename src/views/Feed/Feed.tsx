import React from "react"
import Posts from "../../components/Posts/Posts"
import Spotlights from "./Spotlights/Spotlights"
import ScreenContainer from "../../utils/screen"

export default function Feed({ navigation }: any) {
    return (
        <ScreenContainer navigation={navigation}>
            <Spotlights />

            {/*
            <Posts type={"feed"} navigation={navigation} />
            */}
        </ScreenContainer>
    )
}
