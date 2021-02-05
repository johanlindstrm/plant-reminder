import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const AddItemButton = () => {
  const navigation = useNavigation();
  // Classic Floating Action Button
  // Using it as a display option for navigation to Add Plant Screen
  return (
    <FAB
      style={styles.fab}
      icon={"plus"}
      onPress={() => navigation.navigate("Add Plant")}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 20,
    bottom: 20,
  },
});
