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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

export default function Converter() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("HomeScreen");
  };

  const options = [
    "BAM",
    "EUR",
    "USD",
    "GBP",
    "RSD",
    "CHF",
    "AED",
    "TRY",
    "SEK",
    "RUB",
  ];
  const options2 = [
    "BAM",
    "EUR",
    "USD",
    "GBP",
    "RSD",
    "CHF",
    "AED",
    "TRY",
    "SEK",
    "RUB",
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setVisible(false);
  };

  const handleSelect2 = (option2) => {
    setSelectedOption2(option2);
    setVisible2(false);
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

        <Text style={styles.bigText}>Converter</Text>

        <View></View>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.select}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.textOP}>Select Currency</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputField}>
          <TextInput
            variant="standard"
            label="Label"
            style={styles.input}
            keyboardType="numeric"
          />
          <Text style={styles.inputText}>{selectedOption}</Text>
        </View>

        <Modal visible={visible} animationType="slide" transparent>
          <View style={styles.menuOptions}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleSelect(option)}
                style={{ padding: 10 }}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={{ padding: 10 }}
            >
              <Text style={{ justifyContent: "center", alignItems: "center" }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.select}>
          <TouchableOpacity onPress={() => setVisible2(true)}>
            <Text style={styles.textOP}>Select Currency</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputField}>
          <TextInput
            variant="standard"
            label="Label"
            style={styles.input}
            keyboardType="numeric"
          />
          <Text style={styles.inputText}>{selectedOption2}</Text>
        </View>

        <Modal visible={visible2} animationType="slide" transparent>
          <View style={styles.menuOptions}>
            {options.map((option2) => (
              <TouchableOpacity
                key={option2}
                onPress={() => handleSelect2(option2)}
                style={{ padding: 10 }}
              >
                <Text>{option2}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setVisible2(false)}
              style={{ padding: 10 }}
            >
              <Text style={{ justifyContent: "center", alignItems: "center" }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.select}>
          <TouchableOpacity>
            <Text style={styles.textOP}>Convert</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9F7F7",
    //justifyContent: 'space-between',
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
    //justifyContent: 'center',
    fontSize: 30,
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
    fontSize: 15,
  },

  textOP: {
    color: "white",
  },

  bigText: {
    fontSize: 20,
    color: "white",
  },

  menuOptions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F7F7",
  },
});
