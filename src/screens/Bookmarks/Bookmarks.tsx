import React from "react";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";

export default function Bookmarks({ navigation }: any) {
    return (
        <ScreenContainer headerTitle={"Kaydedilenler"} hideTabs={true} navigation={navigation}>
            <Posts />
        </ScreenContainer>
    );
}
