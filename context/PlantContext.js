import React, { createContext, useState, useEffect } from "react";

export const PlantContext = createContext()
const plantImg = require('../assets/potted-plant.png')

let plantArray = [
    // {id:'', img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
    // {id:'', img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'},
]


export default function PlantContextProvider ({children}) {
    const [plantList, setPlantList] = useState(plantArray)

    const addPlant = (title, newTime) => {

    const id = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
          
        let cloneArray = plantArray.slice()
        cloneArray.push({id:id(), img:plantImg, title: title, reminderTime:newTime, timeLeft: newTime} )

        setPlantList(cloneArray)
        console.log('added new plant to array: ', cloneArray)
    }

    return (
        <PlantContext.Provider value={{addPlant, plantList}}>
            {children}
        </PlantContext.Provider>
    )


}