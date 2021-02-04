import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export const PlantContext = createContext();
const plantImg = require("../assets/potted-plant.png");

// let plantArray = [
//   // {id:1, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: '5 Days left'},
//   // {id:2, img: plantImg, title: 'Plant Title', reminderTime: 'Water every * days', timeLeft: '2 Days left'},
// ];

export default function PlantContextProvider({ children }) {
  const [plantList, setPlantList] = useState([]);

  const addPlant = async (title, time) => {
    const id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    let randomID = id();

    let plantArray = [];

    plantArray.push({
      id: randomID,
      img: plantImg,
      title: title,
      reminderTime: `Water every ${time} days`,
      timeLeft: `${time} Days Left`,
    });

    AsyncStorage.setItem("PLANT_DATA", JSON.stringify(plantArray), () => {
      AsyncStorage.getItem("PLANT_DATA", (_err, result) => {
        // console.log("RESULTS: ", result);
        try {
          const parsedResult = JSON.parse(result);
          console.log("PARSED RESULTS: ", parsedResult);
          setPlantList(parsedResult);
        } catch (_err) {
          console.log("ERR: ", _err);
        }
      });
    });

    // setPlantList(plantArray);

    console.log("NEW PLANT ADDED: ", plantArray);
  };

  const clearData = async () => {
    AsyncStorage.clear();
  };

  // const storeData = async () => {
  //   try {
  //     const stringifyPlant = JSON.stringify(plantList);
  //     await AsyncStorage.setItem("@store:plants", stringifyPlant);
  //     console.log(stringifyPlant);
  //   } catch (error) {
  //     // Error saving data
  //     console.log(error);
  //   }
  // };

  // const retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("@store:plants");
  //     if (value !== null) {
  //       // We have data!!
  //       newPlant = JSON.parse(value);
  //       setPlantList(newPlant);
  //       console.log(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };

  const deletePlant = (id) => {
    const filteredData = plantList.filter((item) => item.id !== id);
    setPlantList(filteredData);
  };

  return (
    <PlantContext.Provider
      value={{
        addPlant,
        deletePlant,
        plantList,
        clearData,
        setPlantList,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
