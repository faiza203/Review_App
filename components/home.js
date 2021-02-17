import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../styles/global";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Faiza Fiaz", rating: 5, body: "student", key: "1" },
    { title: "Aliza", rating: 4, body: "student", key: "3" },
    { title: "Alina", rating: 1, body: "student", key: "4" },
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} transparent={false} animationType="slide">
        <View>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <Text>Hello from the Modal :)</Text>
        </View>
      </Modal>
      <MaterialIcons name="add" size={24} onPress={() => setModalOpen(true)} />
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
