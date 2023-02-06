import React from "react";
import AppStyles from "./App.style";
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";
import {useSelector} from "react-redux";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

import Feed from "./views/Feed/Feed";
import Profile from "./views/Profile/Profile";
import Search from "./views/Search/Search";

import NotificationsScreen from "./views/Notifications/Notifications";
import Bookmarks from "./views/Bookmarks/Bookmarks";
import Likes from "./views/Likes/Likes";
import EditProfile from "./views/EditProfile/EditProfile";
import Settings from "./views/Settings/Settings";
import MailSettings from "./views/Settings/MailSettings";
import PasswordSettings from "./views/Settings/PasswordSettings";
import FollowRequests from "./views/Notifications/FollowRequests";
import NotificationSettings from "./views/Settings/NotificationSettings";
import PrivacySettings from "./views/Settings/PrivacySettings";
import Hashtag from "./views/Hashtag/Hashtag";
import Location from "./views/Location/Location";

import UserList from "./views/UserList/UserList";
import DiscoverPeople from "./views/DiscoverPeople/DiscoverPeople";

import * as Notifications from "expo-notifications";

import { NativeViewGestureHandler } from "react-native-gesture-handler";
import CreatePost from "./views/CreatePost/CreatePost";
import Comments from "./views/Comments/Comments";

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function App() {
    const state = useSelector((state: any) => state);

    return (
        <SafeAreaProvider>
            <LinearGradient
                style={{ height: "100%" }}
                colors={["rgba(232,241,245,0.99)", "#F8FBFF", "#f1e7ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0}}
            >
                <SafeAreaView style={[
                    AppStyles.container,
                    state.preferences.blackBackground ? { backgroundColor: "#000" } : null
                ]}>
                    <BottomSheetModalProvider>
                        <NativeViewGestureHandler disallowInterruption={true}>
                            <View style={AppStyles.body}>
                                <Stack.Navigator screenOptions={{ headerShown: false }}>
                                    <Stack.Screen name="Feed" component={Feed} />
                                    <Stack.Screen name="Search" component={Search} />
                                    <Stack.Screen name="Profile" component={Profile} />
                                    <Stack.Screen name="Bookmarks" component={Bookmarks} />
                                    <Stack.Screen name="Hashtag" component={Hashtag} />
                                    <Stack.Screen name="Location" component={Location} />
                                    <Stack.Screen name="Likes" component={Likes} />
                                    <Stack.Screen name="Notifications" component={NotificationsScreen} />
                                    <Stack.Screen name="FollowRequests" component={FollowRequests} />

                                    <Stack.Screen name="CreatePost" component={CreatePost} />
                                    <Stack.Screen name="UserList" component={UserList} />
                                    <Stack.Screen name="DiscoverPeople" component={DiscoverPeople} />
                                    <Stack.Screen name="Comments" component={Comments} />

                                    <Stack.Screen name="Settings" component={Settings} />
                                    <Stack.Screen name="PasswordSettings" component={PasswordSettings} />
                                    <Stack.Screen name="MailSettings" component={MailSettings} />
                                    <Stack.Screen name="EditProfile" component={EditProfile} />
                                    <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
                                    <Stack.Screen name="PrivacySettings" component={PrivacySettings} />
                                </Stack.Navigator>
                            </View>
                        </NativeViewGestureHandler>
                    </BottomSheetModalProvider>
                    <StatusBar
                        style={state.preferences.blackBackground ? "light" : "dark"}
                    />
                </SafeAreaView>
            </LinearGradient>
        </SafeAreaProvider>
    );
}
