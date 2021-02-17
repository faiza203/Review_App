import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: "1",
  },
  icon: {
    position: "absolute",
    left: '1%',
  },
});

export default HeaderStyle;
