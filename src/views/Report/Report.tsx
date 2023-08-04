import React, { useRef, useState } from "react"
import { Pressable, ScrollView, Text, View } from "react-native"
import styles from "./Report.style"
import AppContainer from "../../utils/screen"
import useRouteParams from "../../hooks/useRouteParams"
import { useRoute } from "@react-navigation/native"
import screenHeightWithoutInsets from "../../helpers/screenHeightWithoutInsets"
import { Octicons } from "@expo/vector-icons";
import ScaleButton from "../../components/ScaleButton/ScaleButton"
import { useToast } from "react-native-toast-notifications"
import { vibrate } from "../../helpers/vibration"

function Report({ navigation }: any) {
  const toast = useToast()
  const username = useRef(useRouteParams(useRoute(), "username")).current
  const height = useRef(screenHeightWithoutInsets(120)).current

  const [screen, setScreen] = useState<0|1|2>(0)

  function send(type: number) {
    toast.show("Bildiriminiz kaydedildi, gelişmelerden haberdar edeceğiz")
    setScreen(1)
    vibrate()
  }

  function feed() {
    navigation.navigate("Feed")
  }

  return (
    <AppContainer headerTitle={"Bildir"} hideTabs={false} navigation={navigation}>
      <ScrollView style={{ height: height }}>
        {screen === 0 && (
          <View>
            <View style={styles.top}>
              <Text style={styles.title}>Merhaba,</Text>
              <Text style={styles.top_description}>Bildirimlerinizi önemle inceliyor ve dikkate alıyoruz, topluluk kurallarını çiğneyen şeyleri bildirerek kendinize ve diğer kullanıcılara değer verdiğiniz için teşekkür ederiz, lütfen konuyla alakalı bir seçeneği seçin ayrıca tehlike teşkil eden bir durum söz konusuysa bildiriminize ek olarak acil durum hizmetleriyle iletişime geçmenizi önemle rica ediyoruz.</Text>
            </View>

            <View style={styles.buttons}>
              <Pressable style={styles.button} onPress={() => send(1)}>
                <Text style={styles.button_title}>Kimliğe göre hedef</Text>
                <Text style={styles.button_description}>Irkçı veya cinsiyetçi stereotipler, tacize teşvik etme veya nefret içeren içeriği paylaşmak.</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => send(2)}>
                <Text style={styles.button_title}>Taciz veya tehdit</Text>
                <Text style={styles.button_description}>Her türlü taciz, hakaret, özel bilgileri ifşa etme, özel bilgileri ifşa etmekle tehdit etme, şiddet içerikli eylem, şiddet içeren tehditler, şiddet içeren eylemleri kutlama.</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => send(3)}>
                <Text style={styles.button_title}>Spam</Text>
                <Text style={styles.button_description}>Art niyetli bağlantılar, etiketler, tekrar eden gönderiler, yorumlar veya yanıtlar.</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => send(4)}>
                <Text style={styles.button_title}>Hassas içerik</Text>
                <Text style={styles.button_description}>Rızaya dayalı olmayan çıplaklık ve cinsel eylemler, ürkütücülük veya şiddet.</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => send(5)}>
                <Text style={styles.button_title}>Taklit etme</Text>
                <Text style={styles.button_description}>Bir kişi veya kurumu taklit eden içerik.</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => send(6)}>
                <Text style={styles.button_title}>Diğer</Text>
              </Pressable>
            </View>
          </View>
        )}
        {screen === 1 && (
          <View style={[styles.center_content, { height: height }]}>
            <Octicons name="smiley" size={64} color="black" />
            <Text style={styles.smiley_title}>Bildiriminizi aldık!</Text>
            <Text style={styles.smiley_desc}>Her geçen gün topluğumuzun daha iyi bir yer olması için çalışıyoruz, bize destek verdiğiniz için teşekkürler</Text>
            <ScaleButton activeScale={0.9} contentContainerStyle={styles.feed_button} onPress={feed}>
              <Text style={styles.feed_button_text}>Akışa dön</Text>
            </ScaleButton>
          </View>
        )}
      </ScrollView>
    </AppContainer>
  )
}

export default Report
