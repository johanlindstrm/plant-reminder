import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button} from 'react-native';


export default function Details({route}) {
  return (
    <View style={styles.container}>
      <View>

        <View style={styles.imgContainer} >
          <Image source={route.params.img} style={{width:200, height:200}} />
        </View>

        {/* <View style={styles.headerContainer} >
        </View> */}

        <View style={styles.textContainer}>
          <Text style={styles.titleText} > {route.params.title} </Text>

          <Text style={styles.text}> {route.params.reminderTime}</Text>
          <Text style={styles.text}> {route.params.timeLeft}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.waterbutton} onPress={() => {console.log('delete?')}}> 
          <Text style={styles.buttonText} >Water?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },

  imgContainer: {
    flex:2,
    justifyContent:'center',
    // backgroundColor:'yellow',
  },

  textContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'lightblue',

  },

  buttonContainer: {
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'#d3d3d3',
  },

  titleText: {
    fontSize:32,
    fontWeight:'700',
    marginBottom:20

  },

  text:{
    fontSize:18,
    fontWeight:'500',
    padding:5
  },

  waterbutton: {
    height:50,
    width:120,
    backgroundColor:'#2b68ae',
    justifyContent:'center',
    borderRadius:10,
  },

  buttonText: {
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    color:'#fff'
  },
  

});