import React from 'react';
import {StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
//import { BarChart } from 'react-native-chart-kit';
import { StatusBar } from 'expo-status-bar';


const {width, height}= Dimensions.get('window');

export default Budget = () => {
  return (
    <View
      style={[styles.container]}>
        <StatusBar style="auto" />
      <View style={[styles.navbar]}>
        <TouchableOpacity>
          <Image source={require('./assets/left-arrow.png')} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={[styles.text]}>Budget Statistics</Text>
        <TouchableOpacity>
          <Image source={require('./assets/plannedpayment.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={[styles.graphContainer]}>
      </View>
      <View style={[styles.statsContainer]}>
        <ScrollView>
            <View style={styles.stat}><Text>Stat1</Text></View>
            <View style={styles.stat}><Text>Stat2</Text></View>
            <View style={styles.stat}><Text>Stat3</Text></View>
            <View style={styles.stat}><Text>Stat4</Text></View>
            <View style={styles.stat}><Text>Stat5</Text></View>
            <View style={styles.stat}><Text>Stat6</Text></View>
        </ScrollView>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: 'rgb(245, 232, 228)',
  },
  navbar: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgb(245, 199, 169)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  graphContainer: {
    height: '45%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgb(245, 232, 228)',
  },
  statsContainer: {
    height: '45%',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgb(65, 21, 48)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  stat: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(245, 232, 228)',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
});