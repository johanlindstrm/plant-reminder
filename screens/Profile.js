import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {

  const {setIsLoggedIn, signOut} = useContext(AuthContext)

  const logOut = () => {
    // navigation.navigate('Login')
    // setIsLoggedIn(false)
    signOut()
    console.log('sign out button pressed')
  }
  return (
      <View style={styles.container}>
        <Text>Hello Profile</Text>
        <Button title='Sign Out' onPress={logOut} />
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  });