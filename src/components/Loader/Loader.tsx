
import React from "react";
import { View, ActivityIndicator, Platform } from "react-native";

function Loader({ style, theme, clearStyles, size }: any) {
  return (
    <View
      style={[
        style,
        !clearStyles && {
          padding: 30,
          alignItems: "center",
          justifyContent: "center",
        }
      ]}
    >
      <ActivityIndicator
        size={size ? size : Platform.OS === "ios" ? "small" : "large"}
        color={theme === "dark" ? "lightgray" : "gray"}
      />
    </View>
  )
}

export default Loader
