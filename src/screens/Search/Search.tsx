import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {SearchOutlineIcon} from "../../utils/icons";
import ScreenContainer from "../../utils/screen";
import styles from "./Search.style";
import getTheme from "../../themes/themes";

const theme = getTheme();

export default function Search({ navigation }: any) {
    return (
        <ScreenContainer hideTabs={true} navigation={navigation}>
            <View style={styles.results_container}>
                {Array(20).fill("").map((item, index: number) => {
                    const isProfile = Math.floor(Math.random() * 100) < 50;

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
                                    <Text style={styles.result_text}>metehan saral</Text>
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
                                            uri: "https://source.unsplash.com/random"
                                        }}
                                    />
                                    <View>
                                        <Text style={[styles.result_text, { fontFamily: "GilroyBold" }]}>metehan saral</Text>
                                        <Text style={[styles.result_text, { fontSize: 14 }]}>alpsar4l</Text>
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
