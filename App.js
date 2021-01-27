import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootTabNavigator from './navigation/TabNavigator.js';
import AuthContextProvider from './context/AuthContext.js';
import PlantContextProvider from './context/PlantContext.js';

export default function App() {
  return (
    <PlantContextProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <RootTabNavigator />
        </NavigationContainer>
      </AuthContextProvider>
    </PlantContextProvider>
  );
}