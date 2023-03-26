import React, { useEffect, useRef, useState } from "react"
import { View, ActivityIndicator } from "react-native"
import ScreenContainer from "../../utils/screen"
import Loop from "./Loop/Loop"
import { getLoops } from "./LoopsAPI"
import { FlatList } from "react-native-gesture-handler"
import styles from "./Loops.style"
import { useDispatch } from "react-redux"
import { setLoopId } from "../../store/preferences"
import { useRoute } from "@react-navigation/native"
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets"

import { Post } from "../../../../glynet-api/source/models/post.model"

export default function Loops({ navigation }: any) {
    const dispatch = useDispatch()

    const route = useRoute() as any
    const pageHeight = screenHeightWithoutInsets(60)

    const collect_type = route.params?.collect === undefined ? "explore" : route.params.collect
    const loop_id = route.params?.loop_id === undefined ? "" : route.params.loop_id

    const [loops, setLoops] = useState<Post[]>([])
    const [isLoading, setLoading] = useState<boolean>(false)
    const [isFetched, setFetched] = useState<boolean>(false)
    const [moreData, setMoreData] = useState<boolean>(true)
    const [pageCount, setCount] = useState<number>(0)

    const onViewableItemsChanged = useRef(({ changed }: any) => {
        for (const element of changed) {
            if (element.isViewable) {
                dispatch(setLoopId(element.index))
            }
        }
    })

    const viewableConfig = useRef({
        itemVisiblePercentThreshold: 55,
    })

    const flatListStyle = useRef({
        height: pageHeight,
    })

    const onReachToEnd = ({ distanceFromEnd }: any) => {
        if (loop_id === "") return

        if (distanceFromEnd < 0) return

        if (!moreData) return

        if (!isLoading) setCount(pageCount + 1)
    }

    const renderLoop = ({ item, index }: any) => {
        return <Loop item={item} navigation={navigation} index={index} />
    }

    useEffect(() => {
        setLoading(true)

        getLoops(collect_type, pageCount, loop_id, (response: any) => {
            setLoading(false)

            if (response.data.is_entries_available) {
                setFetched(true)

                if (response.data.timeline.length !== 0) {
                    setLoops([...loops, ...response.data.timeline])
                } else {
                    setMoreData(false)
                }
            }
        })
    }, [pageCount])

    return (
        <ScreenContainer disableScrollView={true} hideHeader={true} navigation={navigation}>
            {!isFetched && loops.length === 0 && (
                <View style={{ ...styles.loader, height: pageHeight }}>
                    <ActivityIndicator size={"large"} color={"grey"} />
                </View>
            )}

            {loops.length !== 0 && (
                <FlatList
                    data={loops}
                    style={flatListStyle.current}
                    pagingEnabled
                    initialNumToRender={15}
                    removeClippedSubviews={undefined}
                    decelerationRate={0.9}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    viewabilityConfig={viewableConfig.current}
                    onEndReached={onReachToEnd}
                    renderItem={renderLoop}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                />
            )}
        </ScreenContainer>
    )
}

