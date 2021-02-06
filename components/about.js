import React from "react";
import { StyleSheet, View } from "react-native";

export default function About() {
  return <View style={styles.container}>About Screen</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
