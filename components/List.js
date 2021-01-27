import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ListItem from './ListItem'

const plantImg = require('../assets/potted-plant.png')

const plants = [
    {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
    {id:2, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
    {id:3, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
]

const renderItem = ({item, index, navigation}) => {
  return (
    <ListItem item={item} index={index} navigation={navigation} />
  )
}

export default function List() {

    return (
      <FlatList
      data={plants}
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