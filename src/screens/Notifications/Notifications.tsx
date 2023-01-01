import React from "react";
import {View, StyleSheet} from "react-native";
import Notification from "./Notification/Notification";
import ScreenContainer from "../../utils/screen";

export default function Notifications({ navigation }: any) {
    return (
        <ScreenContainer headerTitle={"Bildirimler"} hideTabs={true} navigation={navigation}>
            <View style={styles.notifications_container}>
                {Array(6).fill("").map((item, index: number) => {
                    return <Notification key={index} />;
                })}
            </View>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    notifications_container: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomColor: "rgba(164,164,164,0.7)",
    }
});
