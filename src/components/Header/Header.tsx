import AppStyles from "../../App.style";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {ArrowLeftIcon, BellOutlineIcon, CameraIcon, PaperPlaneIcon, SearchOutlineIcon} from "../../utils/icons";
import * as React from "react";
import { useRoute, StackActions } from '@react-navigation/native';

export default function Header({ title, navigation }: any) {
    const route = useRoute();

    if (title !== undefined) {
        return (
            <View style={AppStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={AppStyles.headerButton}>
                    <ArrowLeftIcon style={AppStyles.headerButton.icon}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={AppStyles.headerText}>
                    <Text style={AppStyles.headerText.text}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0} style={[AppStyles.headerButton, { opacity: 0 }]}>
                    <ArrowLeftIcon style={AppStyles.headerButton.icon}/>
                </TouchableOpacity>
            </View>
        );
    } else {
        switch (route.name) {
            case "Search":
                return (
                    <View style={[AppStyles.header, AppStyles.header_search]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}
                                          style={AppStyles.headerButton}>
                            <ArrowLeftIcon style={AppStyles.headerButton.icon}/>
                        </TouchableOpacity>
                        <View style={AppStyles.headerSearch}>
                            <TextInput value="metehan sa" style={{width: "90%"}} placeholder={"Glynet'te ara"}
                                       placeholderTextColor={"#556574"}/>
                            <SearchOutlineIcon style={{
                                height: 20,
                                width: 20,
                                fill: "#556574"
                            }}/>
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={AppStyles.header}>
                        <TouchableOpacity activeOpacity={0.8} style={AppStyles.headerButton}>
                            <CameraIcon style={AppStyles.headerButton.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={AppStyles.headerText}>
                            <Text style={AppStyles.headerText.text}>glynet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={AppStyles.headerButton}
                            onPress={() => navigation.navigate("Notifications")}
                        >
                            <BellOutlineIcon style={AppStyles.headerButton.icon}/>
                        </TouchableOpacity>
                    </View>
                );
        }
    }
}
