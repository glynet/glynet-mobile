import Feed from "../screens/Feed/Feed";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";
import AppStyles from "../App.style";
import {TouchableOpacity, View} from "react-native";
import {GridFilledIcon, GridOutlineIcon, HomeFilledIcon, HomeOutlineIcon, SearchOutlineIcon, UserFilledIcon, UserOutlineIcon} from "./icons";
import React from "react";
import Menu from "../screens/Menu/Menu";
import {useRoute} from "@react-navigation/native";

function Tabs({ navigation }: any) {
    const route = useRoute();

    return (
        <View style={AppStyles.bottomBar}>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Feed")}
            >
                {route.name !== "Feed" && <HomeOutlineIcon style={{ ...AppStyles.buttonContainer.icon, opacity: 0.8 }} />}
                {route.name === "Feed" && <HomeFilledIcon style={{ ...AppStyles.buttonContainer.icon, opacity: 1 }} />}
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Search")}
            >
                <SearchOutlineIcon style={{ ...AppStyles.buttonContainer.icon, opacity: 0.8 }} />
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Profile", { name: "alpsar4l" })}
            >
                {route.name !== "Profile" && <UserOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Profile" && <UserFilledIcon style={{ ...AppStyles.buttonContainer.icon, opacity: 1 }} />}
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.8}
                style={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Menu")}
            >
                {route.name !== "Menu" && <GridOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Menu" && <GridFilledIcon style={{ ...AppStyles.buttonContainer.icon, opacity: 1 }} />}
            </TouchableOpacity>
        </View>
    )
}


export default Tabs;
