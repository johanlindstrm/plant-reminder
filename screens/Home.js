import React from "react";
import { View } from "react-native";
import PlantList from "../components/PlantList.js";
import { AddItemButton } from "../components/AddItemButton.js";
// import { PlantContext } from "../context/PlantContext";

export default function Home() {
  // const { clearData } = useContext(PlantContext);

  return (
    <View style={{ height: "100%" }}>
      <PlantList />
      <AddItemButton />
      {/* <Button
        title='CLEAR DATA BUTTON'
        onPress={() => console.log(clearData())}
      /> */}
    </View>
  );
}
