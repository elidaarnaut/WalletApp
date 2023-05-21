import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function InputPage() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Testttttx</Text>
      <Text>Testttttx</Text>

      <Header></Header>
      <Options></Options>
      <InputField></InputField>
    </View>
  );
}

const Header = () => {
  const navigation = useNavigation();

  const handleCheckPress = () => {
    navigation.navigate('Categories');
  }

  const handleBackPress = () => {
    navigation.navigate('HomeScreen');
  }
  return(  
    <View  style={styles.header}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image 
        source={require('se-project/assets/cancelIcon.png')}
        style={styles.inputPageIcon}
        />
      </TouchableOpacity>  

      <TouchableOpacity onPress={handleCheckPress}>
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
        <Text style={styles.optionsText}>INCOME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionsTag}>
        <Text style={styles.optionsText}>EXPENSE</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F7',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    //paddingHorizontal: 10,
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
    height: '5%',
    width: '100%',
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    paddingBottom: 5,
    paddingHorizontal: 5,
    marginVertical: 20,
  },

  optionsTag: {
    backgroundColor: '#3F72AF',
    //borderWidth: 1,
    width: '45%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,

  },

  inputField: {
    backgroundColor: '#F9F7F7',
    height: '70%',
    width: '100%',
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingBottom: 200,
    paddingHorizontal: 20,

  },

  input: {
    height: 100,
    width: 200,
    margin: 12,
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 60,
  },

  inputText: {
    fontSize: 40
  },
  optionsText: {
    color: '#FFF',
    fontWeight: '600',
  },

});
