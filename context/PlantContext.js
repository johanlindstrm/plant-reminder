import React, { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PlantContext = createContext()
const plantImg = require('../assets/potted-plant.png')

let plantArray = [
    {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: '5 Days left'},
    {id:2, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: '2 Days left'},
]


export default function PlantContextProvider ({children}) {
  const [plantList, setPlantList] = useState(plantArray)

  const addPlant = async (title, time) => {



    const id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    } 
      let cloneArray = plantArray.slice()
      cloneArray.push({id:id(), img:plantImg, title: title, reminderTime:`Water every ${time} days`, timeLeft: `${time} Days Left` } )
      try {
        const jsonValue = JSON.stringify(cloneArray)
        await AsyncStorage.setItem('@storage_key', jsonValue)
        console.log('**STORED DATA**',jsonValue)
      } catch (error) {
        // console.log('Error storing data: ', error);
      }
      setPlantList(cloneArray)
      console.log('added new plant to array: ', cloneArray)
  }

  const deletePlant = (id) => {
    const filteredData = plantArray.filter(item => item.id !== id);
    setPlantList(filteredData)
  }




  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_key')
      console.log('retrieved data: ',jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
      console.log('error retreving data: ', error)
    }
  }
  


    return (
        <PlantContext.Provider value={{ addPlant, deletePlant, plantList, getData }}>
            {children}
        </PlantContext.Provider>
    )


}