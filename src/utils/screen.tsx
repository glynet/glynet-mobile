import Header from "../components/Header/Header"
import Tabs from "./tabs"
import React, { ReactNode, memo, useEffect } from "react"
import { Platform, View, KeyboardAvoidingView } from "react-native"
import { useRoute } from "@react-navigation/native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import AppStyle from "../App.style"
import { useDispatch, useSelector } from "react-redux"
import * as NavigationBar from "expo-navigation-bar"

function AppContainer(props: {
    hideHeader?: boolean;
    headerTitle?: string;
    hideTabs?: boolean;
    children: ReactNode;
    navigation: any,
}) {
    const state = useSelector((state: any) => state) as any

    const route = useRoute()
    const insets = useSafeAreaInsets()

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ height: "100%" }}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: route.name === "Loops" ? "#000000" : "#fff" }}>
                {!props.hideHeader && <Header title={props.headerTitle} navigation={props.navigation} />}

                <View style={[AppStyle.content, props.hideTabs ? { marginBottom: 0 } : null]}>{props.children && props.children}</View>

                {!props.hideTabs && <Tabs navigation={props.navigation} />}
            </SafeAreaView>

            <StatusBar style={route.name === "Loops" ? "light" : state.preferences.status_bar} />

            <View
                style={{
                    width: "100%",
                    backgroundColor: route.name === "Loops" ? "#000" : state.preferences.bar_color,
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
                        backgroundColor: route.name === "Loops" ? "#000" : "#F8F8FA",
                        height: insets.bottom,
                        bottom: 0,
                        position: "absolute",
                    }}
                />
            )}
        </KeyboardAvoidingView>
    )
}

export default memo(AppContainer)
