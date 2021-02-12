import React from "react";
import { View, Text, Button } from "react-native";

import globalStyles from "../styles/global";
export default function Home({navigation}) {

  const pressHandler = () => {
   navigation.navigate("ReviewDetails")
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home Screen</Text>
      <Button title="Go To Review Details" onPress={pressHandler} />
    </View>
  );
}
