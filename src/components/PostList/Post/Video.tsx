import React from "react"
import { Pressable } from "react-native"
import { Video } from "expo-av"
import cdnUrl from "../../../helpers/cdnUrl"
import { useSelector } from "react-redux"

const VideoPreview = ({ media, styles, isVisible, pressCallback }: any) => {
    return (
        <Pressable
            onPress={pressCallback}
            style={styles}
        >
            {isVisible && (
                <Video
                    // @ts-ignore
                    resizeMode={"cover"}
                    style={styles}
                    usePoster={true}
                    posterSource={media.thumbnail_url ? {
                        uri: cdnUrl(media.thumbnail_url)
                    } : undefined}
                    posterStyle={{
                        resizeMode: "cover"
                    }}
                    source={{
                        uri: cdnUrl(media.media_url),
                    }}
                    useNativeControls={false}
                    rate={1.0}
                    volume={1.0}
                    isLooping={true}
                    isMuted={true}
                    shouldPlay={true}
                />
            )}
        </Pressable>
    )
}

export default VideoPreview
