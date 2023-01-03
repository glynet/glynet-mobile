import React, {useEffect, useState} from "react";
import {View, Text, TextInput} from "react-native";
import Item from "./Item/Item";
import ScreenContainer from "../../utils/screen";
import styles from "./Container.style";
import fakeData from "./User.data";
import {useRoute} from "@react-navigation/native";
import {SearchOutlineIcon} from "../../utils/icons";

export default function UserList({ navigation }: any) {
    const route = useRoute() as any;

    const [data, setData] = useState<any>(fakeData);
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <ScreenContainer headerTitle={route.params.title} hideTabs={true} navigation={navigation}>
            <View style={styles.notifications_container}>
                <View style={styles.search_container}>
                    <TextInput
                        value={searchValue}
                        style={styles.search}
                        onChangeText={newValue => setSearchValue(newValue)}
                        placeholder={"Kullanıcı arayın..."}
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
                {(
                    searchValue === "" ?
                        data :
                        data.filter((item: any) => item.name.toLowerCase().startsWith(searchValue.toLowerCase()) || item.username.toLowerCase().startsWith(searchValue.toLowerCase()))
                ).map((item: any, index: number) => {
                    return <Item data={item} key={index} />;
                })}
            </View>
        </ScreenContainer>
    );
}
