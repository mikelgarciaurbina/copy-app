import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  accept: {
    flex: 1
  },
  alergeno: {
    width: 20,
    height: 20
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 40
  },
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  cuantity: {
    fontSize: 30,
    fontWeight: "600",
    marginLeft: 20,
    marginRight: 20
  },
  data: {
    display: "flex",
    flexDirection: "column",
    width: 250
  },
  iconStar: {
    margin: 0
  },
  image: {
    height: 250,
    width: "100%"
  },
  info: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "600"
  },
  ingredients: {
    marginLeft: 40,
    marginRight: 50
  },
  input: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40
  },
  inputCuantity: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
    marginRight: 20
  },
  inputInfo: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 5
  },
  item: {
    borderBottomColor: "#BBB",
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "column",
    margin: 5,
    paddingBottom: 20,
    paddingTop: 20
  },
  itemImage: {
    borderRadius: 50,
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    width: 100
  },
  itemPrice: {
    fontWeight: "600",
    textAlign: "right"
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5
  },
  list: {
    marginBottom: 150,
    marginTop: -50
  },
  name: {
    color: "#FFF",
    fontSize: 18
  },
  nameContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    bottom: 50,
    display: "flex",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    position: "relative"
  },
  payButton: {
    marginLeft: 100
  },
  popup: {
    display: "flex",
    flexDirection: "column"
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 15,
    textAlign: "center"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  }
});

export default styles;
