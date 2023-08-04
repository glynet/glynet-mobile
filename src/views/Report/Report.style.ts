import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  top: {
    padding: 15,
    paddingBottom: 0,
  },
  title: {
    fontSize: 17,
    fontFamily: "Bold"
  },
  top_description: {
    fontSize: 15,
    fontFamily: "Medium"
  },

  buttons: {
    flexDirection: "column",
    borderTopColor: "lightgray",
    paddingTop: 0,
    padding: 15,
  },
  button: {
    borderColor: "lightgray",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
  },
  button_title: {
    fontSize: 16,
    fontFamily: "Bold"
  },
  button_description: {
    fontSize: 15,
    fontFamily: "Medium"
  },

  center_content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  smiley_title: {
    fontSize: 23,
    fontFamily: "Bold",
    marginTop: 15,
  },
  smiley_desc: {
    fontSize: 16,
    fontFamily: "Medium",
    textAlign: "center"
  },

  feed_button: {
    borderColor: "rgb(220,220,220)",
    borderWidth: 1,
    backgroundColor: "rgb(249,249,249)",
    width: "90%",
    marginTop: 25,
    borderRadius: 10,
    padding: 13,
  },
  feed_button_text: {
    textAlign: "center",
    fontFamily: "Bold",
    fontSize: 15,
    marginTop: -3,
    color: "rgb(40,40,40)"
  }
})

export default styles
