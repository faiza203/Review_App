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
  ratingHeart: {
    color: "red",
  },
});
export const images = {
  rating: ["❤", "❤❤", "❤❤❤", "❤❤❤❤", "❤❤❤❤❤"],
};

export default styles;
