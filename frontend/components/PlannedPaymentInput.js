import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  Input,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { GlobalContext } from "./global";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native"; 

export default function PlannedPaymentInput() {
  const [selectedType, setSelectedType] = useState(1);
  const [selectedFrequency, setSelectedFrequency] = useState(30);
  const [amount, setAmount] = useState(0.0);
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const { userId } = useContext(GlobalContext);

  const handleTypeChange = (itemValue) => {
      setSelectedType(itemValue);
  };

    const handleAmountChange = (text) => {
      setAmount(text);
    };

    const handleNameChange = (text) => {
      setName(text);
    };

    const handleFrequencyChange = (itemValue) => {
      setSelectedFrequency(itemValue);
    };

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };

    const navigation = useNavigation();

    const handleBackPress = () => {
      navigation.navigate("PlannedPayments");
    };
const handleSubmitPress = async () => {
  
  try {
  
    const recordData = JSON.stringify({
      name: name,
      typeofpayment: selectedType,
      subcategoryid: 1,
      categoryid: 2,
      amount: amount,
      userid: userId,
      frequency: selectedFrequency,
      date: selectedDate,
    });

    const response = await fetch("http://127.0.0.1:8000/plannedpayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: recordData,
    });

    if (response.ok) {
      console.log("Record created successfully");
      // Handle successful response here
      navigation.navigate("Budget");
    } else {
      console.error("Failed to create record");
      // Handle error response here
    }
  } catch (error) {
    console.error(error);
    // Handle network or other errors here
  }
};

  console.log("name", name);
  console.log("date", selectedDate);
  console.log("freq", selectedFrequency);
  console.log("type", selectedType);
  console.log("amount", amount);
  console.log("user", userId);
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require("../assets/left-arrow.png")}
              style={styles.icon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Planned Payment</Text>
          <TouchableOpacity onPress={handleSubmitPress}>
            <Image
              source={require("../assets/correctIcon.png")}
              style={styles.icon}
              
            ></Image>
          </TouchableOpacity>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}></View>

        <View style={styles.box}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleNameChange}
            keyboardType="default"
            placeholder="ex. Salary"
            maxLength={20}
          />
        </View>

        <View style={styles.divider}></View>

        {/* DROPDOWN TYPES - INCOME AND EXPENSE */}
        <View style={styles.box}>
          <Text style={styles.label}>Type</Text>
          <Picker
            selectedValue={selectedType}
            onValueChange={handleTypeChange}
            style={styles.dropdown}
          >
            <Picker.Item label="Income" value="1" />
            <Picker.Item label="Expense" value="0" />
          </Picker>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}></View>

        <View style={styles.box}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={handleAmountChange}
            keyboardType="numeric"
            placeholder="BAM"
          />
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}></View>

        {/* DROPDOWN FREQUENCY */}
        <View style={styles.box}>
          <Text style={styles.label}>Frequency</Text>
          <Picker
            selectedValue={selectedFrequency}
            onValueChange={handleFrequencyChange}
            style={styles.dropdown}
          >
            <Picker.Item label="1 Year" value="365" />
            <Picker.Item label="6 Months" value="180" />
            <Picker.Item label="3 Months" value="90" />
            <Picker.Item label="1 Month" value="30" />
          </Picker>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}></View>

        {/* Date Picker */}
        <View style={styles.box}>
          <Text style={styles.label}>Date</Text>
          <input
            type="date"
            style={styles.datePickerInput}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F7F7",
    alignItems: "center",
    paddingTop: 35,
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#112D4E",
    height: 2,
    borderRadius: 20,
    width: "85%",
    marginVertical: 10,
  },
  text: {
    color: "#000",
    fontSize: 25,
  },
  dropdown: {
    width: 200,
    height: 50,
    margin: 0,
    padding: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  box: {
    width: "85%",
    height: "13%",
    backgroundColor: "#DBE2EF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: "#112D4E",
  },
  datePickerInput: {
    width: 200,
    height: 40,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
});
