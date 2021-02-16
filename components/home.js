import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from '../shared/card'
import globalStyles from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Faiza Fiaz", rating: 5, body: "student", key: "1" },
    { title: "Aliza", rating: 4, body: "student", key: "3" },
    { title: "Alina", rating: 1, body: "student", key: "4" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ReviewDetails", item);
              }}
            >
              <Card>
                <Text style={globalStyles.title}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
