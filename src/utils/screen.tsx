import Header from "../components/Header/Header"
import Tabs from "./tabs"
import React, { ReactNode } from "react"
import { View, KeyboardAvoidingView, Platform } from "react-native"
import { useRoute } from "@react-navigation/native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import AppStyle from "../App.style"

export default function AppContainer(props: {
    hideHeader?: boolean;
    headerTitle?: string;
    hideTabs?: boolean;
    children: ReactNode;
    navigation: any,
}) {
    const route = useRoute()
    const insets = useSafeAreaInsets()

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ height: "100%" }}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: route.name === "Loops" ? "#000" : "#fff" }}>
                {!props.hideHeader && <Header title={props.headerTitle} navigation={props.navigation} />}

                <View style={[AppStyle.content, props.hideTabs ? { marginBottom: 0 } : null]}>{props.children && props.children}</View>
                
                {!props.hideTabs && <Tabs navigation={props.navigation} />}
            </SafeAreaView>

            <StatusBar style={route.name === "Loops" ? "light" : "dark"} />

            <View
                style={{
                    width: "100%",
                    backgroundColor: route.name === "Loops" ? "#000" : "#fff",
                    height: insets.top,
                    top: 0,
                    position: "absolute",
                    zIndex: 3,
                }}
            />

            {!props.hideTabs && (
                <View
                    style={{
                        width: "100%",
                        backgroundColor: "#000",
                        height: insets.bottom,
                        bottom: 0,
                        position: "absolute",
                    }}
                />
            )}
        </KeyboardAvoidingView>
    )
}
