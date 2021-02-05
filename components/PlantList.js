import React, { useContext } from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";
import { PlantContext } from "../context/PlantContext";

const renderItem = ({ item }) => {
  return (
    <ListItem
      item={item}
      img={item.img}
      title={item.title}
      reminderTime={item.reminderTime}
      timeLeft={item.timeLeft}
      id={item.id}
    />
  );
};

export default function List() {
  const { plantList } = useContext(PlantContext);

  return (
    <FlatList
      data={plantList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
