import React from "react";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";

export default function Likes({ navigation }: any) {
    return (
        <ScreenContainer headerTitle={"Beğeniler"} navigation={navigation}>
            <Posts type={"likes"} navigation={navigation} />
        </ScreenContainer>
    );
}
