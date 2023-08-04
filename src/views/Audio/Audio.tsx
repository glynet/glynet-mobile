import React, { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import AppContainer from "../../utils/screen"
import styles from "./Audio.style"
import MasonryList from "@react-native-seoul/masonry-list"
import Item from "./Item/Item"
import { useRoute } from "@react-navigation/native"
import { getLoops } from "./AudioAPI"

import { Audio as AudioType } from "../../../../glynet-api/source/models/post.model"
import cdnUrl from "../../helpers/cdnUrl"
import getTheme from "../../constants/colors"
import Loader from "../../components/Loader/Loader"

const theme = getTheme()

export default function Audio({ navigation }: any) {
    const [loops, setLoops] = useState<AudioType[]>([])
    const [count, setCount] = useState<number>(0)
    const [isFetched, setFetched] = useState<boolean>(false)

    const route = useRoute() as any

    const renderItem = ({ item }: any) => {
        return <Item item={item} navigation={navigation} />
    }

    useEffect(() => {
        setFetched(false)

        if (route.params.audio_id !== null) {
            getLoops(route.params.audio_id, (response: any) => {
                const data = response.data

                if (data.available) {
                    setFetched(true)
                    setCount(data.total_data_length)
                    setLoops(data.data)
                }
            })
        } else {
            navigation.goBack()
        }
    }, [])

    return (
        <>
            <AppContainer headerTitle={"Ses"} navigation={navigation}>
                {!isFetched && (
                    <View style={styles.loader}>
                        <Loader clearStyles={true} size={"small"} />
                    </View>
                )}
                {isFetched && (
                    <View style={styles.container}>
                        {(loops[0] && loops[0].publisher.is_user_ready) && (
                            <View style={styles.top}>
                                <View style={styles.audio_cover}>
                                    <Image
                                        fadeDuration={0}
                                        style={styles.audio_cover}
                                        source={{
                                            uri: cdnUrl(loops[0].publisher.data.avatar),
                                        }}
                                    />
                                </View>
                                <View style={styles.audio_details}>
                                    <Text style={styles.audio_title}>orijinal ses</Text>
                                    <View style={styles.audio_author}>
                                        <Image
                                            fadeDuration={0}
                                            style={styles.audio_author_avatar}
                                            source={{
                                                uri: cdnUrl(loops[0].publisher.data.avatar),
                                            }}
                                        />
                                        <View style={styles.audio_author_details}>
                                            <Text style={styles.audio_author_name}>{loops[0].publisher.data.username}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.audio_count}>{count} loop bu sesi kullandı</Text>
                                </View>
                            </View>
                        )}

                        <View style={styles.audio_list_container}>
                            <MasonryList
                                data={loops}
                                numColumns={3}
                                renderItem={renderItem}
                                onEndReachedThreshold={0.1}
                            />
                        </View>
                    </View>
                )}
            </AppContainer>
        </>
    )
}
