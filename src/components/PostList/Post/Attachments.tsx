
import React, { memo, useState } from "react"
import { Pressable, View, Text } from "react-native"
import cdnUrl from "../../../helpers/cdnUrl"
import ImagePreview from "./Image"
import VideoPreview from "./Video"
import styles from "./Post.style"
import ImageView from "react-native-image-viewing"
import { ArrowLeftIcon } from "../../../utils/icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Post as PostType } from "../../../../../glynet-api/source/models/post.model"

const Attachments = ({ entry, navigation, isVisible }: { entry: PostType, navigation: any, isVisible: boolean }) => {
    const [viewerIndex, setViewerIndex] = useState(0)
    const [showViewer, setViewer] = useState(false)

    const insets = useSafeAreaInsets()
    
    return (<>
        {entry.media_attachments.length !== 0 && (
            <ImageView
                images={entry.media_attachments.map((media) => ({ uri: cdnUrl(media.media_url) }))}
                imageIndex={viewerIndex}
                visible={showViewer}
                swipeToCloseEnabled={true}
                doubleTapToZoomEnabled={true}
                animationType={"slide"}
                onRequestClose={() => {
                    setViewer(false)
                    setViewerIndex(0)
                }}
                HeaderComponent={() => {
                    return (
                        <Pressable
                            onPress={() => {
                                setViewer(false)
                                setViewerIndex(0)
                            }}
                            style={{
                                top: insets.top, 
                                width: 56, 
                                height: 56, 
                                alignItems: "center", 
                                justifyContent: "center",
                            }}
                        >
                            <ArrowLeftIcon style={{ fill: "hsla(0,0%,100%,0.85)", height: 26, width: 26, }} />
                        </Pressable>
                    )
                }}
            />
        )}

        <View style={[
            styles.padding_container,
            entry.media_attachments.length === 1 ? styles.single_media_container : styles.double_media_container,
            entry.text_range[1] === 0 && { paddingTop: 0 }
        ]}>
            {(entry.media_attachments.length === 1) && (
                <>
                    {entry.media_attachments[0].media_type === "video" && (
                        <VideoPreview
                            media={entry.media_attachments[0]}
                            styles={styles.single_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                navigation.push("Loops", {
                                    collect: "post",
                                    loop_id: entry.id,
                                })
                            }} 
                        />
                    )}

                    {entry.media_attachments[0].media_type === "image" && (
                        <ImagePreview
                            media={entry.media_attachments[0]}
                            styles={styles.single_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                setViewerIndex(0)
                                setViewer(true)
                            }}
                            autoHeight={true}
                        />  
                    )}
                </>
            )}

            {(entry.media_attachments.length === 2) && (
                <>
                    {entry.media_attachments[0].media_type === "video" && (
                        <VideoPreview
                            media={entry.media_attachments[0]}
                            styles={styles.double_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                navigation.push("Loops", {
                                    collect: "post",
                                    loop_id: entry.id,
                                })
                            }} 
                        />
                    )}
                    {entry.media_attachments[0].media_type === "image" && (
                        <ImagePreview
                            media={entry.media_attachments[0]}
                            styles={styles.double_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                setViewerIndex(0)
                                setViewer(true)
                            }} 
                        />  
                    )}

                    {entry.media_attachments[1].media_type === "video" && (
                        <VideoPreview
                            media={entry.media_attachments[1]}
                            styles={styles.double_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                navigation.push("Loops", {
                                    collect: "post",
                                    loop_id: entry.id,
                                })
                            }} 
                        />
                    )}
                    {entry.media_attachments[1].media_type === "image" && (
                        <ImagePreview
                            media={entry.media_attachments[1]}
                            styles={styles.double_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                setViewerIndex(1)
                                setViewer(true)
                            }} 
                        />  
                    )}
                </>
            )}

            {(entry.media_attachments.length >= 3) && (
                <>
                    {entry.media_attachments[0].media_type === "video" && (
                        <VideoPreview
                            media={entry.media_attachments[0]}
                            styles={styles.single_long_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                navigation.push("Loops", {
                                    collect: "post",
                                    loop_id: entry.id,
                                })
                            }} 
                        />
                    )}
                    {entry.media_attachments[0].media_type === "image" && (
                        <ImagePreview
                            media={entry.media_attachments[0]}
                            styles={styles.single_long_attachment}
                            isVisible={isVisible}
                            pressCallback={() => {
                                setViewerIndex(0)
                                setViewer(true)
                            }} 
                        />  
                    )}

                    <View style={styles.vertical_double_media_container}>
                        {entry.media_attachments[1].media_type === "video" && (
                            <VideoPreview
                                media={entry.media_attachments[1]}
                                styles={styles.double_attachment}
                                isVisible={isVisible}
                                pressCallback={() => {
                                    navigation.push("Loops", {
                                        collect: "post",
                                        loop_id: entry.id,
                                    })
                                }} 
                            />
                        )}
                        {entry.media_attachments[1].media_type === "image" && (
                            <ImagePreview
                                media={entry.media_attachments[1]}
                                styles={styles.double_attachment}
                                isVisible={isVisible}
                                pressCallback={() => {
                                    setViewerIndex(1)
                                    setViewer(true)
                                }} 
                            />  
                        )}

                        {entry.media_attachments[2].media_type === "video" && (
                            <VideoPreview
                                media={entry.media_attachments[2]}
                                styles={styles.double_attachment}
                                isVisible={isVisible}
                                pressCallback={() => {
                                    navigation.push("Loops", {
                                        collect: "post",
                                        loop_id: entry.id,
                                    })
                                }}
                                InnerComponent={() => {
                                    return entry.media_attachments.length !== 3 && (
                                        <View style={styles.double_attachment_more}>
                                            <Text style={styles.double_attachment_more_text}>+{entry.media_attachments.length - 3}</Text>
                                        </View>
                                    )
                                }}
                            />
                        )}
                        {entry.media_attachments[2].media_type === "image" && (
                            <ImagePreview
                                media={entry.media_attachments[2]}
                                styles={styles.double_attachment}
                                isVisible={isVisible}
                                pressCallback={() => {
                                    setViewerIndex(2)
                                    setViewer(true)
                                }}
                                InnerComponent={() => {
                                    return entry.media_attachments.length !== 3 && (
                                        <View style={styles.double_attachment_more}>
                                            <Text style={styles.double_attachment_more_text}>+{entry.media_attachments.length - 3}</Text>
                                        </View>
                                    )
                                }}
                            />  
                        )}
                    </View>
                </>
            )}
        </View>
    </>)
}

export default memo(Attachments)