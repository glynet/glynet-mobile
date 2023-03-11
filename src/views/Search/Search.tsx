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
    const state = useSelector((state) => state) as any;

    const [suggestions, setSuggestions] = useState<any>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            getSuggestions(state.header.searchInput, (response: any) => {                
                setSuggestions(response.data);
            });
        }, 600);
  
        return () => clearTimeout(timer)
    }, [state.header.searchInput]);

    return (
        <ScreenContainer hideTabs={true} navigation={navigation}>
            <View style={styles.results_container}>
                {suggestions.map((item: any, index: number) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} style={styles.result_container} key={index}>
                            {item.type !== "profile" && <View style={styles.result_icon_container}>
                                <SearchOutlineIcon style={styles.result_icon} />
                            </View>}
                            {item.type === "profile" && <Image
                                style={styles.result_icon_image}
                                source={{
                                    uri: `${global.CDN_URL}/${item.image}`
                                }}
                            />}
                            <View>
                                <Text style={[styles.result_text, item.type === "profile" && { fontFamily: "GilroyBold" }]}>{item.title}</Text>
                                {item.type === "profile" && <Text style={[styles.result_text, { fontSize: 14 }]}>{item.subtitle}</Text>}
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScreenContainer>
    );
}
