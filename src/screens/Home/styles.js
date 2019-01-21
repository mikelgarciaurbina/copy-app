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
    width: 270,
  },
  buttonLabel: {
    color: "#016359",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: "100%",
    width: "100%"
  },
  slogan: {
    color: "#888",
    fontSize: 30,
    marginBottom: 300,
    textAlign: "center"
  },
  title: {
    color: "#FFF",
    fontSize: 50,
    marginTop: 200
  }
});

export default styles;
