import React, { useEffect } from "react"
import { View, Text, StyleSheet, Pressable, Platform } from "react-native"
import { ArrowLeftIcon } from "./icons"
import { setBarColor } from "../store/preferences"
import { useDispatch } from "react-redux"
import * as NavigationBar from "expo-navigation-bar"

export function ImageViewHeader({ bgColor, callback }: { bgColor?: string, callback?: any }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof bgColor !== "undefined") {
      dispatch(setBarColor(bgColor))
    }
  }, [])

  return (
    <Pressable onPress={callback} style={style.button_container}>
      <ArrowLeftIcon style={style.button_icon} />
    </Pressable>
  )
}

const style = StyleSheet.create({
  button_container: {
    margin: 12,
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  button_icon: {
    fill: "#fff",
    height: 26,
    width: 26
  }
})
