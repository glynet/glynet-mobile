import React, { useEffect } from "react"
import AppStyles from "./App.style"
import { Platform, View } from "react-native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import { useDispatch } from "react-redux"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"

import Feed from "./views/Feed/Feed"
import Loops from "./views/Loops/Loops"
import Profile from "./views/Profile/Profile"
import Search from "./views/Search/Search"
import NotificationsScreen from "./views/Notifications/Notifications"
import Bookmarks from "./views/Bookmarks/Bookmarks"
import Likes from "./views/Likes/Likes"
import EditProfile from "./views/EditProfile/EditProfile"
import Settings from "./views/Settings/Settings"
import MailSettings from "./views/Settings/MailSettings"
import PasswordSettings from "./views/Settings/PasswordSettings"
import FollowRequests from "./views/FollowRequests/FollowRequests"
import NotificationSettings from "./views/Settings/NotificationSettings"
import PrivacySettings from "./views/Settings/PrivacySettings"
import Hashtag from "./views/Hashtag/Hashtag"
import Location from "./views/Location/Location"
import Audio from "./views/Audio/Audio"

import UserList from "./views/UserList/UserList"
import DiscoverPeople from "./views/DiscoverPeople/DiscoverPeople"

import * as Notifications from "expo-notifications"

import { NativeViewGestureHandler } from "react-native-gesture-handler"
import CreatePost from "./views/CreatePost/CreatePost"
import Comments from "./views/Comments/Comments"

import { getData } from "./utils/localStorage"
import { setCompactNotifications } from "./store/preferences"
import * as NavigationBar from "expo-navigation-bar"

import "react-native-reanimated"
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        // Set preferences values from local storage
        (async () => {
            const compact_notifications = await getData("compact_notifications")

            if (compact_notifications !== null) {
                dispatch(setCompactNotifications(compact_notifications === "true"))
            }
        })()

        if (Platform.OS === "android") {
            NavigationBar.setBackgroundColorAsync("#000")
        }
    }, [])

    return (
        <>
            <View style={{ height: "100%" }}>
                <View style={AppStyles.container}>
                    <BottomSheetModalProvider>
                        <NativeViewGestureHandler disallowInterruption={true}>
                            <View style={AppStyles.body}>
                                <Stack.Navigator
                                    screenOptions={{
                                        headerShown: false,
                                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                        // animationEnabled: Platform.OS === "ios" ? true : false
                                    }}
                                >
                                    <Stack.Screen name="Feed" component={Feed} />
                                    <Stack.Screen name="Loops" component={Loops} />
                                    <Stack.Screen name="Audio" component={Audio} />
                                    <Stack.Screen name="Search" component={Search} />
                                    <Stack.Screen name="Profile" component={Profile} />
                                    <Stack.Screen name="Bookmarks" component={Bookmarks} />
                                    <Stack.Screen name="Hashtag" component={Hashtag} />
                                    <Stack.Screen name="Location" component={Location} />
                                    <Stack.Screen name="Likes" component={Likes} />
                                    <Stack.Screen name="Notifications" component={NotificationsScreen} />
                                    <Stack.Screen name="FollowRequests" component={FollowRequests} />

                                    <Stack.Screen name="Comments" component={Comments} />
                                    <Stack.Screen name="CreatePost" component={CreatePost} />
                                    <Stack.Screen name="UserList" component={UserList} />
                                    <Stack.Screen name="DiscoverPeople" component={DiscoverPeople} />

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
                </View>
            </View>
        </>
    )
}
