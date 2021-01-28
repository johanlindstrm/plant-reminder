import React from 'react';
import { View } from 'react-native';
import PlantList from '../components/PlantList.js';
import { AddItemButton } from '../components/AddItemButton.js'

export default function Home() {
  return (
      <View style={{height:'100%'}}>
        <PlantList/>
        <AddItemButton />
      </View>
  );
}
