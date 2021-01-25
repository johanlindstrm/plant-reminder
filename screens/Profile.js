import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {

  const {setIsLoggedIn} = useContext(AuthContext)

  const signOut = () => {
    // navigation.navigate('Login')
    setIsLoggedIn(false)
  }
  return (
      <View style={styles.container}>
        <Text>Hello Profile</Text>
        <Button title='Sign Out' onPress={signOut} />
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