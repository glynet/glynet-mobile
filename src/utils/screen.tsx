import Header from "../components/Header/Header";
import Tabs from "./tabs";
import AppStyle from "../App.style";
import { ScrollView } from "react-native";
import React from "react";
import {BlurView} from "expo-blur";

export default function ScreenContainer(props: any) {
    return (
        <BlurView style={{ height: "100%" }} intensity={100}>
            <Header title={props.headerTitle} navigation={props.navigation} />
            <ScrollView style={[
                AppStyle.content,
                props.hideTabs ? { marginBottom: 0 } : null
            ]} showsVerticalScrollIndicator={false}>
                {props.children}
            </ScrollView>
            {!props.hideTabs && <Tabs navigation={props.navigation} />}
        </BlurView>
    )
}
