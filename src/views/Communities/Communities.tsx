import React, { useRef } from "react"
import AppContainer from "../../utils/screen"
import { StyleSheet, View, Text, Dimensions, FlatList, ScrollView } from "react-native"
import { Feather } from '@expo/vector-icons';
import Avatar from "../../components/Avatar/Avatar";
import cdnUrl from "../../helpers/cdnUrl";
import ScaleButton from "../../components/ScaleButton/ScaleButton";
import { sliceText } from "../../utils/functions";
import { ArrowRightIosIcon } from "../../utils/icons";
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets";
import { Octicons } from '@expo/vector-icons';
import Alert from "../../components/Alert/Alert";
import styles from "./Communities.style"

function Category({ icon, title, data }: any) {
  function renderItem({ item, index }: { item: any, index: number }) {
    return (
      <View style={[styles.group_item, index === 0 && { marginLeft: 15 }]}>
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

        <View style={styles.item_buttons}>
            <ScaleButton activeScale={0.9} contentContainerStyle={styles.item_button}>
              <Text style={styles.item_button_text}>Katıl</Text>
            </ScaleButton>
          </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.group_title_container}>
        {icon}
        <Text style={styles.group_title}>{title}</Text>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        style={styles.group_items}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default function Communities({ navigation }: any) {
  const height = useRef(screenHeightWithoutInsets(120)).current

  function HeaderButton() {
    return (
      <ScaleButton
        onPress={() => navigation.navigate("YourCommunities")}
        activeScale={0.95}
        contentContainerStyle={styles.header_button}
      >
        <View>
          <Text style={styles.header_button_title}>Katıldıkların</Text>
          <Text style={styles.header_button_description}>Katıldığın topluluklara göz at</Text>
        </View>
        <View>
          <ArrowRightIosIcon style={styles.header_button_icon} />
        </View>
      </ScaleButton>
    )
  }

  return (
    <AppContainer hideHeader={false} headerTitle={"Topluluklar"} navigation={navigation}>
      <ScrollView style={{ height: height }}>
        <HeaderButton />
        <Category
          icon={<Feather name="trending-up" size={24} color="black" />}
          title={"Gündem"}
          data={[
            { title: "seria", description: "A community for fans of Italian Seria A football, discussing matches, players and news.", tags: ["seria", "football", "italian", "fanclub"] },
            { title: "atletico", description: "For supperters and followers of Spanish football club Atletico de Madrid", tags: ["spain", "madrid", "atletico", "football"] },
            { title: "realmadrid", description: "All things Real Madrid - news, highlights, discussion, and more.", tags: ["realmadrid", "uefa", "news", "2023", "arda"] },
            { title: "championsleague", description: "The UEFA Champions League", tags: ["uefa", "football", "champions", "league", "2023"] },
          ]}
        />
        <Category
          icon={<Feather name="award" size={24} color="black" />}
          title={"En yüksek skor"}
          data={[
            { title: "seria", description: "A community for fans of Italian Seria A football, discussing matches, players and news.", tags: ["seria", "football", "italian", "fanclub"] },
            { title: "atletico", description: "For supperters and followers of Spanish football club Atletico de Madrid", tags: ["spain", "madrid", "atletico", "football"] },
            { title: "realmadrid", description: "All things Real Madrid - news, highlights, discussion, and more.", tags: ["realmadrid", "uefa", "news", "2023", "arda"] },
            { title: "championsleague", description: "The UEFA Champions League", tags: ["uefa", "football", "champions", "league", "2023"] },
          ]}
        />
        <Category
          icon={<Feather name="feather" size={24} color="black" />}
          title={"Editörün seçtikleri"}
          data={[
            { title: "seria", description: "A community for fans of Italian Seria A football, discussing matches, players and news.", tags: ["seria", "football", "italian", "fanclub"] },
            { title: "atletico", description: "For supperters and followers of Spanish football club Atletico de Madrid", tags: ["spain", "madrid", "atletico", "football"] },
            { title: "realmadrid", description: "All things Real Madrid - news, highlights, discussion, and more.", tags: ["realmadrid", "uefa", "news", "2023", "arda"] },
            { title: "championsleague", description: "The UEFA Champions League", tags: ["uefa", "football", "champions", "league", "2023"] },
          ]}
        />

        <View style={styles.bottom_telescope}>
          <Alert
            image={<Octicons name="telescope" size={46} color="black" />}
            title={"Başka topluluklar mı arıyorsun?"}
            description={"Bulmak istediğin topluluğu arama kısmından kolayca bulabilirsin"}
          />
        </View>
      </ScrollView>
    </AppContainer>
  )
}
