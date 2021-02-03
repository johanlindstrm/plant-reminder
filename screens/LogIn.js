import React from "react";
import { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

const plantIcon = require("../assets/potted-plant.png");

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, logIn } = useContext(AuthContext);

  const submit = () => {
    console.log("submitted log in");
    logIn(email, password);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.2,
          width: "70%",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Text style={styles.testHeader}>Plant App</Text>
        <Image
          source={plantIcon}
          style={{ width: 70, height: 70, marginTop: 205 }}
        />
      </View>

      <View style={{ flex: 1.5, width: "100%", alignItems: "center" }}>
        <TextInput
          placeholder='name@email.com'
          value={email}
          onChangeText={setEmail}
          style={styles.inputStyle}
          returnKeyType={"next"}
          autoCompleteType={"off"}
          clearButtonMode={"always"}
          keyboardAppearance={"dark"}
        />
        <TextInput
          placeholder='Enter password'
          value={password}
          onChangeText={setPassword}
          style={styles.inputStyle}
          returnKeyType={"done"}
          autoCompleteType={"off"}
          clearButtonMode={"always"}
          keyboardAppearance={"dark"}
        />
        <TouchableOpacity
          style={{
            width: 300,
            height: 45,
            backgroundColor: "#996633",
            justifyContent: "center",
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={submit}
          activeOpacity={0.7}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            LOGIN
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
    marginBottom: 15,
    width: 300,
    borderRadius: 5,
  },

  testHeader: {
    color: "#2bae6f",
    fontSize: 42,
    fontWeight: "700",
    paddingTop: 230,
    // fontFamily:''
  },
});
