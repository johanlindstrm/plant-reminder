import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function ListItem({item}) {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.itemContainer} 
          onPress={() => {navigation.navigate('Details', {data: item})
          console.log('navigated: ', item)
          }}>
                
        <View style={styles.imgContainer}>
          <Image source={item.img} style={{ height: 100, width: 100 }} />
        </View>
                
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.reminderTime}</Text>
          <Text>{item.timeLeft}</Text>
        </View>
                
        <View style={styles.waterBtnContainer}>
          <TouchableOpacity style={styles.waterbutton} > 
            <Text style={styles.buttonText}>Water</Text>
          </TouchableOpacity>
        </View>
              
        </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    backgroundColor: '#d3d3d3',
    marginTop:0,
    marginBottom:5,
    width:'100%',
    height:120,
    flexDirection:'row',
    alignItems:'center'

  },
  imgContainer: {
    flex:0.5,
    // backgroundColor:'orange',
    marginLeft:20
  },

  textContainer: {
    flex:1,
    // backgroundColor:'red',
    height:100,
    paddingLeft:40,
    marginLeft:10,
    marginRight:10,
    justifyContent:'center',

  },
    
  waterBtnContainer: {
    // backgroundColor:'orange',
    alignItems:'flex-end',
    marginRight:20

  },

  buttonText: {
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    color:'#fff'
  },

  waterbutton: {
    height:40,
    width:80,
    backgroundColor:'#2b68ae',
    justifyContent:'center'
  },

  title: {
    fontSize: 15,
    fontWeight:'bold',
    marginBottom: 10
  },

});