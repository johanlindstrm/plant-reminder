import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem'
import { PlantContext } from '../context/PlantContext';

// const plantImg = require('../assets/potted-plant.png')

const renderItem = ({item}) => {
  return (
    <ListItem item={item} img={item.img} title={item.title} reminderTime={item.reminderTime} timeLeft={item.timeLeft} />
  )
}

export default function List() {
  const {plantList} = useContext(PlantContext)

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