import React, { useEffect, useState } from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {SearchOutlineIcon} from "../../utils/icons";
import ScreenContainer from "../../utils/screen";
import styles from "./Search.style";
import getTheme from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestions } from "./searchAPI";
const theme = getTheme();

export default function Search({ navigation }: any) {
    const [writing, setWriting] = useState<boolean>(false);
    const state = useSelector((state) => state) as any;

    const [suggestions, setSuggestions] = useState<any>([]);
    useEffect(() => {
        if (!writing) {
            setWriting(true);
            getSuggestions(state.header.searchInput, (response: any) => {
                const data = response.data; 
                
                setSuggestions(response.data);
                setWriting(false);
            });
        }
    }, [state.header.searchInput]);

    return (
        <ScreenContainer hideTabs={true} navigation={navigation}>
            <View style={styles.results_container}>
                {suggestions.map((item: any, index: number) => {
                    const isProfile = item.type === "profile";

                    return (
                        <TouchableOpacity activeOpacity={0.7} style={styles.result_container} key={index}>
                            {!isProfile && (
                                <>
                                    <View style={{
                                        height: 35,
                                        width: 35,
                                        backgroundColor: theme.POST_BUTTON_BACKGROUND,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 100
                                    }}>
                                        <SearchOutlineIcon style={styles.result_icon} />
                                    </View>
                                    <Text style={styles.result_text}>{item.title}</Text>
                                </>
                            )}
                            {isProfile && (
                                <>
                                    <Image
                                        style={{
                                            height: 35,
                                            width: 35,
                                            borderRadius: 100,
                                            backgroundColor: theme.THEME_COLOR
                                        }}
                                        source={{
                                            uri: global.CDN_URL + "/" + item.image
                                        }}
                                    />
                                    <View>
                                        <Text style={[styles.result_text, { fontFamily: "GilroyBold" }]}>{item.title}</Text>
                                        <Text style={[styles.result_text, { fontSize: 14 }]}>{item.subtitle}</Text>
                                    </View>
                                </>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScreenContainer>
    );
}
