import React, { useRef } from "react"
import { Pressable, FlatList, View, Text, StyleSheet } from "react-native"
import AppContainer from "../../utils/screen"
import styles from "./Communities.style"
import { sliceText } from "../../utils/functions"
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets"
import Avatar from "../../components/Avatar/Avatar"
import cdnUrl from "../../helpers/cdnUrl"

export default function YourCommunities({ navigation }: any) {
  const height = useRef(screenHeightWithoutInsets(120)).current

  function renderItem({ item, index }: { item: any, index: number }) {
    return (
      <Pressable
        style={[styles.group_item, { width: "auto", marginHorizontal: 15 }]}
      >
        <View>
          <View style={styles.item_top}>
            <Avatar
              src={cdnUrl("attachments/raki/p3.png")}
              size={50}
              radius={100}
            />
            <View style={styles.item_details}>
              <Text style={styles.item_title}>{item.title}</Text>
              <Text style={styles.item_subtitle}>230k üye</Text>
            </View>
          </View>
          <View style={styles.item_bottom}>
            <Text style={styles.item_description}>{sliceText(item.description, 75)}</Text>
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <AppContainer hideHeader={false} headerTitle={"Katıldığın Topluluklar"} navigation={navigation}>
      <FlatList
        renderItem={renderItem}
        style={{ height }}
        data={[
          { title: "seria", description: "A community for fans of Italian Seria A football, discussing matches, players and news.", tags: ["seria", "football", "italian", "fanclub"] },
          { title: "atletico", description: "For supperters and followers of Spanish football club Atletico de Madrid", tags: ["spain", "madrid", "atletico", "football"] },
          { title: "realmadrid", description: "All things Real Madrid - news, highlights, discussion, and more.", tags: ["realmadrid", "uefa", "news", "2023", "arda"] },
          { title: "championsleague", description: "The UEFA Champions League", tags: ["uefa", "football", "champions", "league", "2023"] },
        ]}
      />
    </AppContainer>
  )
}
