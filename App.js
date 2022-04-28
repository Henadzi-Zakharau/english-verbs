import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigations/Navigator";


export default function App(props) {

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
