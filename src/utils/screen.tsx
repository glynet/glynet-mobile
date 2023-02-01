import Header from "../components/Header/Header";
import Tabs from "./tabs";
import AppStyle from "../App.style";
import {RefreshControl, ScrollView} from "react-native";
import React, {useCallback, useState} from "react";
import {BlurView} from "expo-blur";

export default function ScreenContainer(props: any) {
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <BlurView style={{ height: "100%" }} intensity={100}>
            <Header title={props.headerTitle} navigation={props.navigation} />
            <ScrollView
                style={[
                    AppStyle.content,
                    props.hideTabs ? { marginBottom: 0 } : null
                ]}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />}
            >
                {props.children}
            </ScrollView>
            {!props.hideTabs && <Tabs navigation={props.navigation} />}
        </BlurView>
    )
}
