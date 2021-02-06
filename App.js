import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return <View style={styles.container}>Review App</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
