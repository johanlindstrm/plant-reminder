import React,{useContext} from 'react';
import { View,Button } from 'react-native';
import PlantList from '../components/PlantList.js';
import { AddItemButton } from '../components/AddItemButton.js'
import {PlantContext} from '../context/PlantContext'


export default function Home() {
  const {getData} = useContext(PlantContext)

  return (
      <View style={{height:'100%'}}>
        <PlantList/>
        <AddItemButton />
        <Button title='press' onPress={() => console.log(getData())}/>

      </View>
  );
}
