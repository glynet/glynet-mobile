import React, { useEffect, useState } from "react"
import { ActivityIndicator, Image, Platform, Text, TouchableOpacity, View } from "react-native"
import { SearchOutlineIcon } from "../../utils/icons"
import AppContainer from "../../utils/screen"
import styles from "./Search.style"
import getTheme from "../../constants/colors"
import { useSelector } from "react-redux"
import { getSuggestions } from "./SearchAPI"
import Alert from "../../components/Alert/Alert"
import Searching from "../../utils/illustrations/Searching"

const theme = getTheme()

export default function Search({ navigation }: any) {
    const state = useSelector((state) => state) as any

    const [suggestions, setSuggestions] = useState<any>([])
    const [onFetching, setFetching] = useState<boolean>(false)

    useEffect(() => {
        if (!onFetching && state.header.searchInput.length === 0) {
            setSuggestions([])
            return setFetching(false)
        }

        const timer = setTimeout(async () => {
            if (onFetching) return

            setFetching(true)
            await getSuggestions(state.header.searchInput, (response: any) => {
                setSuggestions(response.data)
                setFetching(false)
            })
        }, 130)

        return () => clearTimeout(timer)
    }, [state.header.searchInput])

    return (
        <AppContainer hideTabs={true} navigation={navigation}>
            {onFetching && (
                <View
                    style={{
                        backgroundColor: theme.BOX_BACKGROUND,
                        width: "100%",
                        borderRadius: 15,
                        marginBottom: 12,
                        padding: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ActivityIndicator size={Platform.OS === "ios" ? "small" : "large"} color={theme.THEME_COLOR} />
                </View>
            )}

            {!onFetching && suggestions.length === 0 && (
                <Alert
                    image={<Searching themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />}
                    title={"Gösterecek bir şey bulamadık"}
                    description={"Daha başka şeyler yazmayı deneyebilirsin"}
                />
            )}

            {!onFetching && (
                <View style={styles.results_container}>
                    {suggestions.map((item: any, index: number) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={[styles.result_container, index === 0 && { borderTopWidth: 0 }]}
                                key={index}
                                onPress={() => {
                                    if (item.type === "profile") {
                                        navigation.navigate("Profile", {
                                            name: item.subtitle,
                                        })
                                    } else {
                                        navigation.navigate("Location", {
                                            location: item.title,
                                        })
                                    }
                                }}
                            >
                                {item.type !== "profile" && (
                                    <View style={styles.result_icon_container}>
                                        <SearchOutlineIcon style={styles.result_icon} />
                                    </View>
                                )}
                                {item.type === "profile" && (
                                    <Image
                                        style={styles.result_icon_image}
                                        source={{
                                            uri: `${global.CDN_URL}/${item.image}`,
                                        }}
                                    />
                                )}
                                <View>
                                    <Text
                                        style={[
                                            styles.result_text,
                                            item.type === "profile" && {
                                                fontWeight: "bold",
                                            },
                                        ]}
                                    >
                                        {item.title}
                                    </Text>
                                    {item.type === "profile" && <Text style={[styles.result_text, { fontSize: 14 }]}>{item.subtitle}</Text>}
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            )}
        </AppContainer>
    )
}
