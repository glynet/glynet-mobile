import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {

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

  results: {
    paddingTop: 10,
    paddingHorizontal: 15,
    height: "88.4%",
  },
  item_container: {
    borderRadius: 15,
    padding: 0,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  item_icon: {
    height: 45,
    width: 45,
    borderRadius: 30,
    backgroundColor: "rgb(250,250,250)",
    alignItems: "center",
    justifyContent: "center"
  },
item_details: {
    marginLeft: 10,
  },
  item_title: {
    fontSize: 16,
    fontFamily: "Bold"
  },
  item_subtitle: {
    fontSize: 14,
    fontFamily: "Medium"
  },

  alert_container: {
    alignItems: "center",
    justifyContent: "center",
  },

  loader: {
    width: "100%",
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  }
})

export default styles
