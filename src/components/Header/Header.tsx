import AppStyles from "../../App.style";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {ArrowLeftIcon, CheckmarkOutlineIcon, BellOutlineIcon, CameraIcon, SearchOutlineIcon} from "../../utils/icons";
import * as React from "react";
import { useRoute } from '@react-navigation/native';
import {sendNotification} from "../../hooks/sendNotifications";
import { setInput } from "../../store/header";
import { useDispatch, useSelector } from "react-redux";

export default function Header({ title, navigation }: any) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state) as any;

    const route = useRoute();
    
    React.useEffect(() => {
        console.log("Search input could be clear but we didn't clear :P (Header.tsx, 17. line)");
        // dispatch(setInput(""));
    }, [route.name])
    
    if (title !== undefined) {
        return (
            <View style={AppStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={AppStyles.headerButton}>
                    <ArrowLeftIcon style={AppStyles.headerButton.icon}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={AppStyles.headerText}>
                    <Text style={AppStyles.headerText.text}>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</Text>
                </TouchableOpacity>
                {route.name === "CreatePost" ? (
                    <TouchableOpacity activeOpacity={0} style={AppStyles.headerButton}>
                        <CheckmarkOutlineIcon style={AppStyles.headerButton.icon}/>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0} style={[AppStyles.headerButton, { opacity: 0 }]}>
                        <ArrowLeftIcon style={AppStyles.headerButton.icon}/>
                    </TouchableOpacity>
                )}
            </View>
        );
    } else {
        switch (route.name) {
            case "Search":
                return (
                    <View style={[AppStyles.header, AppStyles.header_search]}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}
                            style={AppStyles.headerButton}
                        >
                            <ArrowLeftIcon style={AppStyles.headerButton.icon}/>
                        </TouchableOpacity>
                        <View style={{ position: "relative", flexDirection: "row" }}>
                            <TextInput
                                value={state.header.searchInput}
                                style={AppStyles.header_search_input}
                                placeholder={"Glynet'te ara"}
                                placeholderTextColor={"#556574"}
                                autoFocus={true}
                                onChange={(e: any) => dispatch(setInput(e.nativeEvent.text))}
                            />
                            <View style={AppStyles.header_search_icon_container}>
                                <SearchOutlineIcon style={{
                                    height: 20,
                                    width: 20,
                                    fill: "#556574"
                                }} />
                            </View>
                        </View>
                    </View>
                );
            default:
                return (
                    <View style={AppStyles.header}>
                        <TouchableOpacity activeOpacity={0.8} style={AppStyles.headerButton}>
                            <CameraIcon style={AppStyles.headerButton.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={AppStyles.headerText}
                        >
                            <Text style={[AppStyles.headerText.text, { fontSize: 25}]}>glynet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={AppStyles.headerButton}
                            onPress={() => {
                                navigation.navigate("Notifications");
                                sendNotification({
                                    title: "Yeni takip isteğin var",
                                    body: "@ece seni takip etmek istiyor"
                                }).then((r) => console.log("Header.tsx", r))
                            }}
                        >
                            <BellOutlineIcon style={AppStyles.headerButton.icon}/>
                        </TouchableOpacity>
                    </View>
                );
        }
    }
}
