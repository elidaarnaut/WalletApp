
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Testttttx</Text>
      <Text>Testttttx</Text>

      <Header></Header>
      <Options></Options>
      <InputField></InputField>
      <Output></Output>
    </View>
  );
}

const Header = () => {
  return(  
    <View  style={styles.header}>
      <TouchableOpacity>
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
        <Text>CONVERTER</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: '#89375F',
    height: 100,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 10,
  },

  inputPageIcon: {
    width: 30,
    height: 30,
  },

  options: {
    backgroundColor: '#CE5959',
    height: 60,
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
  },

  optionsTag: {
    backgroundColor: '#CE5959',
    width: '49%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },

  inputField: {
    backgroundColor: '#BACDDB',
    height: 180,
    width: '100%',
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'top',
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingHorizontal: 20,

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
    fontSize: 40
  },

  output: {
    backgroundColor: '#BACDDB',
    height: 510,
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


});
