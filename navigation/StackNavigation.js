import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor:'#2bae6f'
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

