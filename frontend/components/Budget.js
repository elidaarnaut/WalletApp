import React from 'react';
import {StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import axios from "axios";


export default function Budget() {
  const navigation = useNavigation();
  const handlePlannedPaymmentPress = () => {
    navigation.navigate('PlannedPayments');
  };
  
  const handleBackArrowPress = () => {
    navigation.navigate('HomeScreen');
  }

  const [budget, setBudget] = useState([]);
  const url = "http://127.0.0.1:8000/budget";

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/budget");
         setData(response.data);
         setBudget(response.data.budget);
         
         setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBudget();
  }, []);
  


  return (
    <View
      style={[styles.container]}>
      <View style={[styles.navbar]}>
        <TouchableOpacity onPress={handleBackArrowPress}>
          <Image 
            source={require('../assets/left-arrow.png')} 
            style={styles.icon}/>
        </TouchableOpacity>

        <Text style={[styles.text]}>Budget Statistics</Text>

        <TouchableOpacity 
          onPress={handlePlannedPaymmentPress}>
          <Image 
            source={require('../assets/plannedpayment.png')} 
            style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={[styles.graphContainer]}>
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#F9F7F7',
    
  },
  navbar: {
    height: '8%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

    marginTop: 30,
    padding: 20,
    backgroundColor: '#112D4E',

    borderRadius: 20,
    //borderBottomLeftRadius: 15,
    //borderBottomRightRadius: 15,
  },
  graphContainer: {
    height: '30%',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 40,
    margin: 10,
    padding: 20,
    backgroundColor: '#DBE2EF',
  },
  statsContainer: {
    height: '60%',
    width: '90%',
    padding: 20,
    alignSelf: 'center',
    //backgroundColor: 'rgb(65, 21, 48)',
    //borderTopLeftRadius: 15,
    //borderTopRightRadius: 15,
    shadowColor: '#000', //color of the shadow
    shadowOffset: { //offset of the shadow
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37, //opacity of the shadow
    shadowRadius: 6.65, //blur radius of the shadow.

    elevation: 9,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF'
  },
 
});