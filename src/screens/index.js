import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ConfirmScreen from "./Confirm";
import HomeScreen from "./Home";
import MenuScreen from "./Menu";
import PayScreen from "./Pay";
import ReaderScreen from "./Reader";

const AppNavigator = createStackNavigator(
  {
    Confirm: {
      screen: ConfirmScreen
    },
    Home: {
      screen: HomeScreen
    },
    Menu: {
      screen: MenuScreen
    },
    Pay: {
      screen: PayScreen
    },
    Reader: {
      screen: ReaderScreen
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);
