import React, { memo, useRef } from "react"
import { Image, Pressable } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()

const Avatar = ({ src, size, radius, onPress, style }: { src: string; size?: number; radius?: number; onPress?: any, style?: any }) => {
    const fixedStyle = useRef({
        borderRadius: radius ? radius : 15,
        height: size ? size : 30,
        width: size ? size : 30,
        backgroundColor: "#e1e4e6",
    })

    return (
        <Pressable onPress={onPress} style={[fixedStyle.current, style && style]}>
            <Image
                fadeDuration={0}
                source={{
                    uri: src
                }}
                style={[fixedStyle.current, style && style]}
            />
        </Pressable>
    )
}

export default memo(Avatar)
