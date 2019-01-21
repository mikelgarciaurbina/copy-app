import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  area: {
    display: "flex",
    height: 320,
    width: 320,
  },
  background: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.75)",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  body: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default styles;
