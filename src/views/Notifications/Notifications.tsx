import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Item from "./Item/Item";
import ScreenContainer from "../../utils/screen";
import {ArrowRightIosIcon, UserAddIcon} from "../../utils/icons";
import styles from "./Container.style";

export default function Notifications({ navigation }: any) {
    return (
        <ScreenContainer headerTitle={"Bildirimler"} hideTabs={true} navigation={navigation}>
            <TouchableOpacity activeOpacity={0.8} style={styles.follow_requests_button_container} onPress={() => navigation.navigate("FollowRequests")}>
                <View style={styles.follow_requests_icon}>
                    <UserAddIcon style={{
                        height: 20,
                        width: 20,
                        fill: "#000"
                    }}/>
                </View>
                <View style={styles.follow_requests_details}>
                    <Text style={styles.follow_requests_text}>Takip İstekleri</Text>
                    <Text style={styles.follow_requests_description}>2 yeni takip isteği</Text>
                </View>
                <ArrowRightIosIcon style={styles.category_arrow} />
            </TouchableOpacity>
            <View style={styles.notifications_container}>
                {Array(6).fill("").map((item, index: number) => {
                    return <Item key={index} />;
                })}
            </View>
        </ScreenContainer>
    );
}
