import { Text, TouchableOpacity, View } from "react-native"
import React from "react"
import styles from "./Switch.style"
import { vibrate } from "../../helpers/vibration"

export default function Switch(props: any) {
    return (
        <View style={styles.switch_container}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.switch_item, !props.selected ? styles.switch_item_green : null]}
                onPress={() => {
                    props.selector(false)
                    vibrate()
                }}
            >
                <Text style={[styles.switch_text, !props.selected ? styles.switch_text_green : null]}>{props.greenText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.switch_item, props.selected ? styles.switch_item_red : null]}
                onPress={() => {
                    props.selector(true)
                    vibrate()
                }}
            >
                <Text style={[styles.switch_text, props.selected ? styles.switch_text_red : null]}>{props.redText}</Text>
            </TouchableOpacity>
        </View>
    )
}
