import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Title></Title>
        <Divider></Divider>
        <CategorySection1></CategorySection1>
        <Divider></Divider>
        <CategorySection2></CategorySection2>
        <Divider></Divider>
        <CategorySection3></CategorySection3>
        <Divider></Divider>
        <CategorySection4></CategorySection4>

      </ScrollView>
    </SafeAreaView>
  );
}

const Title = () => {
  return(
    <View style={styles.title}>
      <Image
        source={require('wallet-app/assets/left.png')}
        style={styles.iconleft}
      />
    <Text style={styles.text}>CATEGORIES </Text>
    </View>
  );
};

const Divider = () => {
  return(
    <View style={styles.divider}></View>
  );
};
// section II of cathegories : sustenance 
const CategorySection2 = () => {
  return (
    <View style={styles.categorysection1}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}> 
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/groceries.png')}
            style={styles.icon}
          />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity> 
      </View>
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/coffee.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/delivery.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/restaurant.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      
    </View>
  );
};
// section I of cathegories : lefestyle

const CategorySection1 = () => {
  return (
    <View style={styles.categorysection1}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}> 
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/healthcare.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity> 
      </View>
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/travel.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/charity.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/sports.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* gym section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/gym.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* education section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/education.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/drinks.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* ent section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/entertainment.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
    </View>
  );
};

//Section III - transport 

const CategorySection3 = () => {
  return (
    <View style={styles.categorysection1}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}> 
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/gas.png')}
            style={styles.icon}
          />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity> 
      </View>
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/parking.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/taxi.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/publictransport.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      
    </View>
  );
};
// section IV - Savings
const CategorySection4 = () => {
  return (
    <View style={styles.categorysection1}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}> 
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/general.png')}
            style={styles.icon}
          />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity> 
      </View>
      
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/babyfund.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require('wallet-app/assets/vacationfund.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>x</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/carfund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* gym section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/educationfund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* education section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/healthcarefund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/housing.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x</Text>
      </View>
      {/* ent section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/shoppingfund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>x </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246, 246, 233)',
    alignItems: 'center',
    justifyContent: 'top',
  },
  text: {
    fontSize: 25,
    //fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  title: {
    backgroundColor: 'rgba(209, 81, 45, 0.85)',
    color: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  divider: {
    backgroundColor: '#F5C7A9',
    width: '100%',
    height: 3,
    alignItems: 'center',
  },
  categorysection1: {
    backgroundColor: 'rgb(245, 232, 228)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
  iconContainer: {
    width: 55,
    height:70,
  
    alignItems: 'center',
    marginHorizontal: 10,
    
    justifyContent: 'center',
    shadowColor: '#000', //color of the shadow
    shadowOffset: { //offset of the shadow
      width: 3,
      height: 10,},
      shadowOpacity: 0.2, //opacity of the shadow
    shadowRadius: 5, //blur radius of the shadow.

    elevation: 15, //used to control the depth of the shadow on Android devices
    
  },
  icon: {
    
    height: 40,
    width: 40,
    backgroundColor: 'blue',
    
    


    
  },
  iconText: {
    marginTop: 5,
    fontSize: 10,
    textAlign: 'center',
    fontFamily:'Arial', 
  },
  iconleft: {
    width: 24,
    height: 24,
    marginRight: 10,

  }, 
});
