import React from "react";
import Posts from "../../components/Posts/Posts";
import ScreenContainer from "../../utils/screen";
import {useRoute} from "@react-navigation/native";

export default function Location({ navigation }: any) {
    const route = useRoute() as any;

    return (
        <ScreenContainer headerTitle={`${route.params?.location}`} navigation={navigation}>
            <Posts navigation={navigation} />
        </ScreenContainer>
    );
}
