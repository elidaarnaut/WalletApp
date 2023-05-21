import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Latest version of the Code, 15.05

export default function InputTypePage() {
  const window = Dimensions.get("window");

  const navigation = useNavigation();

  const handleManualInputPress = () => {
    navigation.navigate("InputPage");
  };

  return (
    <View style={styles.container}>
      {/* StatusBar style="auto" means that the time, battery icon, wifi icon and similar will be visible on the phone
      The auto property means it will adjust based on the backgrond color, e.g white background -> dark icons and time */}
      <StatusBar style="auto" />
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={handleManualInputPress}
          style={styles.textCard}
        >
          <Text style={styles.cardText}>Manual Input</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textCard}>
          <Text style={styles.cardText}>Scan Input</Text>
        </TouchableOpacity>
      </View>

      <Menu></Menu>
    </View>
  );
}

const Menu = () => {
  const navigation = useNavigation();
  const handleHomeScreenPress = () => {
    navigation.navigate("HomeScreen");
  };

  const handlePlusButtonPress = () => {
    navigation.navigate("InputTypePage");
  };

  const handleConverterPress = () => {
    navigation.navigate("Converter");
  };

  const handleBudgetPress = () => {
    navigation.navigate("Budget");
  };

  const handlePlannedPaymmentPress = () => {
    navigation.navigate("PlannedPayments");
  };
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={handleHomeScreenPress}>
        <Image
          source={require("se-project/assets/home.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBudgetPress}>
        <Image
          source={require("se-project/assets/budget.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      {/*<TouchableOpacity style={styles.inputIcon}>
        <Image 
        source={require('se-project/assets/plus1.png')}
        style={styles.icon}
        />
  </TouchableOpacity>*/}
      <TouchableOpacity onPress={handlePlannedPaymmentPress}>
        <Image
          source={require("se-project/assets/plannedpayment.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleConverterPress}>
        <Image
          source={require("se-project/assets/calculator.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F7F7",
    paddingTop: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    top: 0,
    position: "absolute",
  },
  menu: {
    backgroundColor: "#112D4E",
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  text: {
    padding: 5,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: "#FFFFFF",
  },
  inputIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#3F72AF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: -30, // half of the width of inputIcon component
    marginTop: -30, // half of the height of inputIcon component
    transform: [{ scale: 1.1 }], // add a scale transformation to enlarge the inputIcon by 10%
    shadowColor: "#000", //color of the shadow
    shadowOffset: {
      //offset of the shadow
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.47, //opacity of the shadow
    shadowRadius: 8.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },
  textCard: {
    backgroundColor: "#DBE2EF",
    borderRadius: 20,
    width: "75%",
    height: "25%",

    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    marginBottom: 30,
    marginTop: 30,
    padding: 10,
    shadowColor: "#000", //color of the shadow
    shadowOffset: {
      //offset of the shadow
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.47, //opacity of the shadow
    shadowRadius: 10.0, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },
  cardText: {
    fontSize: 30,
    //fontFamily: 'Arial',
    fontWeight: "500",
    color: "#112D4E",
  },
});
