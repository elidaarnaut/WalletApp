import React, { useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const window = Dimensions.get('window');
  const [selectedGraphIndex, setSelectedGraphIndex] = useState(0);

  const handleGraphSliderScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / window.width);
    setSelectedGraphIndex(index);
  };
  return (
    <View style={styles.container}>

      {/* StatusBar style="auto" means that the time, battery icon, wifi icon and similar will be visible on the phone
      The auto property means it will adjust based on the backgrond color, e.g white background -> dark icons and time */}
      <StatusBar style="auto" />
      <MonthSlider></MonthSlider>
      <GraphSlider selectedGraphIndex={selectedGraphIndex} onScroll={handleGraphSliderScroll} />
      <SpendingsView></SpendingsView>
      <Text style={styles.text}>This is myyyyyyyyyyymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmyyyyyys trial text</Text>
      <Menu></Menu>
      
    </View>
  );
}

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
      <SpendingsItem></SpendingsItem>
      <SpendingsItem></SpendingsItem>


    </ScrollView>
  );
};

const SpendingsItem = () => {
  return(
    <View style={styles.spendingItem}>
      <Text>Spending Item</Text>
    </View>
  );
};

const GraphSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / Dimensions.get('window').width);
    setActiveIndex(index);
  };

  return(
    <View style={styles.graphSlider}>
      <ScrollView 
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Image
          source={require('se-project/assets/pie-graph.png')}
          style={styles.graphs}
        />
        <Image
          source={require('se-project/assets/pie-graph.png')}
          style={styles.graphs}
        /> 
      </ScrollView>
      <View style={styles.pagination}>
      {Array.from(Array(2).keys()).map((index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
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
    backgroundColor: '#F6F6E9',
    paddingTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    
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
    padding: 15,
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
  monthlySlider: {
    backgroundColor: '#13334C',
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
    
  },
  scrollView: {
    width: '90%',
    paddingTop: 10,
    borderRadius: 25,
    flexDirection: 'column',
    height: '60%',
    //borderColor: '#000',
    //borderStyle: 'solid'
    

  },
  spendingItem: {
    width:'70%',
    height: 70,
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darksalmon',
    alignSelf: 'center',
    shadowColor: '#000', //color of the shadow
    shadowOffset: { //offset of the shadow
      width: 5,
      height: 8,
    },
    shadowOpacity: 0.17, //opacity of the shadow
    shadowRadius: 8.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  }
});