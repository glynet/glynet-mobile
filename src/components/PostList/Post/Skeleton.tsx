import React, { memo } from "react"
import { View, Dimensions } from "react-native"

import postStyles from "./Post.style"

import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

function PostSkeleton({ count }: any) {
  return (
    <MotiView
      transition={{ type: "timing" }}
      animate={{ backgroundColor: "#ffffff" }}
    >
      {Array(count).fill(1).map((item, index) => {
        return (
          <View style={[postStyles.container, { borderBottomWidth: 0 }]} key={index}>
            <View style={{...postStyles.padding_container, ...postStyles.author_container_parent}}>
              <View style={postStyles.author_container}>
                <Skeleton colorMode={"light"} radius="round" height={45} width={45} />
                <View style={postStyles.author_details}>
                  <View style={postStyles.author_name_container}>
                    <Skeleton colorMode={"light"} width={170} height={22} />
                  </View>
                </View>
              </View>
              <View style={postStyles.entry_options_container}>
                <Skeleton colorMode={"light"} radius={"round"} width={22} height={22} />
              </View>
            </View>
            <View style={{...postStyles.padding_container, ...postStyles.entry_text_container}}>
              <Skeleton colorMode={"light"} width={"70%"} height={22} />
              <View style={{ marginTop: 6 }}>
                <Skeleton colorMode={"light"} width={"40%"} height={22} />
              </View>
            </View>

            <View style={[
              postStyles.padding_container,
              postStyles.single_media_container
            ]}>
              <Skeleton colorMode={"light"} width={Dimensions.get("window").width - 31} height={Dimensions.get("window").width - 31} radius={20} />
            </View>

            <View style={[postStyles.button_container, { borderTopWidth: 0 }]}>
              <View style={postStyles.button}>
                <Skeleton colorMode={"light"} radius={"round"} width={22} height={22} />
              </View>
              <View style={postStyles.button}>
                <Skeleton colorMode={"light"} radius={"round"} width={22} height={22} />
              </View>
              <View style={postStyles.button}>
                <Skeleton colorMode={"light"} radius={"round"} width={22} height={22} />
              </View>
              <View style={postStyles.button}>
                <Skeleton colorMode={"light"} radius={"round"} width={22} height={22} />
              </View>
            </View>
          </View>
        )
      })}
    </MotiView>
  )
}

export default memo(PostSkeleton)
