
import React, { memo, useEffect, useState } from "react"
import { Image, Dimensions, Pressable, View } from "react-native"
import cdnUrl from "../../../helpers/cdnUrl"
import Loader from "../../Loader/Loader"

const ImagePreview = ({ media, styles, pressCallback, isVisible, InnerComponent, autoHeight }: any) => {
    const [height, setHeight] = useState(Dimensions.get("window").width - 30)

    useEffect(() => {
        const deviceWidth = Dimensions.get("window").width

        Image.getSize(cdnUrl(media.media_url), (imgWidth, imgHeight) => {
            setHeight(imgHeight * (deviceWidth / imgWidth))
        });
    }, [])

    return (
        <Pressable
            onPress={pressCallback}
            style={[styles, autoHeight && { height: height }]}
        >
            {isVisible && (
                <Image
                    fadeDuration={0}
                    style={[styles, autoHeight && { height: height }, { position: "absolute", zIndex: 7 }]}
                    source={{
                        uri: cdnUrl(media.media_url)
                    }}
                />
            )}
            <View style={{ alignItems: "center", justifyContent: "center", height: "100%", position: "absolute", width: "100%", zIndex: 5 }}>
                <Loader clearStyles={true} size={"small"} />
            </View>
            {InnerComponent && <InnerComponent />}
        </Pressable>
    )
}

export default memo(ImagePreview)
