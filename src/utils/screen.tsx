import Header from "../components/Header/Header"
import Tabs from "./tabs"
import AppStyle from "../App.style"
import { Platform, RefreshControl, ScrollView, View } from "react-native"
import React, { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setRefresh } from "../store/preferences"
import { useRoute } from "@react-navigation/native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"

export default function ScreenContainer(props: any) {
    const state = useSelector((state: any) => state) as any
    const dispatch = useDispatch()
    const route = useRoute()
    const insets = useSafeAreaInsets()

    const [refreshing, setRefreshing] = useState<boolean>(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        dispatch(setRefresh())

        setTimeout(() => {
            setRefreshing(false)
        }, 500)
    }, [])

    return (
        <View style={{ height: "100%" }}>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: route.name === "Loops" ? "#000" : "#fff", // #eef0f4
                }}
            >
                {!props.hideHeader && <Header title={props.headerTitle} navigation={props.navigation} />}

                {props.disableScrollView ? (
                    <View style={[AppStyle.content, props.hideTabs ? { marginBottom: 0 } : null]}>{props.children}</View>
                ) : (
                    <ScrollView
                        style={[AppStyle.content, props.hideTabs ? { marginBottom: 0 } : null]}
                        showsVerticalScrollIndicator={false}
                        refreshControl={route.name !== "Loops" ? <RefreshControl refreshing={refreshing} colors={["grey"]} onRefresh={onRefresh} tintColor={"grey"} /> : undefined}
                        bounces={route.name === "Loops" ? false : true}
                    >
                        {props.children}
                    </ScrollView>
                )}

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
        </View>
    )
}
