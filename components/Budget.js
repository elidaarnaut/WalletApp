import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Dimensions}from 'react-native';
import {BarChart } from 'react-native-chart-kit';

const {width, height}= Dimensions.get('window');

const Budget = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
          backgroundColor: 'rgb(245, 232, 228)',
        },
      ]}
    >
      <View style={Navbar.container}>
        <Image source={require('./assets/strijela.png')} style={Slika.image}/>
        <Text style={Budget.text}>Budget</Text>
        <Text style={Budget.text}>Stats</Text>
      </View>
      <View style={{ flex: 4, backgroundColor: 'rgb(245, 232, 228)', justifyContent:'space-evenly' }}>
      <BarChart
        data={{
          labels: [ 'Spent', 'Left', 'Total Budget'],
          datasets: [
            {
              data: [20, 45, 65],
            },
          ],
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisLabel={'BAM'}
        chartConfig={{
          backgroundColor: 'rgb(245, 232, 228)',
          backgroundGradientFrom: 'rgb(245, 232, 228)',
          backgroundGradientTo: 'rgb(245, 232, 228)',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(65, 21, 48, ${opacity})`,
          style: {
            borderRadius: 20,
            marginTop: 20
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      
      </View>
      <View style={{flex: 4, backgroundColor: 'rgb(65, 21, 48)', borderRadius: 15, paddingTop: 20, paddingBottom:20, }}>
        <ScrollView contentContainerStyle={Stats.container}>
          <View style={Stats.item}><Text>Stat1</Text></View>
          <View style={Stats.item}><Text>Stat1</Text></View>
          <View style={Stats.item}><Text>Stat1</Text></View>
          <View style={Stats.item}><Text>Stat1</Text></View>
          <View style={Stats.item}><Text>Stat1</Text></View>
          <View style={Stats.item}><Text>Stat1</Text></View>
          <View style={Stats.item}><Text>Stat1</Text></View> 
        </ScrollView>
      </View>
    </View>
  );
      };

      //promjena

const Stats = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  item: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(245, 232, 228)',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
});

const Navbar = StyleSheet.create({  container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(245, 199, 169)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
});

const Budget = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
  },
});

const Slika = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginRight: 20,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingBottom: Platform.OS === 'android' ? 25 : 0,
  },
});

export default Budget;