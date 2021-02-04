import React from "react";
import { MainStackNavigator, AuthStackNavigator } from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const tabBarOptionStyle = {
  labelStyle: {
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  activeTintColor: "green",
  inactiveTintColor: "gray",
};

export default function RootTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ ...tabBarOptionStyle }}>
      <Tab.Screen name='Home' component={MainStackNavigator} />
      <Tab.Screen name='Profile' component={AuthStackNavigator} />
    </Tab.Navigator>
  );
}
