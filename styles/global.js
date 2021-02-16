import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    height: "100vh",
  },
  container: {
    padding: 24,
  },
  title: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    fontStyle: "oblique",
  },
  para: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
export const images = {
  rating: [
    require("../assets/rating-1.png"),
    require("../assets/rating-2.png"),
    require("../assets/rating-3.png"),
    require("../assets/rating-4.png"),
    require("../assets/rating-5.png"),
  ],
};

export default styles;
