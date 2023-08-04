import React, { memo, useCallback, useEffect, useRef, useState } from "react"
import { View, Dimensions, RefreshControl, FlatList } from "react-native"
import { getPosts } from "./PostListAPI"
import { useIsFocused, useRoute } from "@react-navigation/native"
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets"
import Post from "./Post/Post"
import { Post as PostType } from "../../../../glynet-api/source/models/post.model"
import getTheme from "../../constants/colors"
import { useDispatch, useSelector } from "react-redux"
import { setPostIndex } from "../../store/preferences"

import PostSkeleton from "./Post/Skeleton"
import Alert from "../Alert/Alert"
import Ghost from "../../utils/handcrafts/Ghost"
import Loader from "../Loader/Loader"

function PostList({
    collect,
    params,
    navigation,
    HeaderComponent
}: {
    collect: string;
    params?: any;
    navigation: any,
    HeaderComponent?: any,
}) {
    const state = useSelector((state: any) => state.preferences) as any
    const dispatch = useDispatch()

    const route = useRoute()
    const isFocused = useIsFocused()

    const [posts, setPosts] = useState<PostType[]>([])
    const [onFetching, setFetching] = useState<boolean>(false)
    const [isFetched, setFetched] = useState<boolean>(false)
    const [code, setCode] = useState<number>(0)
    const [pageCount, setCount] = useState<number>(0)
    const [onRefreshing, setRefreshing] = useState(false)

    const [fastNavigationShow, setFastNavShow] = useState(false)

    const containerStyle = useRef({
        height: screenHeightWithoutInsets(120),
        width: Dimensions.get("window").width,
    })

    const refreshControl = useCallback(() => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }, [])

    const onViewableItemsChanged = useRef(({ changed }: any) => {
        for (const element of changed) {
            if (element.isViewable) {
                dispatch(setPostIndex(element.index))
            }
        }
    })

    const viewableConfig = useRef({
        itemVisiblePercentThreshold: 35,
    })

    const renderItem = useCallback(({ item, index }: { item: PostType, index: number }) => {
        const isVisible = [index - 2, index - 1, index, index + 1, index + 2, index + 3, index + 4].includes(state.postIndex)

        return <Post
            entry={item}
            index={index}
            key={index}
            isVisible={isVisible}
            navigation={navigation}
        />
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setFastNavShow(true)

            if (!navigation.isFocused()) return
            if (onFetching) return

            setFetched(false)
            setFetching(true)

            let customParams = params
            if (collect === "profile") customParams = `username=${(route.params as any).name}`

            getPosts(collect, pageCount, customParams, (response: any) => {
                const data = response.data

                setFetched(true)
                setCode(data?.error_code)
                setFetching(false)

                if (data.is_entries_available) {
                    setPosts([...posts, ...data.timeline])
                }
            })
        }, 250)
    }, [collect, params, pageCount])

    return (
        <View style={containerStyle.current}>
            {!fastNavigationShow && (
                <View style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 15,
                    marginBottom: 12,
                    padding: 30,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Loader clearStyles={true} />
                </View>
            )}
            {fastNavigationShow && (
                <FlatList
                    data={[]}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={onRefreshing}
                            onRefresh={refreshControl}
                        />
                    }
                    ListHeaderComponent={HeaderComponent && HeaderComponent}
                    ListFooterComponent={
                        isFetched ?
                            posts.length === 0 ? (
                                <Alert
                                    image={<Ghost />}
                                    title={"Çekirge sesleri"}
                                    description={"Ne yazık ki şimdilik burada gösterebileceğimiz herhangi bir paylaşım yok"}
                                />
                            ) : null :
                            <PostSkeleton count={2} />
                    }
                    viewabilityConfig={viewableConfig.current}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                />
            )}
        </View>
    )
}

export default memo(PostList)
