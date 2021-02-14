import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/home";
import About from "../components/about";
import ReviewDetails from "../components/reviewDetails";

const screens = {
  Home: {
    title : '❤Home',
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
  About: {
    screen: About,
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

export default createAppContainer(HomeStack);
