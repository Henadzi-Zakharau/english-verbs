import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigations/Navigator";
//import AppNavigator from "./navigations/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
