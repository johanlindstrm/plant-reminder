import React, { useContext, useState } from "react";
import { Button, FlatList, StyleSheet, Text } from "react-native";
import ListItem from "./ListItem";
import { PlantContext } from "../context/PlantContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

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
      // keyExtractor={(item) => item.toString()}
      // keyExtractor={(index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
