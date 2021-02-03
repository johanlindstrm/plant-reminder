import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const AddItemButton = () => {
  const navigation = useNavigation();
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
