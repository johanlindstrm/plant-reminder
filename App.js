import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator.js';
import AuthNavigation from './navigation/AuthNavigation'
export default function App() {
  return (
    <AuthNavigation/>
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
  );
}