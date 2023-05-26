//Creted needed branch
import React from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function App()  {

  const handleSignUp = () => {
    // extra code 
  };




  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#112D4E"
      />
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
        onPress={handleSignUp}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#fff',
    borderRadius: 20,
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
});
