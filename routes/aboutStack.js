import { createStackNavigator } from "react-navigation-stack";
import About from "../components/about";

const screens = {
  About: {
    screen: About,
    navigationOptions : {
        title : "About US"
    }
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
