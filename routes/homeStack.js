import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../components/home";
import ReviewDetails from "../components/reviewDetails";
import Header from "../shared/header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation}/>,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#150e0e",
    headerStyle: {
      backgroundColor: "#eae9e9",
      borderBottomWidth: "0",
    },
  },
});

export default HomeStack;
