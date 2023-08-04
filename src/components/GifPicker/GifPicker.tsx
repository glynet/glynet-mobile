import React, { useCallback, useEffect, useRef, useState } from "react"
import { TouchableOpacity, Pressable, View, Image, StyleSheet, TextInput } from "react-native"
import axios from "axios"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { FlatGrid } from "react-native-super-grid"
import { FlatList } from "react-native-gesture-handler"
import Alert from "../Alert/Alert"
import Searching from "../../utils/illustrations/Searching"
import getTheme from "../../constants/colors"

const giphyApiKey = "621PzjX6aKGcQK3Mnv8dPILOX2JMK2x7"

const theme = getTheme()

function GifPicker({ callback, modalRef }: any) {
  const [text, setText] = useState("")
  const [results, setResult] = useState([]) as any
  const [isFetched, setFetched] = useState(false)

  const selectGif = useCallback((item: any) => {
    modalRef.current?.close()

    setTimeout(() => {
      callback({
        id: item.id,
        slug: item.slug,
        original_url: item.images.original.url,
        downsized_url: item.images.downsized.url
      })
    }, 250)
  }, [])

  useEffect(() => {
    const baseUrl = "https://api.giphy.com/v1/gifs/"
    const type = text === undefined ? "trending" : text.length === 0 ? "trending" : "search"
    const query = text === undefined ? "" : text
    const limit = "32"

    console.log(baseUrl + type + "?q=" + query + "&limit=" + limit)

    axios.get(baseUrl + type + "?q=" + query + "&limit=" + limit + "&api_key=" + giphyApiKey)
      .then((response: any) => {
        const data = response.data

        if (data) {
          setResult(response.data.data)
          setFetched(true)
        }
      })
  }, [text])

  const renderItem = useCallback(({ item, index }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => selectGif(item)}
        style={styles.item_container}
        key={index}
      >
        <Image
          style={styles.item_image}
          source={{
            uri: item.images.downsized.url
          }}
        />
      </TouchableOpacity>
    )
  }, [])

  return (
    <View>
      <View style={styles.search_container}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={"Aramak için dokunun"}
          style={styles.search_input}
        />
        <View style={styles.search_icon}>
          <Ionicons name="ios-search-outline" size={24} color={"#292929"} />
        </View>
      </View>

      {results.length === 0 && (
        <View style={styles.alert_container}>
          <Alert
            image={<Searching themeColor={theme.THEME_COLOR} style={{ height: 120, width: 120 }} />}
            title={"Bu terimde bir şeyler bulamadım"}
            description={"Aradığın terimde GIF henüz Giphy üzerinde paylaşılmamış!"}
          />
        </View>
      )}

      <FlatList
        data={results}
        numColumns={2}
        renderItem={renderItem}
        style={styles.container}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    height: "88.4%",
  },
  item_container: {
    width: "100%",
    height: 130,
    backgroundColor: "#fff",

    flex: 1,
    padding: 5,
    flexDirection: "column",
  },
  item_image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    overlayColor: "#fff",
    backgroundColor: "rgb(230,230,230)"
  },

  alert_container: {
    marginTop: 30,
  },
  search_container: {
    backgroundColor: "rgb(240,240,240)",
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 15,

    margin: 10,
    marginBottom: 0,
    marginHorizontal: 15,
  },
  search_input: {
    fontSize: 14,
    width: "90%",
    fontFamily: "Medium"
  },
  search_icon: {
    position: "absolute",
    right: 15,
    marginLeft: 10,
    top: "50%",
  },
})

export default GifPicker
