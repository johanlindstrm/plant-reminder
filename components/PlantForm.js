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
  const [time, setTime] = useState();

  const { addPlant } = useContext(PlantContext);

  const addItem = () => {
    //Check for the Title TextInput
    if (!title.trim()) {
      Alert.alert("Error", "Please enter title");
      return;
    }
    if (time == undefined) {
      Alert.alert("Error", "Please enter number of days");
      return;
    }
    // Checked Successfully
    // Do whatever you want
    Alert.alert("Success");
    addPlant(title, time);
    navigation.navigate("Home");
  };

  return (
    <View style={{ ...styles.container }}>
      <View>
        <Image
          source={placeholderImg}
          style={{ height: 150, width: 150, marginTop: 100 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Plant Title
        </Text>
        <TextInput
          placeholder='Enter Title'
          value={title}
          onChangeText={setTitle}
          style={styles.inputStyle}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Water frequency
        </Text>
        {/* <TextInput placeholder='Enter Days' 
                  value={time} 
                  onChangeText={setTime}
                  style={styles.inputStyle}
            /> */}
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
        <TouchableOpacity
          style={{
            height: 50,
            width: 200,
            backgroundColor: "gray",
            justifyContent: "center",
            borderRadius: 5,
          }}
          onPress={addItem}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 14,
              color: "#fff",
            }}
          >
            Add Plant
          </Text>
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
});
