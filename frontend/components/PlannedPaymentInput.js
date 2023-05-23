import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PlannedPaymentInput() {
  const [selectedType, setSelectedType] = useState('Option 1');
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleTypeChange = (itemValue) => {
    setSelectedType(itemValue);
  };

  const [amount, setAmount] = useState('');

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
        source={require("./assets/left-arrow.png")}
        style={styles.icon}></Image>
        <Text>Name</Text>
        <Image 
        source={require("./assets/correctIcon.png")}
        style={styles.icon}></Image>
      </View>

      {/* DIVIDER */}
      <View style={styles.divider}></View>

      {/* DROPDOWN TYPES - INCOME AND EXPENSE */}
      <View style={styles.box}>
        <Text style={styles.label}>Type</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={handleTypeChange}
          style={styles.dropdown}
        >
          <Picker.Item label="Income" value="Income" />
          <Picker.Item label="Expense" value="Expense" />
        </Picker>
      </View>

      {/* DIVIDER */}
      <View style={styles.divider}></View>

      <View style={styles.box}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
          placeholder='BAM'
        />
      </View>

      {/* DIVIDER */}
      <View style={styles.divider}></View>

      {/* DROPDOWN FREQUENCY */}
      <View style={styles.box}>
        <Text style={styles.label}>Frequency</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={handleTypeChange}
          style={styles.dropdown}
        >
          <Picker.Item label="1 Year" value="1Year" />
          <Picker.Item label="6 Months" value="6months" />
          <Picker.Item label="3 Months" value="3months" />
          <Picker.Item label="1 Month" value="1month" />
        </Picker>
      </View>

      {/* Date Picker */}
      {/* <View style={styles.box}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
          <Text style={styles.datePickerButtonText}>
            {selectedDate ? selectedDate.toLocaleDateString() : 'Select date'}
          </Text>
        </TouchableOpacity>

        {isDatePickerVisible && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View> */}

      {/* DIVIDER */}
      <View style={styles.divider}></View>
      <View style={styles.box}></View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9F7F7',
    alignItems: 'center',
    paddingTop: 35,
    justifyContent:'space-evenly'
  },
  header: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divider: {
    backgroundColor: '#112D4E',
    height: 2,
    borderRadius: 20,
    width: '85%',
    marginVertical: 10,
  },
  dropdown: {
    width: 200,
    height: 50,
    margin: 0,
    padding: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  box: {
    width: '85%',
    height: '17%',
    backgroundColor: '#DBE2EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#112D4E'
    
  },
});
