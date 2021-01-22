import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';

const plantImg = require('../assets/favicon.png')

const DummyPlantData = [
    {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
    {id:2, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
    {id:3, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
]
 
export const List = () => {
  const navigation = useNavigation()
    return (
          <FlatList
            data={DummyPlantData}
            renderItem={({ item }) => {
              return (
                <View style={{...styles.container, backgroundColor:'yellow'}}>
                  <TouchableOpacity style={{ backgroundColor: 'gray', marginTop:10 ,width:'100%', height:120, flexDirection:'row', alignItems:'center'}} onPress={() => navigation.navigate('Details')}>
                    
                    <View style={{flex:0.5, backgroundColor:'orange', marginLeft:20}}>
                      <Image source={item.img} style={{ height: 100, width: 100 }} />
                    </View>
                    
                    <View style={{flex:1, backgroundColor:'red', height:100, marginLeft:10, marginRight:10, justifyContent:'center'}}>
                      <Text style={{justifyContent:''}}>{item.title}</Text>
                      <Text>{item.reminderTime}</Text>
                      <Text>{item.timeLeft}</Text>
                    </View>
                    
                    <View style={{backgroundColor:'orange', alignItems:'flex-end', marginRight:20}}>
                      <TouchableOpacity style={{height:40, width:80, backgroundColor:'#529FF3', justifyContent:'center'}} > 
                        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>Water</Text>
                      </TouchableOpacity>
                    </View>
                  
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={item => item.id.toString()}

          />
      )
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  });