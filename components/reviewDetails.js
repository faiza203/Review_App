import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{navigation.getParam("title")}</Text>
        <Text style={globalStyles.title}>{navigation.getParam("body")}</Text>
        <Text style={globalStyles.title}>{navigation.getParam("rating")}</Text>
      </Card>
    </View>
  );
}
