import * as React from "react";
import AppStyles from "./App.style";
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useFonts} from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { Provider } from "react-redux";

import store from "./store/index";

import Feed from "./screens/Feed/Feed";
import Menu from "./screens/Menu/Menu";
import Profile from "./screens/Profile/Profile";
import Search from "./screens/Search/Search";

import Notifications from "./screens/Notifications/Notifications";
import Bookmarks from "./screens/Bookmarks/Bookmarks";
import Likes from "./screens/Likes/Likes";
import EditProfile from "./screens/EditProfile/EditProfile";


const Stack = createStackNavigator();

export default function App() {
    const [loaded] = useFonts({
        GilroyBold: require("../assets/fonts/Gilroy-Bold/Gilroy-Bold.ttf"),
        GilroyMedium: require("../assets/fonts/Gilroy-Medium/040a78b437acd0433612f92e61d04a1b.ttf"),
        Arial: require("../assets/fonts/FontsFree-Net-arial-bold.ttf")
    });

    if (!loaded)
        return null;

    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <SafeAreaView style={AppStyles.container}>
                        <View style={AppStyles.body}>

                            <Stack.Navigator screenOptions={{ headerShown: false }}>
                                <Stack.Screen name="Feed" component={Feed} />
                                <Stack.Screen name="Search" component={Search} />
                                <Stack.Screen name="Profile" component={Profile} />
                                <Stack.Screen name="Menu" component={Menu} />

                                <Stack.Screen name="EditProfile" component={EditProfile} />
                                <Stack.Screen name="Bookmarks" component={Bookmarks} />
                                <Stack.Screen name="Likes" component={Likes} />
                                <Stack.Screen name="Notifications" component={Notifications} />
                            </Stack.Navigator>

                        </View>
                        <StatusBar style="dark" />
                    </SafeAreaView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}
