import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Details from "../screens/Details";
import AddPlant from "../screens/AddPlant";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#2bae6f",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };
export const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Add Plant" component={AddPlant} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    );
};


