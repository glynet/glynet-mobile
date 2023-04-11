import React, { useEffect, useRef, useState } from "react"
import { View, ActivityIndicator, Dimensions, Platform, RefreshControl, FlatList } from "react-native"
import { getPosts } from "./PostListAPI"
import { useIsFocused, useRoute } from "@react-navigation/native"
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets"
import Post from "./Post/Post"
import { Post as PostType } from "../../../../glynet-api/source/models/post.model"
import getTheme from "../../constants/colors"
import { IOScrollView } from "react-native-intersection-observer"
import { useDispatch, useSelector } from "react-redux"
import { setPostIndex } from "../../store/preferences"

const theme = getTheme()

export default function PostList({ 
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

    const containerStyle = useRef({
        height: screenHeightWithoutInsets(120),
        width: Dimensions.get("window").width,
    })

    const refreshControl = () => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }

    const onScroll = ({ nativeEvent }: any) => {
        if (onFetching) return

        if (isCloseToBottom(nativeEvent)) {
            setCount(pageCount + 1)
        }
    }

    const onViewableItemsChanged = useRef(({ changed }: any) => {
        for (const element of changed) {
            if (element.isViewable) {
                dispatch(setPostIndex(element.index))
            }
        }
    })

    const viewableConfig = useRef({
        itemVisiblePercentThreshold: 55,
    })

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}: any) => {
        const paddingToBottom = 400;
    
        return (
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
        );
    };

    const renderItem = ({ item, index }: { item: PostType, index: number }) => {
        const isVisible = [index - 2, index - 1, index, index + 1, index + 2, index + 3].includes(state.postIndex);

        return <Post 
            entry={item} 
            index={index} 
            key={index}
            isVisible={isVisible} 
            navigation={navigation}
        />
    }

    useEffect(() => {
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
    }, [collect, params, pageCount])

    return (
        <View style={containerStyle.current}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={onRefreshing}
                        onRefresh={refreshControl}
                    />
                }
                ListHeaderComponent={HeaderComponent && HeaderComponent}
                viewabilityConfig={viewableConfig.current}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}