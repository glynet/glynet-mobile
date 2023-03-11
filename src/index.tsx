import * as React from "react";
import {useFonts} from "expo-font";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from "./store";
import App from "./App";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Glynet() {
    const Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "transparent",
        },
    };

    const [loaded] = useFonts({
        GilroyBold: require("../assets/fonts/Gilroy-Bold/Gilroy-Bold.ttf"),
        GilroyMedium: require("../assets/fonts/Gilroy-Medium/040a78b437acd0433612f92e61d04a1b.ttf"),
        Arial: require("../assets/fonts/FontsFree-Net-arial-bold.ttf")
    });

    if (!loaded)
        return null;

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
                <NavigationContainer theme={Theme}>
                    <App />
                </NavigationContainer>
            </Provider>
        </GestureHandlerRootView>
    )
}
