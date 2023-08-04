import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
  header_button: {
    backgroundColor: "rgb(247,247,247)",
    borderRadius: 10,
    padding: 13,
    margin: 15,
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  header_button_title: {
    fontSize: 16,
    fontFamily: "Bold",
  },
  header_button_description: {
    fontSize: 14,
    fontFamily: "Medium",
  },
  header_button_icon: {
    fill: "grey",
    height: 24,
    width: 24,
  },

  container: {
    // borderBottomWidth: 1,
    // borderBottomColor: "rgb(230,230,230)"
  },
  group_title_container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingBottom: 0,
  },
  group_title: {
    fontFamily: "Bold",
    fontSize: 17,
    marginLeft: 7,
  },
  group_items: {

  },
  group_item: {
    position: "relative",
    borderRadius: 15,
    borderWidth: 1,
    padding: 13,
    width: Dimensions.get("window").width / 1.25,
    marginTop: 15,
    marginRight: 15,
    borderColor: "lightgray",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  item_top: {
    flexDirection: "row",
    alignItems: "center",
  },
  item_details: {
    marginLeft: 6,
  },
  item_title: {
    fontFamily: "Bold",
    fontSize: 16,
  },
  item_subtitle: {
    fontFamily: "Medium",
    fontSize: 14,
    color: "rgb(60,60,60)"
  },
  item_bottom: {
    marginTop: 6,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  item_description: {
    fontFamily: "Medium",
    fontSize: 15,
    color: "rgb(40,40,40)"
  },
  item_buttons: {
    marginTop: 13,
  },
  item_button: {
    padding: 11,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0,0,0)",
    // borderWidth: 1,
    // borderColor: "rgb(200,200,200)",
  },
  item_button_text: {
    fontFamily: "Bold",
    fontSize: 15,
    color: "#fff"
  },
  bottom_telescope: {
  }
})

export default styles
