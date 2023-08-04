import React, { useCallback, useEffect, useState } from "react"
import { TextInput, View, Text } from "react-native"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { FlatList } from "react-native-gesture-handler"
import { MotiView } from "moti"
import { getSuggestions } from "./SearchAPI"
import Avatar from "../Avatar/Avatar"
import cdnUrl from "../../helpers/cdnUrl"
import ScaleButton from "../ScaleButton/ScaleButton"
import Alert from "../Alert/Alert"
import getTheme from "../../constants/colors"
import styles from "./Search.style"
import QuestionMark from "../../utils/handcrafts/QuestionMark"
import ChatText from "../../utils/handcrafts/ChatText"
import Loader from "../Loader/Loader"

const theme = getTheme()

function Search({ navigation, modalRef }: any) {
  const [text, setText] = useState("")
  const [results, setResults] = useState([])
  const [onFetching, setFetching] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (onFetching) return
      if (text.length === 0) return setResults([])

      setFetching(true)

      await getSuggestions(text, (response: any) => {
        setResults(response.data)
        setFetching(false)
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [text])

  const renderItem = useCallback(({ item, index }: any) => {
    return (
      <MotiView
        from={{ opacity: 0, translateY: 5, scale: 0.95 }}
        animate={{ opacity: 1, translateY: 0, scale: 1 }}
        transition={{
          type: "timing",
          duration: 150,
          delay: 300 + ((index + 1) * 30),
        }}
      >
        <ScaleButton
          onPress={() => {
            if (item.type === "profile") {
              navigation.push("Profile", {
                  name: item.subtitle,
              })
            } else {
              navigation.push("Location", {
                  location: item.title,
              })
            }

            setTimeout(() => modalRef.current?.close(), 10)
          }}
          activeScale={0.98}
          contentContainerStyle={styles.item_container}
        >
          <View style={styles.item_icon}>
            {item.type === "profile" && <Avatar
              src={cdnUrl(item.image)}
              size={45}
              radius={100}
            />}
            {item.type === "location" && <Ionicons name={"md-location-sharp"} size={24} color="rgb(70,70,70)" />}
            {item.type === "hashtag" && <FontAwesome name={"hashtag"} size={24} color={"rgb(70,70,70)"} />}
          </View>
          <View style={styles.item_details}>
            <Text style={styles.item_title}>{item.title}</Text>
            {item.type === "profile" && <Text style={styles.item_subtitle}>{item.subtitle}</Text>}
          </View>
        </ScaleButton>
      </MotiView>
    )
  }, [])

  return (
    <View style={styles.container}>
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

      <View>
        {onFetching && (
          <View style={styles.loader}>
            <Loader clearStyles={true} />
          </View>
        )}
        {(text.trim().length === 0 && results.length === 0 && !onFetching) && (
          <View style={styles.alert_container}>
            <Alert
              image={<ChatText />}
              title={"Aklından neler geçiyor?"}
              description={"\"Aklımdan uçak geçiyor\" gibi şeyler değil bir kişi ya da konu arayabilirsin"}
            />
          </View>
        )}
        {(text.trim().length !== 0 && results.length === 0 && !onFetching) && (
          <View style={styles.alert_container}>
            <Alert
              image={<QuestionMark />}
              title={"Hiçbir şey bulamadım"}
              description={"Çalışmadığım yerden soru geldi, başka şekilde aramayı deneyebilir misin?"}
            />
          </View>
        )}

        <FlatList
          style={styles.results}
          data={results}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default Search
