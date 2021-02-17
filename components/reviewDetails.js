import React from "react";
import { View, Text, Image } from "react-native";
import globalStyles, { images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating") - 1;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{navigation.getParam("title")}</Text>
        <Text style={globalStyles.title}>{navigation.getParam("body")}</Text>
        <View style={globalStyles.rating}>
          <Text>
            Rating : {" "}
            <Text style={globalStyles.ratingHeart}>
              {images.rating[rating]}
            </Text>
          </Text>
        </View>
      </Card>
    </View>
  );
}
