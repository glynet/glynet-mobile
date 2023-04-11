import React, { useRef } from "react"
import { Image, Pressable } from "react-native"
import getTheme from "../../constants/colors"

const theme = getTheme()

const Avatar = ({ src, size, radius, onPress }: { src: string; size?: number; radius?: number; onPress?: any }) => {
    const style = useRef({
        borderRadius: radius ? radius : 15,
        height: size ? size : 30,
        width: size ? size : 30,
        backgroundColor: theme.THEME_COLOR,
    })

    return (
        <Pressable onPress={onPress} style={style.current}>
            <Image
                source={{
                    uri: src
                }}
                style={style.current}
            />
        </Pressable>
    )
}

export default Avatar