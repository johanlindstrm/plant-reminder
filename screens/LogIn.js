import React from 'react';
import { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setIsLoggedIn, logIn} = useContext(AuthContext)

    const submit = () => {
        // navigation.navigate('Profile')
        // setIsLoggedIn(true)
        // console.log('submit pressed')
        console.log('submitted log in');
        logIn(email, password);
    }
  return (
      <View style={styles.container}>
        <Text style={styles.testHeader}>Hello Login</Text>
        <View style={{width:'50%', alignItems:'flex-start'}}>
            <TextInput placeholder='Enter email' 
                value={email} 
                onChangeText={setEmail}
                style={styles.inputStyle}
            />
            <TextInput placeholder='Enter password' 
                value={password} 
                onChangeText={setPassword}
                style={styles.inputStyle}
            />
            <Button title='Submit' onPress={submit} />
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    
    inputStyle: {
    padding:10,
    backgroundColor:'#DCDCDC',
    marginBottom:10,
    width:200,
    borderRadius:5
    },

    testHeader: {
    color:'#2bae6f',
    fontSize:28,
    fontWeight:'bold',
    paddingBottom: 20
    },
  });