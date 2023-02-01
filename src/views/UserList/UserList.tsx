import React, {useEffect, useState} from "react";
import {View, Text, TextInput, ActivityIndicator, Platform} from "react-native";
import Item from "./Item/Item";
import ScreenContainer from "../../utils/screen";
import styles from "./Container.style";
import fakeData from "./User.data";
import {useRoute} from "@react-navigation/native";
import {SearchOutlineIcon} from "../../utils/icons";
import getTheme from "../../constants/colors";

const theme = getTheme();

export default function UserList({ navigation }: any) {
    const route = useRoute() as any;

    const [isFetching, setFetching] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        if (data.length == 0) {
            setFetching(false);

            setTimeout(() => {
                setFetching(true);
                setData(fakeData);
            }, 1000);
        } else {
            const newData = fakeData.filter((item: any) => item.name.toLowerCase().startsWith(searchValue.toLowerCase()) || item.username.toLowerCase().startsWith(searchValue.toLowerCase()));
            setData(newData);
        }
    }, [searchValue]);

    return (
        <ScreenContainer headerTitle={route.params.title} hideTabs={true} navigation={navigation}>
            <View style={styles.notifications_container}>
                {isFetching && (
                    <View style={styles.search_container}>
                        <TextInput
                            value={searchValue}
                            style={styles.search}
                            onChangeText={newValue => setSearchValue(newValue)}
                            placeholder={"Birine mi bakıyordun?"}
                            placeholderTextColor={"#556574"}
                            maxLength={32}
                        />
                        <View style={styles.search_icon}>
                            <SearchOutlineIcon style={{
                                height: 20,
                                width: 20,
                                fill: "#556574"
                            }} />
                        </View>
                    </View>
                )}
                {isFetching && data.map((item: any, index: number) => {
                    return <Item data={item} key={index} />;
                })}
                {!isFetching && (
                    <View style={{
                        padding: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <ActivityIndicator
                            size={Platform.OS === "ios" ? "small" : "large"}
                            color={theme.THEME_COLOR}
                        />
                    </View>
                )}
            </View>
        </ScreenContainer>
    );
}
