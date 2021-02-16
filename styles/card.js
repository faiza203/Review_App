import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: "1",
  },
});

export default CardStyle;
