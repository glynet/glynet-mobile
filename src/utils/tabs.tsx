import Feed from "../screens/Feed/Feed";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";
import AppStyles from "../App.style";
import {Dimensions, TouchableOpacity, View} from "react-native";
import {
    PlusOutlineIcon,
    GridFilledIcon,
    GridOutlineIcon,
    HomeFilledIcon,
    HomeOutlineIcon,
    SearchOutlineIcon,
    UserFilledIcon,
    UserOutlineIcon,
    FlashOutlineIcon,
    FlashFilledIcon
} from "./icons";
import React, {useCallback, useRef} from "react";
import {useRoute} from "@react-navigation/native";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BottomModal from "./modal";
import Menu from "../components/Menu/Menu";
import { BlurView } from "expo-blur";

export default function Tabs({ navigation }: any) {
    const route = useRoute();

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <View style={AppStyles.bottomBar}>
            <BottomModal modalRef={bottomSheetModalRef}>
                <Menu navigation={navigation} modalRef={bottomSheetModalRef} />
            </BottomModal>

            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Feed")}
            >
                {route.name !== "Feed" && <HomeOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Feed" && <HomeFilledIcon style={AppStyles.buttonContainer.icon} />}
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Search")}
            >
                <SearchOutlineIcon style={AppStyles.buttonContainer.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={handlePresentModalPress}
            >
                <PlusOutlineIcon style={AppStyles.buttonContainer.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Profile", { name: "alpsar4l" })}
            >
                {route.name !== "Profile" && <UserOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Profile" && <UserFilledIcon style={AppStyles.buttonContainer.icon} />}
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={handlePresentModalPress}
            >
                {route.name !== "Menu" && <GridOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Menu" && <GridFilledIcon style={AppStyles.buttonContainer.icon} />}
            </TouchableOpacity>
        </View>
    )
}
