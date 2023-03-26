import React from "react"
import { View, ScrollView } from "react-native"
import Shot from "./Spotlight/Spotlight"
import getTheme from "../../../constants/colors"
import styles from "./Spotlights.style"

const theme = getTheme()

export default function Spotlights() {
    return (
        <View style={styles.shots_container}>
            <ScrollView
                style={{
                    flexDirection: "row",
                    width: "100%",
                    padding: 12,
                    paddingLeft: 0,
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {Array(30)
                    .fill("")
                    .map((item, index) => {
                        return <Shot key={index} />
                    })}
            </ScrollView>
        </View>
    )
}