import React, { useEffect, useState } from "react"
import { View, ActivityIndicator, Platform, FlatList, Dimensions } from "react-native"
import Item from "./Item/Item"
import ScreenContainer from "../../utils/screen"
import styles from "./UserList.style"
import { useRoute } from "@react-navigation/native"
import getTheme from "../../constants/colors"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { getUserList } from "./UserListAPI"
import AmongNature from "../../utils/illustrations/AmongNature"
import Alert from "../../components/Alert/Alert"

const theme = getTheme()

export default function UserList({ navigation }: any) {
    const route = useRoute() as any
    const insets = useSafeAreaInsets()

    const [isFetching, setFetching] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [fetchedData, setFetchedData] = useState<any>([])
    const [pageCount, setCount] = useState<number>(0)
    const [moreData, setMoreData] = useState<boolean>(true)

    const pageHeight = Dimensions.get("window").height - insets.bottom - insets.top - 60

    useEffect(() => {
        console.log(fetchedData.length, pageCount)

        let url = ""
        setLoading(true)

        switch (route.params?.type) {
            case "likes":
                url = "/api/@me/v1/posts/likes?page=" + pageCount + "&q=" + route.params?.value
                break
            case "followers":
                url = "/api/@me/v1/profile/followers?username=" + route.params?.value + "&page=" + pageCount
                break
            case "followings":
                url = "/api/@me/v1/profile/followings?username=" + route.params?.value + "&page=" + pageCount
                break
        }

        if (moreData) {
            if (url !== "") {
                (async () => {
                    await getUserList(url, (response: any) => {
                        const data = response.data

                        if (data.available) {
                            setFetching(true)
                            setLoading(false)

                            if (data.data.length <= 15) {
                                setMoreData(false)
                            }

                            if (data.data.length !== 0) {
                                setFetchedData([...fetchedData, ...data.data])
                            } else {
                                setMoreData(false)
                            }
                        } else {
                            if (fetchedData.length === 0) {
                                setFetching(false)
                                navigation.goBack()
                            }
                        }
                    })
                })()
            } else {
                navigation.goBack()
            }
        }
    }, [pageCount])

    return (
        <ScreenContainer
            disableScrollView={true}
            headerTitle={route.params?.type === "likes" ? "Beğeniler" : route.params?.type === "followers" ? "Takipçiler" : "Takip Edilenler"}
            hideTabs={true}
            navigation={navigation}
        >
            <View style={styles.notifications_container}>
                {/* (isFetching && fetchedData.length !== 0) && (
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
                ) */}

                {isFetching && fetchedData.length === 0 && (
                    <View
                        style={{
                            height: pageHeight,
                            justifyContent: "center",
                        }}
                    >
                        <Alert
                            image={<AmongNature themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />}
                            title={"Antik kalıntı mı arıyorsun?"}
                            description={"Buralar uzun zamandır ıssızlıktan ibaret..."}
                        />
                    </View>
                )}

                {isFetching && fetchedData.length !== 0 && (
                    <FlatList
                        style={{ height: pageHeight }}
                        removeClippedSubviews={false}
                        data={fetchedData}
                        renderItem={({ item, index }) => <Item item={item} key={index} index={index} navigation={navigation} />}
                        onEndReached={({ distanceFromEnd }: any) => {
                            if (distanceFromEnd < 0) return

                            if (!moreData) return
                            if (!isLoading) setCount(pageCount + 1)
                        }}
                        ListFooterComponent={() => {
                            if (isLoading) {
                                return (
                                    <View
                                        style={{
                                            padding: 40,
                                        }}
                                    >
                                        <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} color={theme.THEME_COLOR} />
                                    </View>
                                )
                            }

                            return null
                        }}
                        onEndReachedThreshold={0.5}
                    />
                )}

                {!isFetching && fetchedData.length === 0 && (
                    <View
                        style={{
                            padding: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            height: pageHeight,
                        }}
                    >
                        <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} color={theme.THEME_COLOR} />
                    </View>
                )}
            </View>
        </ScreenContainer>
    )
}
