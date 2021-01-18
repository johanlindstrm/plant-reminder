import React from 'react';
import { StyleSheet, Text, View, LogBox} from 'react-native';
import Home from './screens/Home.js'


export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
