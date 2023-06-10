import React from "react";
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
} from "react-native";
export default function App() {

  const navigation = useNavigation();
  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
     };
    const handleBackArrowPress = () => {
      navigation.navigate("HomeScreen");
    };
    
  

  return (
  <View style={styles.container}>
     <View style={[styles.navbar]}>
        <TouchableOpacity onPress={handleBackArrowPress}>
          <Image 
            source={require('../assets/left-arrow.png')} 
            style={styles.icon}/>
        </TouchableOpacity>
        </View>
    
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#112D4E"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#112D4E"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUpPress}>
        <View style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>Don't have an account?</Text>
          </View>
        </TouchableOpacity>
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
    //borderBottomLeftRadius: 15,
    //borderBottomRightRadius: 15,
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
    color: "#fff",
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
});
