import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

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
    flex: 1.2,
    justifyContent: "flex-end",
    // backgroundColor: "yellow",
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightblue",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "#d3d3d3",
  },

  titleText: {
    fontSize: 32,
    fontWeight: "700",
  },

  text: {
    fontSize: 18,
    fontWeight: "500",
    padding: 5,
  },

  waterbutton: {
    height: 50,
    width: 180,
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
