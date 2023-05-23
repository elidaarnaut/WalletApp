import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { DateTimePickerModal } from 'react-native-modal-datetime-picker';

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

  // const dismissKeyboard = () => {
  //   Keyboard.dismiss();
  // };

  // const handleDateConfirm = (date) => {
  //   setSelectedDate(date);
  //   hideDatePicker();
  // };

  // const showDatePicker = () => {
  //   setDatePickerVisible(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisible(false);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name</Text>
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
        {/* <TouchableOpacity style={styles.dismissButton} onPress={dismissKeyboard}>
          <Text style={styles.dismissButtonText}>Dismiss</Text>
        </TouchableOpacity> */}
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

      {/* <View style={styles.box}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
          <Text style={styles.datePickerButtonText}>
            {selectedDate ? selectedDate.toLocaleDateString() : 'Select date'}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </View> */}
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
    height: '20%',
    backgroundColor: '#DBE2EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
