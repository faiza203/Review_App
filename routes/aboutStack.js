import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import About from "../components/about";
import Header from "../shared/header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation}/>,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#150e0e",
    headerStyle: {
      backgroundColor: "#eae9e9",
      borderBottomWidth: "0",
    },
  },
});

export default AboutStack;
