import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        setErrorMessage(''); // Reset error message
        setIsModalVisible(false); // Hide the modal
        navigation.navigate('LogIn');
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Sign up failed'); // Set error message
        setIsModalVisible(true); // Show the modal
      });
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F9F7F7',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    color: '#112D4E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
