import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import HeaderStyle from "../styles/header";

export default function Header() {
  return (
    <View style={HeaderStyle.header}>
      <Text style={HeaderStyle.headerText}>💕GameZone</Text>
    </View>
  );
}
