import React from "react";
import {View, Text} from "react-native";
import styles from "./Alert.style";

export type AlertComponent = {
    image?: any;
    title: string;
    description: string;
}

export default function Alert(props: AlertComponent) {
    return (
        <View style={styles.container}>
            {props.image && props.image}
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    )
}
