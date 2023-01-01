import React from "react";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";

export default function Likes({ navigation }: any) {
    return (
        <ScreenContainer headerTitle={"Beğeniler"} hideTabs={true} navigation={navigation}>
            <Posts />
        </ScreenContainer>
    );
}
