import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import Dictionary from '../components/Dictionary';
// import Library from '../components/Library';
//import Navigator from './Navigator';




const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Dictionary" component={Dictionary} />
        <Drawer.Screen name="Library" component={Library} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}