import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#03dac4",
    borderRadius: 100,
    display: "flex",
    elevation: 6,
    height: 70,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowOpacity: 0.24,
    width: 270
  },
  buttonLabel: {
    color: "#016359",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase"
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  image: {
    height: 250,
    width: "100%",
    margin: 10
  },
  total: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 100,
    marginTop: 100,
    textAlign: "center"
  }
});

export default styles;
