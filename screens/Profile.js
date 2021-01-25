import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {

  const signOut = () => {
    navigation.navigate('Login')
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