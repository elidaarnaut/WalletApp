import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  Picker,
  Input,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";

import { GlobalContext } from "./global";
const { width, height } = Dimensions.get("window");

export default function Converter() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("Budget");
  };
 const handleValueChange = (text) => {
    setAmount(parseFloat(text).toFixed(2));
  };
  const { amount, setAmount } = useContext(GlobalContext);
  const { userId } = useContext(GlobalContext);

  const handleCheckPress = async () => {
    try {
        
      const recordData = JSON.stringify({
        amount: amount,
        userid: userId,
      });

      const response = await fetch("http://127.0.0.1:8000/budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: recordData,
      });

      if (response.ok) {
        console.log("Record created successfully");
        // Handle successful response here
        navigation.navigate("HomeScreen");
      } else {
        console.error("Failed to create record");
        // Handle error response here
      }
    } catch (error) {
      console.error(error);
      // Handle network or other errors here
    }
  };

  /*const handleDelete = async () => {
    try {
      const recordData = JSON.stringify({
       
        userid: userId,
      });

      const response = await fetch("http://127.0.0.1:8000/removeBudget", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: recordData,
      });

      if (response.ok) {
        console.log("Budget deleted successfully");
        // Handle successful response here
       
      } else {
        console.error("Failed to delete");
        // Handle error response here
      }
    } catch (error) {
      console.error(error);
      // Handle network or other errors here
    }
  };

*/
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require("../assets/left-arrow.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        <Text style={styles.inputText}>Input</Text>

        <TouchableOpacity onPress={handleCheckPress}>
          <Image
            source={require("../assets/correctIcon.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mainBox}>
        <View style={styles.containerMain}>
          <View style={styles.inputField}>
            <TextInput
              variant="standard"
              label="Label"
              style={styles.input}
              keyboardType="numeric"
              value={amount.amount}
              onChangeText={handleValueChange}
            />
            <Text style={styles.bigText}>BAM</Text>
          </View>
        </View>

       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9F7F7",
    alignContent: "center",
    alignItems: "flex-start",
  },

  header: {
    backgroundColor: "#112D4E",
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: 10,
  },

  image: {
    width: 30,
    height: 30,
    tintColor: "#FFFFFF",
  },

  containerMain: {
    backgroundColor: "#F9F7F7",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },

  containerBottom: {
    backgroundColor: "#F9F7F7",
    width: "100%",
    height: "20%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },

  select: {
    backgroundColor: "#3F72AF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  inputField: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    flexDirection: "row",
  },

  input: {
    height: 70,
    width: 200,
    margin: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 0,
    fontSize: 60,
  },

  inputText: {
    color: "white",
    fontSize: 30,
  },

  textOP: {
    color: "white",
  },

  bigText: {
    fontSize: 40,
    color: "black",
  },
  mainBox: {
    height: "80%",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
});
