import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootTabNavigator from './navigation/TabNavigator.js';
import AuthContextProvider from './context/AuthContext.js';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootTabNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}