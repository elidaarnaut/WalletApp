import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Categories() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title><Text style={styles.text}>CATEGORIES </Text></Title>
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
    <View style={styles.title}><Text style={styles.text}>CATEGORIES </Text></View>
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
          <Text style={styles.iconText}>Groceries</Text>
        </TouchableOpacity> 
      </View>
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/coffee.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>Coffe/Bar</Text>
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
          <Text style={styles.iconText}>Delivery</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/restaurant.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Restaurant</Text>
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
          />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.iconText}>Healthcare</Text>
        </TouchableOpacity> 
      </View>
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/travel.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>Travel</Text>
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
          <Text style={styles.iconText}>Charity</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/gifts.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Gifts</Text>
      </View>
      {/* gym section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/gym.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Gym</Text>
      </View>
      {/* education section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/education.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Education</Text>
      </View>
      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/drinks.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Drinks</Text>
      </View>
      {/* ent section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/entertainment.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Entertainment</Text>
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
          <Text style={styles.iconText}>Gas</Text>
        </TouchableOpacity> 
      </View>
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/parking.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>Parking</Text>
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
          <Text style={styles.iconText}>Taxi</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/publictransport.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Public Transport</Text>
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
          <Text style={styles.iconText}>General</Text>
        </TouchableOpacity> 
      </View>
      
      
      {/* travel section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/babyfund.png')}
          style={styles.icon}
        /> 
        <Text style={styles.iconText}>Baby Fund</Text>
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
          <Text style={styles.iconText}>Vacation Fund</Text>
        </TouchableOpacity>
      </View>
      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/carfund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Car Fund</Text>
      </View>
      {/* gym section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/educationfund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>School</Text>
      </View>
      {/* education section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/healthcarefund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Medical</Text>
      </View>
      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/housing.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Housing</Text>
      </View>
      {/* ent section*/}
      <View style={styles.iconContainer}>
        <Image
          source={require('wallet-app/assets/shoppingfund.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Shopping Fund </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 7.5,
    
  },
  icon: {
    borderRadius: 10,
    height: 45,
    width: 45,
    
  },
  iconText: {
    marginTop: 5,
    fontSize: 10,
    textAlign: 'center',
    fontFamily:'Arial', 
  },
});
