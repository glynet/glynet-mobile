import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Item from "./Item/Item";
import ScreenContainer from "../../utils/screen";
import {ArrowRightIosIcon, UserAddIcon} from "../../utils/icons";
import styles from "./Container.style";
import { getNotifications } from "./NotificationsAPI";
import Alert from "../../components/Alert/Alert";
import Notify from "../../utils/illustrations/Notify";
import getTheme from "../../constants/colors";

const theme = getTheme();

export default function Notifications({ navigation }: any) {
    const [showRequests, setShowRequests] = useState<boolean>(false);
    const [followRequests, setRequests] = useState<number>(0);
    const [list, setList] = useState<any>([]);

    useEffect(() => {
        getNotifications((response: any) => {
            const data = response.data;

            if (data.available) {
                setList(data.list);

                setShowRequests(data.follow_requests.is_private);
                setRequests(data.follow_requests.count);
            }
        });
    }, []);

    return (
        <ScreenContainer headerTitle={"Bildirimler"} hideTabs={true} navigation={navigation}>
            {(showRequests && followRequests !== 0) && <TouchableOpacity activeOpacity={0.8} style={styles.follow_requests_button_container} onPress={() => navigation.navigate("FollowRequests")}>
                <View style={styles.follow_requests_icon}>
                    <UserAddIcon style={{
                        height: 20,
                        width: 20,
                        fill: "#000"
                    }}/>
                </View>
                <View style={styles.follow_requests_details}>
                    <Text style={styles.follow_requests_text}>Takip İstekleri</Text>
                    <Text style={styles.follow_requests_description}>{followRequests} yeni takip isteği</Text>
                </View>
                <ArrowRightIosIcon style={styles.category_arrow} />
            </TouchableOpacity>}
            <View style={styles.notifications_container}>
                {list.length !== 0 && list.map((content: any, index: number) => {
                    return <Item content={content} index={index} key={index} />;
                })}

                {list.length === 0 && (
                    <Alert
                        image={<Notify themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />} 
                        title={"Tertemiz!"}
                        description={"Yeni bildirimler geldiğinde burada görebilirsin!"}
                    />
                )}
            </View>
        </ScreenContainer>
    );
}
