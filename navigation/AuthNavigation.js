import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AuthenticatedStack from './AuthenticatedStack'
import UnauthenticatedStack from './UnauthenticatedStack'
import BottomTabNavigator from "./TabNavigator";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export default function AuthNavigation() {
    const {isLoggedIn} = useContext(AuthContext)
    return (
        <NavigationContainer>
            {isLoggedIn ? <AuthenticatedStack/> : <UnauthenticatedStack/> }
            {/* <BottomTabNavigator/> */}
        </NavigationContainer>
    )
}