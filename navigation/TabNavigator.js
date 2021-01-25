import React from 'react';
import { MainStackNavigator, ProfileStackNavigator, LogInStackNavigator, AuthStackNavigator } from './StackNavigator.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const tabBarOptionStyle = {
    labelStyle: {
        fontSize:16,
        margin:0,
        padding:0,
    },
    activeTintColor: 'green',
    inactiveTintColor: 'gray',
  };

export default function BottomTabNavigator() {

    return (
      <Tab.Navigator tabBarOptions={tabBarOptionStyle}>
        <Tab.Screen name="Home" component={MainStackNavigator} />
        {/* <Tab.Screen name="Profile" component={ProfileStackNavigator}/> */}
        <Tab.Screen name="Login" component={AuthStackNavigator} />
      </Tab.Navigator>

    );
  };