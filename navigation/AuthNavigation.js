import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AuthenticatedStack from './AuthenticatedStack'
import UnauthenticatedStack from './UnauthenticatedStack'
import BottomTabNavigator from "./TabNavigator";


export default function AuthNavigation() {
    let isLoggedIn = false;
    return (
        <NavigationContainer>
            {isLoggedIn ? <AuthenticatedStack/> : <UnauthenticatedStack/> }
            {/* <BottomTabNavigator/> */}
        </NavigationContainer>
    )
}