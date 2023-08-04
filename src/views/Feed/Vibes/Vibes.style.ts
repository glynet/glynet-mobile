import { StyleSheet, Dimensions } from "react-native"

import getTheme from "../../../constants/colors"

const theme = getTheme()

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: theme.BORDER_WIDTH,
    borderColor: theme.BORDER_COLOR,
  },

  item_container: {
    position: "relative",
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,

    minWidth: Dimensions.get("window").width / 1.85,

    marginVertical: 15,
    marginLeft: 15,

    borderColor: theme.BOX_BORDER_COLOR,

    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center"
  },

  item_details: {
    flexDirection: "column",
  },

  item_author_name: {
    fontFamily: "Bold",
    fontSize: 15
  },
  item_description: {
    fontFamily: "Medium",
    fontSize: 14
  },

  item_activity_details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  item_activity_text: {
    fontFamily: "Medium",
    fontSize: 14,
    marginLeft: 5,
    color: "rgb(70,70,70)"
  },

  item_image: {
    marginLeft: 15,
  },
  mini_user_avatar: {
    position: "absolute",
    bottom: -3,
    left: -3,
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 100,
  }
})

export default styles
