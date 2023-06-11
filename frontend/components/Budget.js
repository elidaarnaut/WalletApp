//import React from 'react';
import {StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, Component, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "./global";



export default function Budget() {

  const { userId } = useContext(GlobalContext) ?? { userId: null };

  const navigation = useNavigation();
  const handlePlannedPaymmentPress = () => {
    navigation.navigate('PlannedPayments');
  };

  const handleInputPress = () => {
    navigation.navigate('InputPage');
  };
  
  const handleBackArrowPress = () => {
    navigation.navigate('HomeScreen');
  }

  
  const [budget, setBudget] = useState([]);

  console.log(userId);
  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/budget");
         setBudget(response.data);
         //console.log(response.data);
         //console.log(userId);
         
      } catch (error) {
        console.error(error);
      }
    };

    fetchBudget();
  }, [userId]);

  
  return (
    <View
      style={[styles.container]}>
      <View style={[styles.navbar]}>
        <TouchableOpacity onPress={handleBackArrowPress}>
          <Image 
            source={require('../assets/left-arrow.png')} 
            style={styles.icon}/>
        </TouchableOpacity>

        <Text style={[styles.textBudget]}>Budget</Text>

        <TouchableOpacity 
          onPress={handlePlannedPaymmentPress}>
          <Image 
            source={require('../assets/plannedpayment.png')} 
            style={styles.icon}/>
        </TouchableOpacity>

      </View>
      <View style={[styles.valueContainer]}>
      <Text style={[styles.text]}>Your budget is:</Text>
      {budget
        .filter((bdg) => bdg.userid === userId)
        .map((budget) => (
          <View style={styles.budgetValue} key={budget.id}>
            <Text style={styles.budgetValue}>{budget.amount} KM</Text>
          </View>
        ))}
      </View>

      <View style={[styles.inputContainer]}>
        <Text style={[styles.text]}>Do you want to add an expense or income?</Text>
        <View style={[styles.addButton]}>
          <TouchableOpacity onPress={handleInputPress}>
            <Text style={[styles.addText]}>Add</Text>
          </TouchableOpacity>
        </View>
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
  },/*
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
  */
 addButton:{
  width: '90%',
  backgroundColor: '#112D4E',
  borderRadius: 20,
 },

 addText:{
  color: 'white',
  fontSize: 30,
  textAlign: 'center',
  padding: 10,
 },

  inputContainer:{
    marginLeft: '20px',
    width: '100%',
    backgroundColor: '#DBE2EF',
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    padding: 20,
    alignItems: 'center',
  },
  valueContainer:{
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    padding: 20,
    alignSelf: 'center',
  },

  budgetValue:{
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 35,
  },
  /*statsContainer: {
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
  },*/
  textBudget: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  text: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF'
  },/*
  stat: {
    width: '100%',
    height: 70,
    backgroundColor: '#DBE2EF',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }*/
});