import React from 'react';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {

  const [numPlants, setNumPlants] = useState(5)
  const [numWatered, setNumWatered] = useState(22)

  const {setIsLoggedIn, signOut, user} = useContext(AuthContext)

  const logOut = () => {
    // navigation.navigate('Login')
    // setIsLoggedIn(false)
    signOut()
    console.log('sign out button pressed')
  }
  return (
      <View style={styles.container}>

        <View style={styles.StatsContainer}>

        <View style={{ backgroundColor:"#2bae6f", width:200, height:200, justifyContent:'center', margin:20, borderRadius:100}}>
            <Text style={{textAlign:'center', fontWeight:'500', fontSize:22}}>Plants Alive: {'\n'}<Text style={{textAlign:'center', fontWeight:'300', fontSize:22}}>{numPlants}</Text> </Text>
          </View>

          <View style={{ backgroundColor:'#2b68ae', width:200, height:200, justifyContent:'center', margin:20, borderRadius:100}}>
            <Text style={{textAlign:'center', fontWeight:'500', fontSize:22}}>Times Watered: {'\n'}<Text style={{textAlign:'center', fontWeight:'300', fontSize:22}}>{numWatered}</Text> </Text>
          </View>
        </View>

        <View style={{flex:1, justifyContent:'flex-end'}}>
          <Button title='Sign Out' onPress={logOut} />
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
      // backgroundColor:'yellow',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    StatsContainer: {
      width:'100%',
      flex:8,
      // backgroundColor:'green',
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection:'row'
      },
  });