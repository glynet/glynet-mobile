import React from "react";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";
import {useRoute} from "@react-navigation/native";

export default function Hashtag({ navigation }: any) {
    const route = useRoute() as any;

    return (
        <ScreenContainer headerTitle={`#${route.params?.tag}`} navigation={navigation}>
            {route.params?.tag !== undefined && <Posts type={"hashtag"} params={`q=${route.params?.tag}`} navigation={navigation} />}
        </ScreenContainer>
    );
}
