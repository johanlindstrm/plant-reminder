import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AuthenticatedStack from './AuthenticatedStack'
import UnauthenticatedStack from './UnauthenticatedStack'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Splash from '../screens/Splash';


export default function AuthNavigation() {
    const {isLoading, user} = useContext(AuthContext)
    if (isLoading) {
        return <Splash />
    }
    return (
        <NavigationContainer>
            {user ? <AuthenticatedStack/> : <UnauthenticatedStack/> }
        </NavigationContainer>
    )
}