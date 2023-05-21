import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

export default function Converter() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Menu></Menu>
      <MenuOutput></MenuOutput>


    </View>
  );
}

const Header = () => {
  const navigation = useNavigation();
  const handleBackArrowPress = () => {
    navigation.navigate('HomeScreen');
  }

  return(  
    <View  style={styles.header}>
      <TouchableOpacity onPress={handleBackArrowPress}>
        <Image 
        source={require('se-project/assets/cancelIcon.png')}
        style={styles.inputPageIcon}
        />
      </TouchableOpacity>  

      <TouchableOpacity>
        <Image 
        source={require('se-project/assets/correctIcon.png')}
        style={styles.inputPageIcon}
        />
      </TouchableOpacity> 

  </View>);

};

const Options = () => {
  return(
    <View style={styles.options}>
      <TouchableOpacity style={styles.optionsTag}>
        <Text style={styles.textOP}>CONVERTER</Text>
      </TouchableOpacity>

    </View>
  );
};


const InputField = () => {
  return(
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.inputField}>
        <TextInput variant="standard" label="Label"
        style={styles.input}
        keyboardType='numeric'
        />
        <Text style={styles.inputText}>BAM</Text>
        
      </View>
      
      
    </TouchableWithoutFeedback>

  );
};

const Output = () => {
  return(
    <View style={styles.output}>

        <TextInput variant="standard" label="Label"
        style={styles.input}
        keyboardType='numeric'
        />
        <Text style={styles.inputText}>EUR</Text>


    </View>
  );
};

const Menu = () => {
  const options = ['BAM', 'EUR', 'USD', 'GBP', 'RSD', 'CHF', 'AED', 'TRY', 'SEK', 'RUB'];
  const [selectedOption, setSelectedOption] = useState('');
  const [visible, setVisible] = useState(false);


  const handleSelect = (option) => {
    setSelectedOption(option);
    setVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.select}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.textOP}>Select Currency</Text>
      </TouchableOpacity>
      
      <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.inputField}>
        <TextInput variant="standard" label="Label"
        style={styles.input}
        keyboardType='numeric'
        />
        <Text style={styles.inputText}>{selectedOption}</Text>
        
      </View>
      
    </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.menuOptions}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelect(option)}
              style={{ padding: 10 }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => setVisible(false)} style={{ padding: 10 }}>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Cancel</Text>
          </TouchableOpacity>

          
        </View>

      </Modal>
      {/*<Text>Selected Option: {selectedOption}</Text>*/}
      
    </View>

    
    </TouchableWithoutFeedback>
    
  );
};

const MenuOutput = () => {
  const options = ['BAM', 'EUR', 'USD', 'GBP', 'RSD', 'CHF', 'AED', 'TRY', 'SEK', 'RUB'];
  const [selectedOption, setSelectedOption] = useState('');
  const [visible, setVisible] = useState(false);


  const handleSelect = (option) => {
    setSelectedOption(option);
    setVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.selectOutput}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.textOP}>Select Currency</Text>
      </TouchableOpacity>
      
      <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.inputField}>
        <TextInput variant="standard" label="Label"
        style={styles.input}
        keyboardType='numeric'
        />
        <Text style={styles.inputText}>{selectedOption}</Text>
        
      </View>
      
    </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.menuOptions}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelect(option)}
              style={{ padding: 10 }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => setVisible(false)} style={{ padding: 10 }}>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Cancel</Text>
          </TouchableOpacity>

          
        </View>

      </Modal>
      {/*<Text>Selected Option: {selectedOption}</Text>*/}
      
    </View>

    
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#112D4E',
    height: '11%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 20,
  },

  inputPageIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
    alignSelf: 'center',
  },

  options: {
    //backgroundColor: '#CE5959',
    width: '100%',
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingHorizontal: 5,
    marginVertical: 10,
  },

  optionsTag: {
    backgroundColor: '#3F72AF',
    width: '45%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    

  },

  inputField: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingRight: 0,

  },

  input: {
    height: 60,
    width: 200,
    margin: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 0,
    fontSize: 60,
  },

  inputText: {
    fontSize: 20
  },

  output: {
    backgroundColor: '#F9F7F7',
    height: '25%',
    width: '100%',
    position: 'absolute',
    top: 340,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'top',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,

  },
  textOP: {
    color: '#FFF',
    fontWeight: '600',
  },

  select: {
    
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#3F72AF',
    position: 'absolute',
    top: 120,
    width: '45%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

  },

  menuOptions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F7F7',

    

  },

  selectOutput: {
    
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#3F72AF',
    position: 'absolute',
    top: 350,
    width: '45%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

  },


});
