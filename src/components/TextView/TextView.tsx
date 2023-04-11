import React from "react"
import { Text } from "react-native"
import Hyperlink from "react-native-hyperlink"
import getTheme from "../../constants/colors"

const theme = getTheme()

const TextView = (props: any) => {
    const prepareText = (text: string, mentionHashtagPress: any, mentionHashtagColor: string) => {
        const result = []

        const mentList = props.children.match(/[@#][a-zA-Z0-9ğüşöçİĞÜŞÖÇ_.]+/gi)

        if (mentList === null) return [text]

        for (let i = 0; i < mentList.length; i++) {
            const ment = mentList[i]
            result.push(text.substring(0, text.indexOf(ment)))
            result.push(<Mention key={i} mentionHashtagColor={mentionHashtagColor} mentionHashtagPress={mentionHashtagPress} text={ment} />)
            text = text.substring(text.indexOf(ment) + ment.length, text.length)
        }

        if (text.length > 0) result.push(text)

        return result
    }

    return (
        <Hyperlink linkDefault={true} linkStyle={{
            color: props.mentionHashtagColor ? props.mentionHashtagColor : theme.THEME_COLOR,
            // fontWeight: "bold",
            // fontWeight: "bold"
        }}>
            <Text style={{ ...props.style }} onPress={props.onPress} numberOfLines={props.numberOfLines} ellipsizeMode={props.ellipsizeMode}>
                {prepareText(props.children, props.mentionHashtagPress, props.mentionHashtagColor)}
            </Text>
        </Hyperlink>
    )
}

const Mention = (props: any) => {
    return (
        <Text
            style={{
                color: props.mentionHashtagColor ? props.mentionHashtagColor : theme.THEME_COLOR,
                // fontWeight: "bold"
            }}
            onPress={() => {
                if (props.mentionHashtagPress) {
                    props.mentionHashtagPress(props.text)
                }
            }}
        >
            {props.text}
        </Text>
    )
}

export default TextView
