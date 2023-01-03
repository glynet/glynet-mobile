import React from "react";
import {View} from "react-native";
import Item from "./Item/Item";
import ScreenContainer from "../../utils/screen";
import styles from "./Container.style";

export default function FollowRequests({ navigation }: any) {
    return (
        <ScreenContainer headerTitle={"Takip İstekleri"} hideTabs={true} navigation={navigation}>
            <View style={styles.notifications_container}>
                {Array(2).fill("").map((item, index: number) => {
                    return <Item isFollowRequest={true} key={index} />;
                })}
            </View>
        </ScreenContainer>
    );
}
