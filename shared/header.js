import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import HeaderStyle from "../styles/header";

export default function Header({navigation}) {
    const openMenu = () => {
        navigation.openDrawer();
    } 
  return (
    <View style={HeaderStyle.header}>
        <MaterialIcons name="menu" size={28} onPress={openMenu} style={HeaderStyle.icon} />
      <Text style={HeaderStyle.headerText}>💕GameZone</Text>
    </View>
  );
}
