import React, { useState, useContext } from "react";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  ScrollView,
  Modal,
} from "react-native";
import axios from 'axios';
import { GlobalContext } from "./global";

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const { setUserId } = useContext(GlobalContext);


  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  const handleBackArrowPress = () => {
    navigation.navigate("HomeScreen");
  };

  const handleLogin = () => {
    axios.post('http://127.0.0.1:8000/login', {
      email,
      password,
    })
    .then(response => {
      console.log('Login successful');
      setErrorMessage(''); // Reset error message
      setIsModalVisible(false); // Hide the modal

      console.log(response.data);
      //setUserId(response.data.id);

      //console.log('in Login');
      //console.log(id);
      setUserId(response.data.user.id);
      //console.log(id)
      navigation.navigate('HomeScreen'); // Navigate to HomeScreen
    })
    .catch(error => {
      console.error(error);
      setErrorMessage('Incorrect inputs'); // Set error message
      setIsModalVisible(true); // Show the modal
    });
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.navbar]}>
        <TouchableOpacity onPress={handleBackArrowPress}>
          <Image 
            source={require('../assets/left-arrow.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#112D4E"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#112D4E"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUpPress}>
        <View style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>Don't have an account?</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F7F7",
    padding: 16,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "#FFFFFF",
  },
  navbar: {
    height: "8%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#112D4E",
    marginBottom:"150px",
    borderRadius: 20,
  },
  buttonSignUp:{
    backgroundColor: "#112D4E",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#DBE2EF",
    marginBottom: 16,
    paddingHorizontal: 10,
    color: "#112D4E",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#112D4E",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#F9F7F7",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#F9F7F7",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    color: "#112D4E",
    fontSize: 16,
    fontWeight: "bold",
  },
});
