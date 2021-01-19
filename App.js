import React from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Home from './screens/Home.js'

export default function App() {
  return (
    <View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
