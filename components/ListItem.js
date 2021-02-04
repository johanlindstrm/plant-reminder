import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PlantContext } from "../context/PlantContext";

export default function ListItem({
  item,
  img,
  title,
  reminderTime,
  timeLeft,
  id,
}) {
  const navigation = useNavigation();
  const { deletePlant } = useContext(PlantContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate("Details", {
            params: item,
            img,
            title,
            reminderTime,
            timeLeft,
          });
          console.log("navigate to: ", item);
        }}
      >
        <View style={styles.imgContainer}>
          <Image source={item.img} style={{ height: 100, width: 100 }} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.reminderTime}</Text>
          <Text>{item.timeLeft}</Text>
        </View>

        <View style={styles.waterBtnContainer}>
          <TouchableOpacity
            style={styles.waterbutton}
            onPress={() => {
              deletePlant(id);
            }}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  itemContainer: {
    backgroundColor: "#d3d3d3",
    marginTop: 0,
    marginBottom: 5,
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  imgContainer: {
    flex: 0.5,
    // backgroundColor:'orange',
    marginLeft: 20,
  },

  textContainer: {
    flex: 1,
    // backgroundColor:'red',
    height: 100,
    paddingLeft: 40,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },

  waterBtnContainer: {
    // backgroundColor:'orange',
    alignItems: "flex-end",
    marginRight: 20,
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },

  waterbutton: {
    height: 40,
    width: 80,
    // backgroundColor: "#2b68ae",
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 5,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
