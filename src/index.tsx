import * as React from "react"
import { useFonts } from "expo-font"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import store from "./store"
import App from "./App"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Platform } from "react-native"
import axios from "axios"

export default function Looplens() {
    const Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "transparent",
        },
    }

    const [loaded] = useFonts({
        Bold: require("../assets/fonts/Satoshi/Satoshi-Black.ttf"),
        SoftBold: require("../assets/fonts/Satoshi/Satoshi-Bold.ttf"),
        Medium: require("../assets/fonts/Satoshi/Satoshi-Medium.ttf"),

        GilroyBold: require("../assets/fonts/Gilroy-Bold/Gilroy-Bold.ttf"),
        GilroyMedium: require("../assets/fonts/Gilroy-Medium/040a78b437acd0433612f92e61d04a1b.ttf"),
        Arial: require("../assets/fonts/FontsFree-Net-arial-bold.ttf"),
    })

    if (!loaded) return null

    global.BASE_URL = Platform.OS === "ios" ? "http://localhost:7771" : "http://192.168.1.3:7771"
    global.CDN_URL = Platform.OS === "ios" ? "http://localhost:7771" : "http://192.168.1.3:7771"
    axios.defaults.baseURL = global.BASE_URL
    axios.defaults.headers.common["Authorization"] =
        // "6e35021199a83eb4503ed597bec35bb5171d806fc3fa2d90f4a564677d443ecf"
        "3fb1658bc02772c76eaa7054009ec462aa0def40fb5faa13e82a4d6d206f0915"
        // "d901a23f5a6c976fe67c1b11afe72ab826b9a1e25c9c90c311743e3e016d1413"
        // Platform.OS !== "ios" ? "d901a23f5a6c976fe67c1b11afe72ab826b9a1e25c9c90c311743e3e016d1413" : "2458689962"

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <NavigationContainer theme={Theme}>
                    <SafeAreaProvider>
                        <App />
                    </SafeAreaProvider>
                </NavigationContainer>
            </Provider>
        </GestureHandlerRootView>
    )
}
