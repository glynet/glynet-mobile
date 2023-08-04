import React from "react"
import { View, Text, FlatList } from "react-native"
import Avatar from "../../../components/Avatar/Avatar"
import cdnUrl from "../../../helpers/cdnUrl"
import { Fontisto } from "@expo/vector-icons";
import styles from "./Vibes.style";

function Vibes() {
  function renderItem({ item, index }: { item: any, index: number }) {
    return (
      <View style={styles.item_container}>
        <View style={styles.item_details}>
          <Text style={styles.item_author_name}>{item.username}</Text>
          <Text style={styles.item_description}>Spotify dinliyor</Text>
          <View style={styles.item_activity_details}>
            {item.type === "music" && <Fontisto name="music-note" size={13} color="rgb(70,70,70)" />}
            <Text style={styles.item_activity_text}>{item.activity_label}</Text>
          </View>
        </View>
        <View style={styles.item_image}>
          {item.type === "music" && (
            <>
              <Avatar
                src={cdnUrl("attachments/raki/p3.png")}
                size={65}
                radius={10}
              />
              <View style={styles.mini_user_avatar}>
                <Avatar
                  src={cdnUrl("attachments/raki/p3.png")}
                  size={25}
                  radius={100}
                />
              </View>
            </>
          )}
        </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        data={[
          { type: "music", activity_label: "Self Control", username: "Bella Thorne" },
          { type: "music", activity_label: "Rap God", username: "Eminem" },
          { type: "music", activity_label: "Self Control", username: "Bella Thorne" },
          { type: "music", activity_label: "Rap God", username: "Eminem" },
          { type: "music", activity_label: "Self Control", username: "Bella Thorne" },
          { type: "music", activity_label: "Rap God", username: "Eminem" },
        ]}
        renderItem={renderItem}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Vibes
