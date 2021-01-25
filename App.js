import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator.js';
import AuthNavigation from './navigation/AuthNavigation'
import AuthContextProvider from './context/AuthContext.js';

export default function App() {
  return (
    <AuthContextProvider>
      <AuthNavigation/>
    </AuthContextProvider>
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
  );
}