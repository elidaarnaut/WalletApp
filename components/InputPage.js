import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';


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
        <Text>INCOME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionsTag}>
        <Text>EXPENSE</Text>
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
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 5,
  },

  optionsTag: {
    backgroundColor: '#CE5959',
    borderWidth: 1,
    width: '49%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },

  inputField: {
    backgroundColor: '#BACDDB',
    height: 690,
    width: '100%',
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
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

});
