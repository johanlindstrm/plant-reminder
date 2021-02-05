import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import InputSpinner from "react-native-input-spinner";
import { PlantContext } from "../context/PlantContext";

const placeholderImg = require("../assets/potted-plant.png");

export default function NewPlant() {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);

  const { addPlant } = useContext(PlantContext);

  const addItem = () => {
    //Checks that the title TextInput is not empty
    if (!title.trim()) {
      // If it is empty display error message
      Alert.alert("Error", "Please enter title");
      return;
    }
    //Checks that if the time input selected is equal to 0 days
    if (time == 0) {
      // if equal to 0 days displays error message
      Alert.alert("Error", "Please enter number of days");
      return;
    }
    // Checked Successfully
    // Do whatever you want
    Alert.alert("Success"); // Success message
    addPlant(title, time); // Pass title, time to add plant function
    navigation.navigate("Home"); // Navigate to Home Screen
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={placeholderImg}
          style={{ height: 150, width: 150, marginTop: 100 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.infoText}>Plant Title</Text>
        <TextInput
          placeholder='Enter Title'
          value={title}
          onChangeText={setTitle}
          style={styles.inputStyle}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.infoText}>Water frequency</Text>

        <InputSpinner
          max={30}
          min={0}
          step={1}
          colorPress={"#2bae6f"}
          color='gray'
          width={200}
          value={time}
          rounded={false}
          onChange={(time) => {
            setTime(time);
            console.log(time);
          }}
        />
      </View>
      <View style={{ flex: 1.5 }}>
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add Plant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  infoText: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },

  inputStyle: {
    padding: 10,
    backgroundColor: "#DCDCDC",
    marginBottom: 10,
    width: 200,
    borderRadius: 5,
  },

  testHeader: {
    color: "#2bae6f",
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 20,
  },

  addButton: {
    height: 50,
    width: 200,
    backgroundColor: "gray",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});
