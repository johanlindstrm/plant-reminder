import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddPlant() {
  return (
      <View style={styles.container}>
        <Text>Hello Add Plant View</Text>
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