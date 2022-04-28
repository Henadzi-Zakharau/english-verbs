import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Future from '../screens/Future'
import Present from "../screens/Present";
import Past from "../screens/Past";
import Dictionary from "../components/Dictionary";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Past"
        component={Past}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 44, height: 34 }}
                source={require("../assets/past.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Present"
        component={Present}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 46, height: 38 }}
                source={require("../assets/present.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Future"
        component={Future}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 44, height: 34 }}
                source={require("../assets/future.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Dictionary"
        component={Dictionary}
        options={{
          tabBarIcon: () => {
            return (
            <Ionicons name="library" size={26} color='black' />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
