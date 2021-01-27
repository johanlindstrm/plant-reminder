import React, { useContext, useState } from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import ListItem from './ListItem'
import { PlantContext } from '../context/PlantContext';

const plantImg = require('../assets/potted-plant.png')

const renderItem = ({item}) => {
  return (
    <ListItem item={item}/>
  )
}

export default function List() {
  const {plantList} = useContext(PlantContext)

  const [plants, setPlants] = useState([
    {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
    {id:2, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
    {id:3, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
  ]);
    return (
      <FlatList
      data={plantList}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      />
    );

}

const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  });