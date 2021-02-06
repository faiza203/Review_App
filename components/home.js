import React from "react";
import { StyleSheet, View } from "react-native";

export default function Home() {
  return <View style={styles.container}>Home Screen</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
