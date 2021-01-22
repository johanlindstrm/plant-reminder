import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {List} from '../components/List.js';
import {AddItemButton} from '../components/AddItemButton.js'

export default function Home() {
  return (
      <View style={{height:'100%'}}>
        <List/>
        <AddItemButton />
      </View>
  );
}
