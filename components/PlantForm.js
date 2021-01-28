import { useNavigation } from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { PlantContext } from '../context/PlantContext';

const placeholderImg = require('../assets/potted-plant.png');

export default function NewPlant() {
    const navigation = useNavigation()
    const [title, setTitle] = useState('');
    const [newTime, setNewTime] = useState('');

    const {addPlant} = useContext(PlantContext)

    const addItem = () => {
        addPlant(title, newTime)
        navigation.navigate('Home')
    }

    return (
      <View style={{...styles.container}}>

        <View style={{height:'50%' ,alignItems:'center', padding:20}}>

            <Image source={placeholderImg} style={{ height: 100, width: 100 , marginBottom:20}} />
            
            <Text>Plant Title</Text>
            <TextInput placeholder='Enter Title' 
                value={title} 
                onChangeText={setTitle}
                style={styles.inputStyle}
            />

            <Text>Water frequency</Text>
            <InputSpinner
                max={30}
                min={1}
                step={1}
                colorPress={"#2bae6f"}
                color='gray'
                width={200}
                value={newTime}
                onChangeText={setNewTime}
                rounded={false}
            />
            <TouchableOpacity style={{height:40, width:80, backgroundColor:'gray', justifyContent:'center'}} onPress={addItem}>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#fff'}}>Add Plant</Text>
            </TouchableOpacity>
        </View>


        <View>

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