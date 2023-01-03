import * as React from "react";
import AppStyles from "./App.style";
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {useFonts} from "expo-font";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

import store from "./store/index";

import Feed from "./screens/Feed/Feed";
import Profile from "./screens/Profile/Profile";
import Search from "./screens/Search/Search";

import Notifications from "./screens/Notifications/Notifications";
import Bookmarks from "./screens/Bookmarks/Bookmarks";
import Likes from "./screens/Likes/Likes";
import EditProfile from "./screens/EditProfile/EditProfile";
import Settings from "./screens/Settings/Settings";
import MailSettings from "./screens/Settings/MailSettings";
import PasswordSettings from "./screens/Settings/PasswordSettings";
import FollowRequests from "./screens/Notifications/FollowRequests";
import NotificationSettings from "./screens/Settings/NotificationSettings";
import PrivacySettings from "./screens/Settings/PrivacySettings";
import UserList from "./screens/UserList/UserList";

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "transparent",
    },
};

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
            <NavigationContainer theme={MyTheme}>
                <SafeAreaProvider>
                    <LinearGradient
                        style={{ height: "100%" }}
                        colors={["rgba(232,241,245,0.99)", "#F8FBFF", "#f1e7ff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0}}
                    >
                        <SafeAreaView style={AppStyles.container}>
                            <BottomSheetModalProvider>
                                <View style={AppStyles.body}>
                                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                                        <Stack.Screen name="Feed" component={Feed} />
                                        <Stack.Screen name="Search" component={Search} />
                                        <Stack.Screen name="Profile" component={Profile} />
                                        <Stack.Screen name="Bookmarks" component={Bookmarks} />
                                        <Stack.Screen name="Likes" component={Likes} />
                                        <Stack.Screen name="Notifications" component={Notifications} />
                                        <Stack.Screen name="FollowRequests" component={FollowRequests} />

                                        <Stack.Screen name="UserList" component={UserList} />

                                        <Stack.Screen name="Settings" component={Settings} />
                                        <Stack.Screen name="PasswordSettings" component={PasswordSettings} />
                                        <Stack.Screen name="MailSettings" component={MailSettings} />
                                        <Stack.Screen name="EditProfile" component={EditProfile} />
                                        <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
                                        <Stack.Screen name="PrivacySettings" component={PrivacySettings} />
                                    </Stack.Navigator>
                                </View>
                            </BottomSheetModalProvider>
                            <StatusBar
                                style="dark"
                            />
                        </SafeAreaView>
                    </LinearGradient>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}
