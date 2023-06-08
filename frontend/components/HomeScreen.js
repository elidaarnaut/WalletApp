import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  VirtualizedList,
} from "react-native";
import axios from "axios";

// Latest version of the Code, 15.05

/* async function fetchRecords() {
        try {
                let response = await fetch('http://127.0.0.1:8000/record');
                let responseJsonData = await response.json();
                console.log(responseJsonData);
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }*/
export default function HomeScreen() {
  const window = Dimensions.get("window");

  const [record, setRecord] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategories] = useState([]);
  const [subcategory, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/record");
        setRecord(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/category");
        setData(response.data);
        ///console.log(response.data);
        setCategories(response.data.category);
        setSubcategories(response.data.subcategory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecord();
    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      {/* StatusBar style="auto" means that the time, battery icon, wifi icon and similar will be visible on the phone
      The auto property means it will adjust based on the backgrond color, e.g white background -> dark icons and time */}
      <StatusBar style="auto" />
      <View style={styles.header}>
        <MonthSlider></MonthSlider>
        <TouchableOpacity style={styles.userButton}>
          <Image
            source={require("../assets/user.png")}
            style={styles.userIcon}
          ></Image>
        </TouchableOpacity>
      </View>
      <GraphSlider />
      <ScrollView style={styles.scrollView}>
        {record.map((record) => {
          let filter = [];

          if (record.subcategoryid >= 1) {
            if (
              subcategory.filter((sub) => sub.id === record.subcategoryid)
                .length != 0
            ) {
              filter = subcategory.filter(
                (sub) => sub.id === record.subcategoryid
              );
            }
            console.log(filter);
          } else if (!record.subcategoryid) {
            filter = category.filter((cat) => cat.id === record.categoryid);
          } else {
            filter = [
              {
                name: "Healthcare",
              },
            ];
          }
          return (
            <View style={styles.spendingItem} key={record.id}>
              <View>
                <Text style={styles.itemTitle}>Category: {filter.name} </Text>
                <Text style={styles.itemMoney}>Amount: {record.amount}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Menu></Menu>
    </View>
  );
}

/*


/*
const SpendingsItem = () => {
  return (
    <View style={styles.spendingItem}>
      <Text style={styles.itemTitle}>Spending Item</Text>
      <Text style={styles.itemMoney}>24 KM</Text>
      <Image
        source={require("../assets/right-arrowW.png")}
        style={styles.rightArrow}
      />
    </View>
  );
};

const SpendingsView = () => {
  return (
     <ScrollView style={styles.scrollView}>
      <View style={styles.spendingItem}>
      {subcategory.map((subcategory) => (
        
          <Text style={styles.itemTitle} key={subcategory.id}>{subcategory.name}</Text>
        
      ))}
        {record.map((record) => (
          <Text style={styles.itemMoney} key={record.id}>{record.amount}</Text>
      
      ))}
      <Image
        source={require("../assets/right-arrowW.png")}
        style={styles.rightArrow}
      />
    </View>

   </ScrollView>
      
    
  );
};
*/

const GraphSlider = () => {
  const window = Dimensions.get("window");
  return (
    <View style={[styles.graphSlider, { minWidth: window.width }]}>
      <ScrollView horizontal={true}>
        <View style={[styles.sliderCard, { width: window.width * 0.8 }]}>
          <Image
            source={require("../assets/pie-graph.png")}
            style={styles.graphs}
          />
        </View>
        <View style={[styles.sliderCard, { width: window.width * 0.8 }]}>
          <Image
            source={require("../assets/pie-graph.png")}
            style={styles.graphs}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const MonthSlider = () => {
  return (
    <View style={styles.monthlySlider}>
      <TouchableOpacity>
        <Image
          source={require("../assets/left-arrowW.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>April</Text>
      <TouchableOpacity>
        <Image
          source={require("../assets/right-arrowW.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const Menu = () => {
  const navigation = useNavigation();
  const handleHomeScreenPress = () => {
    navigation.navigate("HomeScreen");
  };

  const handlePlusButtonPress = () => {
    navigation.navigate("InputTypePage");
  };

  const handleConverterPress = () => {
    navigation.navigate("Converter");
  };

  const handleBudgetPress = () => {
    navigation.navigate("Budget");
  };

  const handlePlannedPaymmentPress = () => {
    navigation.navigate("PlannedPayments");
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={handleHomeScreenPress}>
        <Image source={require("../assets/home.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBudgetPress}>
        <Image source={require("../assets/budget.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inputIcon}
        onPress={handlePlusButtonPress}
      >
        <Image source={require("../assets/plus1.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlannedPaymmentPress}>
        <Image
          source={require("../assets/plannedpayment.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleConverterPress}>
        <Image
          source={require("../assets/calculator.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F9F7F7",
    paddingTop: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  menu: {
    backgroundColor: "#112D4E",
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  text: {
    padding: 5,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: "#FFFFFF",
  },
  userIcon: {
    width: 40,
    height: 40,
    tintColor: "#112D4E",
    alignSelf: "center",
    justifyContent: "center",
  },
  userButton: {
    width: 45,
    height: 45,
  },
  inputIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#3F72AF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: -30, // half of the width of inputIcon component
    marginTop: -30, // half of the height of inputIcon component
    transform: [{ scale: 1.1 }], // add a scale transformation to enlarge the inputIcon by 10%
    shadowColor: "#000", //color of the shadow
    shadowOffset: {
      //offset of the shadow
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.47, //opacity of the shadow
    shadowRadius: 8.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },
  monthlySlider: {
    backgroundColor: "#112D4E",
    color: "white",
    width: "60%",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  titleText: {
    color: "white",
    fontWeight: "600",
    fontSize: 25,
  },
  graphs: {
    height: 200,
    width: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
  graphSlider: {
    width: "100%",
    alignSelf: "center",
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  sliderCard: {
    width: "100%",
    backgroundColor: "#DBE2EF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 10,
    padding: 20,
  },
  scrollView: {
    width: "90%",
    paddingTop: 10,
    marginBottom: 100,
    paddingBottom: 300,
    flexDirection: "column",
    height: "70%",
    //borderColor: '#000',
    //borderStyle: 'solid'
  },
  spendingItem: {
    width: "90%",
    height: 70,
    borderRadius: 20,
    margin: 10,
    //paddingLeft: 20,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#DBE2EF",
    flexDirection: "row",

    alignSelf: "center",
    shadowColor: "#000", //color of the shadow
    shadowOffset: {
      //offset of the shadow
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37, //opacity of the shadow
    shadowRadius: 6.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },
  itemTitle: {
    //  fontFamily: 'Arial',
    fontWeight: "500",
    fontSize: 15,
    color: "#112D4E",
  },
  itemMoney: {
    //fontFamily: 'Arial',
    fontWeight: "500",
    fontSize: 15,
    color: "#112D4E",
  },
  rightArrow: {
    width: 35,
    height: 35,
    tintColor: "#112D4E",
  },
});
