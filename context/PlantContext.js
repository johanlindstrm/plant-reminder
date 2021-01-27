import React, { createContext, useState, useEffect } from "react";
export const PlantContext = createContext()
const plantImg = require('../assets/potted-plant.png')

let plantArray = [
    {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: 'Time left'}
]


export default function PlantContextProvider ({children}) {
    const [plantList, setPlantList] = useState(plantArray)

    const addPlant = (title, reminderTime, timeLeft) => {
        var newArray = [];
        plantArray.push(...newArray, {id:4, img:plantImg, title: 'title', reminderTime:'reminderTime', timeLeft:'timeLeft'} )
        // plantArray.map((newArray) => { 
        //     return (
        //         {id:4, img:plantImg, title: 'title', reminderTime:'reminderTime', timeLeft:'timeLeft'}

        //     )
        // })
        setPlantList(newArray)
        console.log('add plant pressed',plantArray)
    }

    return (
        <PlantContext.Provider>
            {children}
        </PlantContext.Provider>
    )


}