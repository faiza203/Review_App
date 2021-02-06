import React from "react";
import { View, Text } from "react-native";

import globalStyles from "../styles/global";
export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home Screen</Text>
    </View>
  );
}
