import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { PlantContext } from "../context/PlantContext";

export default function Details({ route }) {
  const navigation = useNavigation();
  const waterAlert = () => {
    Alert.alert("Completed", "Well done the plant is watered!");
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imgContainer}>
          <Image
            source={route.params.img}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}> {route.params.title} </Text>

          <Text style={styles.text}> {route.params.reminderTime}</Text>
          <Text style={styles.text}> {route.params.timeLeft}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.waterbutton}
            onPress={() => waterAlert()}
          >
            <Text style={styles.buttonText}>Water</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  imgContainer: {
    flex: 2,
    justifyContent: "center",
    // backgroundColor:'yellow',
  },

  textContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'lightblue',
  },

  buttonContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'#d3d3d3',
  },

  titleText: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: "500",
    padding: 5,
  },

  waterbutton: {
    height: 50,
    width: 120,
    backgroundColor: "#2b68ae",
    justifyContent: "center",
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
