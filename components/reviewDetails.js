import React from "react";
import { View, Text, Button } from "react-native";
import globalStyles from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{navigation.getParam("title")}</Text>
      <Text style={globalStyles.title}>{navigation.getParam("body")}</Text>
      <Text style={globalStyles.title}>{navigation.getParam("rating")}</Text>
      <Button title="Go Back" onPress={pressHandler} />
    </View>
  );
}
