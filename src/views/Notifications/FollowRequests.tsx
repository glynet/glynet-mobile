import React, { useEffect, useState } from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import Item from "./Item/Item";
import ScreenContainer from "../../utils/screen";
import styles from "./Item/Item.style";
import container from "./Container.style";
import axios from "axios";
import { CheckmarkIcon, CrossIcon } from "../../utils/icons";

export default function FollowRequests({ navigation }: any) {
    const [list, setList] = useState<any>([]);

    const _update = (user: string, accept: boolean) => {
        console.log("Takip isteğini onayla?", user, accept);
        
        axios({
            method: "POST",
            url: "/api/@me/client/follow_requests/" + accept ? "accept" : "decline",
            data: { user_id: user }
        }).then((response: any) => {
            const data = response.data;
            console.log(data);
        }).catch((error: any) => {
            const errMessage = error.toJSON();
            console.log(errMessage);
        });
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/@me/client/follow_requests"
        }).then((response: any) => {
            const data = response.data;
        
            if (data.list) {
                setList(data.list);
            }
        }).catch((error: any) => {
            const errMessage = error.toJSON();
            console.log(errMessage);
        });
    }, []);

    return (
        <ScreenContainer headerTitle={"Takip İstekleri"} hideTabs={true} navigation={navigation}>
            <View style={container.notifications_container}>

                {list.length !== 0 && list.map((item: any, index: number) => {
                    return (
                        <TouchableOpacity activeOpacity={0.8} style={[styles.notification_container, index === 0 && { borderTopWidth: 0 }]} key={index}>
                            <Image
                                style={styles.notification_avatar}
                                source={{
                                    uri: `${global.CDN_URL}/${item.user.avatar}`
                                }}
                            />
                            <View style={styles.notification_details}>
                                <Text style={{...styles.notification_text, fontFamily: "GilroyBold"}}>{item.user.name}</Text>
                                <Text style={styles.notification_date}>{item.user.username}</Text>
                            </View>
                            <View style={styles.request_buttons}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.request_button_container} onPress={() => _update(item.user.id, true)}>
                                    <CrossIcon style={styles.request_button} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={styles.request_button_container} onPress={() => _update(item.user.id, false)}>
                                    <CheckmarkIcon style={styles.request_button} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScreenContainer>
    );
}
