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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

export default function Converter() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("HomeScreen");
  };

  const handleCheckPress = () => {
    navigation.navigate("Categories");
  };

  const handleKeyboard = () => {
    Keyboard.dismiss();
  };

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

      <View style={styles.containerMain}>
        <View style={styles.inputField}>
          <TextInput
            variant="standard"
            label="Label"
            style={styles.input}
            keyboardType="numeric"
          />
          <Text style={styles.bigText}>BAM</Text>
        </View>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.select}>
          <TouchableOpacity>
            <Text style={styles.textOP}>Convert</Text>
          </TouchableOpacity>
        </View>

        <Picker style={{ height: 50, width: 150, color: "black" }}>
          <Picker.Item label="Income" value="Income" />
          <Picker.Item label="Expense" value="Expense" />
        </Picker>
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
    height: "12%",
    flexDirection: "row",
    alignItems: "flex-end",
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
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 20,
  },

  textOP: {
    color: "white",
  },

  bigText: {
    fontSize: 40,
    color: "black",
  },
});
