import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


// Latest version of the Code, 15.05


export default function HomeScreen() {
  const window = Dimensions.get('window');

  return (
    <View style={styles.container}>

      {/* StatusBar style="auto" means that the time, battery icon, wifi icon and similar will be visible on the phone
      The auto property means it will adjust based on the backgrond color, e.g white background -> dark icons and time */}
      <StatusBar style="auto" />
      <MonthSlider></MonthSlider>
      <GraphSlider/>
      <SpendingsView></SpendingsView>
      <Menu></Menu>
      
    </View>
  );
}

//Each item that was spent on
const SpendingsView = () => {
  return(
    <ScrollView style={styles.scrollView}>
      <SpendingsItem></SpendingsItem>
      <SpendingsItem></SpendingsItem>
      <SpendingsItem></SpendingsItem>
      <SpendingsItem></SpendingsItem>
      <SpendingsItem></SpendingsItem>
      <SpendingsItem></SpendingsItem>
      <SpendingsItem></SpendingsItem>
      


    </ScrollView>
  );
};

//Individual items in the SpendingsView
const SpendingsItem = () => {
  return(
    <View style={styles.spendingItem}>
    <Text style={styles.itemTitle}>Spending Item</Text>
    <Text style={styles.itemMoney}>24 KM</Text>
    <Image 
        source={require('se-project/assets/right-arrowW.png')}
        style={styles.rightArrow}
        />
    </View>
  );
};
//helouu

const GraphSlider = () => {
  const window = Dimensions.get('window');
  return(
    <View style={[styles.graphSlider, {minWidth: window.width}]}>
      <ScrollView 
        horizontal={true}
      >
        <View style={[styles.sliderCard,{width: window.width*0.8} ]}>
          <Image
            source={require('se-project/assets/pie-graph.png')}
            style={styles.graphs}
          />
        </View>
        <View style={[styles.sliderCard,{width: window.width*0.8} ]}>
          <Image
            source={require('se-project/assets/pie-graph.png')}
            style={styles.graphs}
          />
        </View>
      </ScrollView>
    </View>
    
  );
};

  

const MonthSlider = () => {
  return(
    <View style={styles.monthlySlider}>
      <TouchableOpacity>
        <Image
          source={require('se-project/assets/left-arrowW.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>April</Text>
      <TouchableOpacity>
        <Image
          source={require('se-project/assets/right-arrowW.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      

    </View>
  );
};

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
    backgroundColor: '#F9F7F7',
    paddingTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  menu: {
    backgroundColor: '#112D4E',
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
    tintColor: '#FFFFFF'
    
  },
  inputIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#3F72AF',
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
  monthlySlider: {
    backgroundColor: '#112D4E',
    color: 'white',
    width: '60%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  titleText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
  },
  graphs: {
    height: 200,
    width: 200,
    alignSelf:'center',
    justifyContent: 'center',
  },
  graphSlider: {
    width: '100%',
    alignSelf: 'center',
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
    
  },
  sliderCard: {
    width: '100%',
    backgroundColor: '#DBE2EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 20,
  },
  scrollView: {
    width: '90%',
    paddingTop: 10,
    marginBottom: 100,
    paddingBottom: 300,
    flexDirection: 'column',
    height: '70%',
    //borderColor: '#000',
    //borderStyle: 'solid'
    

  },
  spendingItem: {
    width:'90%',
    height: 70,
    borderRadius: 20,
    margin: 10,
    //paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DBE2EF',
    flexDirection: 'row',
    
    alignSelf: 'center',
    shadowColor: '#000', //color of the shadow
    shadowOffset: { //offset of the shadow
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37, //opacity of the shadow
    shadowRadius: 6.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },
  itemTitle: {
    fontFamily: 'Arial',
    fontWeight: '500',
    fontSize: 15,
    color: '#112D4E',

  },
  itemMoney: {
    fontFamily: 'Arial',
    fontWeight: '500',
    fontSize: 15,
    color: '#112D4E',
    
  },
  rightArrow: {
    width: 35,
    height: 35,
    tintColor: '#112D4E',
  
  },
});