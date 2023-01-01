import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SearchOutlineIcon} from "../../utils/icons";
import ScreenContainer from "../../utils/screen";

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
                                        backgroundColor: "#ececec",
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
                                            borderRadius: 100
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

const styles = StyleSheet.create({
    results_container: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomColor: "rgba(164,164,164,0.7)",
    },
    result_container: {
        padding: 15,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(164,164,164,0.7)",
        width: "100%",
        alignItems: "center"
    },
    result_icon: {
        height: 20,
        width: 20,
        fill: "#1E2129"
    },
    result_text: {
        color: "#1E2129",
        fontSize: 16,
        marginLeft: 13,
    }
});
