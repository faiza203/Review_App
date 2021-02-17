import React from "react";
import { View } from "react-native";
import CardStyle from "../styles/card";

export default function Card(props) {
  return (
    <View>
      <View style={CardStyle.card}>
        <View style={CardStyle.cardContent}>{props.children}</View>
      </View>
    </View>
  );
}
