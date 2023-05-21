import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
export default function Categories() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title></Title>
        <Title1></Title1>
        <Divider1> </Divider1>
        <CategorySection1></CategorySection1>
        <Title2></Title2>
        <Divider></Divider>
        <CategorySection2></CategorySection2>
        <Title3></Title3>
        <Divider></Divider>
        <CategorySection3></CategorySection3>
        <Title4></Title4>
        <Divider></Divider>
        <CategorySection4></CategorySection4>
        <Title5></Title5>

        <Divider></Divider>
        <CategorySection6></CategorySection6>
        <Title6></Title6>
        <CategorySection5></CategorySection5>
      </ScrollView>
    </SafeAreaView>
  );
}

const Title = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate("InputPage");
  };
  return (
    <View style={styles.title}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image source={require("../assets/left.png")} style={styles.iconleft} />
      </TouchableOpacity>

      <Text style={styles.text}> CATEGORIES </Text>
    </View>
  );
};
const Title1 = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> Lifestyle </Text>
    </View>
  );
};
const Title2 = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> Sustenance </Text>
    </View>
  );
};
const Title3 = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> Transport </Text>
    </View>
  );
};
const Title4 = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> Savings/Funds </Text>
    </View>
  );
};

const Title5 = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> Shopping </Text>
    </View>
  );
};
const Title6 = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> House Bills </Text>
    </View>
  );
};

const Divider = () => {
  return <View style={styles.divider}></View>;
};
const Divider1 = () => {
  return <View style={styles.divider1}></View>;
};
// section II of cathegories : sustenance
const CategorySection2 = () => {
  return (
    <View style={styles.categorysection1}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/grocery.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Groceries</Text>
        </TouchableOpacity>
      </View>

      {/* travel section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/coffee-cup.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>CoffeeToGo</Text>
        </TouchableOpacity>
      </View>

      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/shipped.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/restaurant.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Restaurants</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// section I of cathegories : lefestyle

const CategorySection1 = () => {
  return (
    <View style={styles.categorysectionfirst}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/first-aid-kit.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Healthcare</Text>
        </TouchableOpacity>
      </View>

      {/* travel section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/around.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Travel</Text>
        </TouchableOpacity>
      </View>

      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/charity1.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Charity</Text>
        </TouchableOpacity>
      </View>

      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/sportss.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Sports</Text>
        </TouchableOpacity>
      </View>

      {/* gym section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/weight.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Gym</Text>
        </TouchableOpacity>
      </View>

      {/* education section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/graduation-cap.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Education</Text>
        </TouchableOpacity>
      </View>

      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/cocktail.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Drinks</Text>
        </TouchableOpacity>
      </View>

      {/* ent section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/movies.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Amusement</Text>
        </TouchableOpacity>
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
            source={require("../assets/gas-station.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Gas</Text>
        </TouchableOpacity>
      </View>

      {/* travel section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/parking.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Parking</Text>
        </TouchableOpacity>
      </View>

      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/taxi.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Taxi</Text>
        </TouchableOpacity>
      </View>

      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/public-transport.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Transport</Text>
        </TouchableOpacity>
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
            source={require("../assets/financial-profit.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>General</Text>
        </TouchableOpacity>
      </View>

      {/* travel section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/pacifier.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Childcare</Text>
        </TouchableOpacity>
      </View>

      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/holiday.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Vacation</Text>
        </TouchableOpacity>
      </View>

      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/spare-parts.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Car</Text>
        </TouchableOpacity>
      </View>

      {/* gym section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/cash.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Education</Text>
        </TouchableOpacity>
      </View>

      {/* education section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/mindfulness.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Healthcare</Text>
        </TouchableOpacity>
      </View>

      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/house.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Housing</Text>
        </TouchableOpacity>
      </View>

      {/* ent section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/funds.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CategorySection5 = () => {
  return (
    <View style={styles.categorysection1}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/content.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Multimedia</Text>
        </TouchableOpacity>
      </View>

      {/* travel section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/smartphone.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Phone</Text>
        </TouchableOpacity>
      </View>

      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/faucet.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Water</Text>
        </TouchableOpacity>
      </View>

      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/life-insurance.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Insurance</Text>
        </TouchableOpacity>
      </View>

      {/* gym section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/Rent.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Rent</Text>
        </TouchableOpacity>
      </View>

      {/* education section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/electricity-bill.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Electricity</Text>
        </TouchableOpacity>
      </View>

      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/bin.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Garbage</Text>
        </TouchableOpacity>
      </View>

      {/* ent section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/natural-gas.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Gas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CategorySection6 = () => {
  return (
    <View style={styles.categorysection1}>
      {/* healthcare section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/laundry.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Clothes</Text>
        </TouchableOpacity>
      </View>

      {/* travel section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/cosmetics.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Makeup</Text>
        </TouchableOpacity>
      </View>

      {/* charity section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/watch.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Accessories</Text>
        </TouchableOpacity>
      </View>

      {/* gifts section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/shoes.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Shoes</Text>
        </TouchableOpacity>
      </View>

      {/* gym section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/cream.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Skincare</Text>
        </TouchableOpacity>
      </View>

      {/* education section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/nursery.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Nursery</Text>
        </TouchableOpacity>
      </View>

      {/* drinks section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/vacuum-cleaner.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Home Decor</Text>
        </TouchableOpacity>
      </View>

      {/* ent section*/}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/gift-box.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>Gifts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F7F7",
    alignItems: "center",
    justifyContent: "top",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    //fontFamily: 'Arial',
    color: "#112D4E",
  },
  title: {
    //backgroundColor: 'rgb(63, 114, 175)',
    color: "black",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 8,
    marginTop: "3%",
  },
  divider: {
    backgroundColor: "transparent",
    width: "100%",
    height: 25,
    alignItems: "center",
  },
  divider1: {
    backgroundColor: "transparent",
    width: "100%",
    height: 15,
    alignItems: "center",
  },
  categorysection1: {
    backgroundColor: "#DBE2EF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 15,
    marginRight: "3.9%",
    marginLeft: "3.9%",
    paddingBottom: 20,
  },

  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",

    justifyContent: "center",

    marginHorizontal: 15,
    marginVertical: 10,

    shadowColor: "#000", //color of the shadow
    shadowOffset: {
      //offset of the shadow
      width: 3,
      height: 10,
    },

    shadowOpacity: 0.2, //opacity of the shadow
    shadowRadius: 5, //blur radius of the shadow.

    elevation: 15, //used to control the depth of the shadow on Android devices
    backgroundColor: "#3F72AF",
    borderRadius: 10000,
  },
  icon: {
    borderRadius: 1,
    height: 30,
    width: 30,
    marginTop: 25,
  },
  iconText: {
    marginTop: 20,
    fontSize: 8.5,
    textAlign: "center",
    //fontFamily:'Arial',
  },
  iconleft: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginLeft: 10,
    backgroundColor: "#DBE2EF",
    padding: 13,
    borderRadius: 5,
  },
  categorysectionfirst: {
    backgroundColor: "#DBE2EF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 15,
    marginRight: "3.9%",
    marginLeft: "3.9%",
  },
});
