import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const PlantContext = createContext();
const plantImg = require("../assets/potted-plant.png");

// const itemList = [
// {
//   id: 1,
//   img: plantImg,
//   title: "Plant Title",
//   reminderTime: "Water every * days",
//   timeLeft: "5 Days left",
// },
// {
//   id: 2,
//   img: plantImg,
//   title: "Plant Title",
//   reminderTime: "Water every * days",
//   timeLeft: "2 Days left",
// },
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

    let plantArray = plantList.slice();
    plantArray.plantArray.unshift({
      id: randomID,
      img: plantImg,
      title: title,
      reminderTime: `Water every ${time} days`,
      timeLeft: `${time} Days Left`,
    });

    AsyncStorage.setItem("PLANT_DATA", JSON.stringify(plantArray), () => {
      AsyncStorage.getItem("PLANT_DATA", (_err, result) => {
        try {
          const parsedResult = JSON.parse(result);
          console.log("PARSED RESULTS: ", parsedResult);
          setPlantList(parsedResult);
        } catch (_err) {
          console.log("ERR: ", _err);
        }
      });
    });

    console.log("NEW PLANT ADDED: ", plantArray);
  };

  // Clears the entire AsyncStorage, only used in testing
  const clearData = async () => {
    AsyncStorage.clear();
  };
  // Delete plant based on its id
  const deleteAlert = (id) => {
    const deletePlant = () => {
      const filteredData = plantList.filter((item) => item.id !== id);
      console.log("Deleted item with id: ", id);
      // Sets the state to be the one with the filtered data
      setPlantList(filteredData);
    };

    Alert.alert(
      "Delete?",
      `Do you want to delete item id: ${id} ?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("canceled was pressed"),
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: () => deletePlant(),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  return (
    <PlantContext.Provider
      value={{
        addPlant,
        deleteAlert,
        plantList,
        clearData,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
