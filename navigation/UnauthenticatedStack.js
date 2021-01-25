import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from '../screens/LogIn'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#2bae6f",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

export default function UnauthenticatedStack () {
    return(
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Login" component={LogIn}/>
      </Stack.Navigator>
    );
  };