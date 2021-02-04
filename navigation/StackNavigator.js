import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import AuthenticatedStack from "./AuthenticatedStack";
import UnauthenticatedStack from "./UnauthenticatedStack";

import Home from "../screens/Home";
import Details from "../screens/Details";
import AddPlant from "../screens/AddPlant";
import Profile from "../screens/Profile";
import LogIn from "../screens/LogIn";
import Splash from "../screens/Splash";

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
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='Login' component={LogIn} />
      <Stack.Screen name='Add Plant' component={AddPlant} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  );
};

export const AuthStackNavigator = () => {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return <Splash />;
  }
  return user ? (
    <>
      <AuthenticatedStack />
    </>
  ) : (
    <>
      <UnauthenticatedStack />
    </>
  );
};
