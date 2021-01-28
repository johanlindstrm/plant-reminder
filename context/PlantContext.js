import React, { createContext, useState } from "react";

export const PlantContext = createContext()
const plantImg = require('../assets/potted-plant.png')

let plantArray = [
    {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: '5 Days left'},
    {id:2, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: '2 Days left'},
]


export default function PlantContextProvider ({children}) {
    const [plantList, setPlantList] = useState(plantArray)

    const addPlant = (title, time) => {

    const id = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
          
        let cloneArray = plantArray.slice()
        cloneArray.push({id:id(), img:plantImg, title: title, reminderTime:`Water every ${time} days`, timeLeft: `${time} Days Left` } )

        setPlantList(cloneArray)
        console.log('added new plant to array: ', cloneArray)
    }

    return (
        <PlantContext.Provider value={{addPlant, plantList}}>
            {children}
        </PlantContext.Provider>
    )


}