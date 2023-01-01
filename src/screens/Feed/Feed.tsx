import React from "react";
import Posts from "../../components/Posts/Posts";
import Shots from "./Shots/Shots";
import ScreenContainer from "../../utils/screen";

export default function Feed({ navigation }: any) {
    return (
        <ScreenContainer navigation={navigation}>
            <Shots />
            <Posts />
        </ScreenContainer>
    );
}