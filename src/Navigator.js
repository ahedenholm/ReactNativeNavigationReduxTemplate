import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './screens/Login';
import Screen01 from "./screens/Screen01";
import Screen02 from "./screens/Screen02";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Screen01: { screen: Screen01 },
  Screen02: { screen: Screen02 },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  });

export default createAppContainer(AppNavigator);