import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleBackArrowPress = () => {
    navigation.navigate('LogIn');
  };

  const handleSignUp = () => {
    axios
      .post('http://127.0.0.1:8000/signup', {
        name,
        email,
        password,
      })
      .then(response => {
        console.log('Signup successful');
      })
      .catch(error => {
        // Handle signup error
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleBackArrowPress}>
          <Image source={require('../assets/left-arrow.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#112D4E"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#112D4E"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#112D4E"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F7F7',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#DBE2EF',
    marginBottom: 16,
    paddingHorizontal: 10,
    //color: '#fff',
    borderRadius: 20,
    color: '#112D4E',
  },
  button: {
    backgroundColor: '#112D4E',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#F9F7F7',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
  navbar: {
    height: '8%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#112D4E',
    marginBottom: 150,
    borderRadius: 20,
  },
});
