import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  // const [numPlants, setNumPlants] = useState(5);
  // const [numWatered, setNumWatered] = useState(22);
  const numPlants = 5;
  const numWatered = 11;
  const { signOut } = useContext(AuthContext);

  const logOut = () => {
    signOut();
    console.log("sign out button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.StatsContainer}>
        <View style={{ ...styles.circleContainer, backgroundColor: "#2bae6f" }}>
          <Text style={styles.statText}>
            Plants Alive: {"\n"}
            <Text style={styles.statNumber}>{numPlants}</Text>
          </Text>
        </View>

        <View style={{ ...styles.circleContainer, backgroundColor: "#2b68ae" }}>
          <Text style={styles.statText}>
            Times Watered: {"\n"}
            <Text style={styles.statNumber}>{numWatered}</Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.customButton}
        onPress={logOut}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}> SIGN OUT </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'yellow',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  StatsContainer: {
    width: "100%",
    flex: 1,
    // backgroundColor:'green',
    alignItems: "center",
    justifyContent: "center",
    // flexDirection:'row'
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  customButton: {
    width: 300,
    height: 45,
    backgroundColor: "#996633",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 20,
  },

  statText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 22,
  },

  statNumber: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 22,
  },

  circleContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    margin: 20,
    borderRadius: 100,
  },
});
