import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


// Latest version of the Code, need to fix the smoothness of the Graf slider (the slider cards) and adjust the color scheme
// will need to add detail for each of the items


export default function InputTypePage() {
  const window = Dimensions.get('window');

  return (
    <View style={styles.container}>

      {/* StatusBar style="auto" means that the time, battery icon, wifi icon and similar will be visible on the phone
      The auto property means it will adjust based on the backgrond color, e.g white background -> dark icons and time */}
      <StatusBar style="auto" />
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.textCard}>
          <Text style={styles.cardText}>Manual Input</Text>
        </TouchableOpacity>

        <View style={styles.textCard}>
          <Text style={styles.cardText}>Scan Input</Text>
        </View>
      </View>
      
 
      <Menu></Menu>
      
    </View>
  );
}


const Menu = () => {
  return(
    <View style={styles.menu}>
      <TouchableOpacity>
        <Image 
          source={require('se-project/assets/home.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
        source={require('se-project/assets/budget.png')}
        style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.inputIcon}>
        <Image 
        source={require('se-project/assets/plus1.png')}
        style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
        source={require('se-project/assets/plannedpayment.png')}
        style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
        source={require('se-project/assets/calculator.png')}
        style={styles.icon}
        />
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F6E9',
    paddingTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    top: 0,
    position: 'absolute',
  },
  menu: {
    backgroundColor: '#FD5F00',
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
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
    
  },
  inputIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#005792',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: -30, // half of the width of inputIcon component
    marginTop: -30, // half of the height of inputIcon component
    transform: [{ scale: 1.1 }], // add a scale transformation to enlarge the inputIcon by 10%
    shadowColor: '#000', //color of the shadow
    shadowOffset: { //offset of the shadow
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.47, //opacity of the shadow
    shadowRadius: 8.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },
  textCard: {
    backgroundColor: '#A8DADC',
    borderRadius: 20,
    width: '75%',
    height: '25%',
    
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    marginBottom: 30,
    marginTop: 30,
    padding: 10,

  },
  cardText: {
    fontSize: 30,
  },
  
});