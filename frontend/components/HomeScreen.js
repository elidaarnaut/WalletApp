import React, { useState, useEffect, Component } from "react";
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
import PieChart from "react-native-pie-chart";

export default function HomeScreen() {
  const window = Dimensions.get("window");

  const [record, setRecord] = useState([]);
  const [data, setData] = useState([]);

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

    fetchRecord();
  }, []);

  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.userButton} onPress={handleLoginPress}>
          <Image
            source={require("../assets/user.png")}
            style={styles.userIcon}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/info.png")}
            style={styles.userButton}
          ></Image>
        </TouchableOpacity>
      </View>
      <GraphSlider> </GraphSlider>
      <ScrollView style={styles.scrollView}>
        {record.map((record) => {
          return (
            <View
              style={
                record.typeofpayment == 0
                  ? styles.spendingItem2
                  : styles.spendingItem
              }
              key={record.id}
            >
              <View>
                <Text style={styles.itemTitle}>
                  Category: {record.category_name}{" "}
                </Text>
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

class TestChart extends Component {
  render() {
    const widthAndHeight = 200;
    const series = [20, 30, 10];
    const sliceColor = ["#3F72AF", "#112D4E", "#F9F7F7"];

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.cont}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
        </View>
      </ScrollView>
    );
  }
}
const GraphSlider = () => {
  const window = Dimensions.get("window");
  return (
    <View style={[styles.graphSlider, { minWidth: window.width }]}>
      <ScrollView horizontal={true}>
        <View style={[styles.sliderCard, { width: window.width * 0.82 }]}>
          <TestChart></TestChart>
        </View>
        <View style={[styles.sliderCard, { width: window.width * 0.82 }]}>
          <TestChart></TestChart>
        </View>
      </ScrollView>
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
  cont: {
    flex: 1,
    alignItems: "center",
  },
  tit: {
    fontSize: 24,
    margin: 10,
  },
  container: {
    height: "100v",
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
  },
  spendingItem: {
    width: "90%",
    height: 70,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#DBE2EF",
    flexDirection: "row",

    alignSelf: "center",
    shadowColor: "#03C988", //color of the shadow
    shadowOffset: {
      //offset of the shadow
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.57, //opacity of the shadow
    shadowRadius: 6.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },
  spendingItem2: {
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
    shadowColor: "#EB6440", //color of the shadow
    shadowOffset: {
      //offset of the shadow
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.57, //opacity of the shadow
    shadowRadius: 6.65, //blur radius of the shadow.

    elevation: 9, //used to control the depth of the shadow on Android devices
  },

  itemTitle: {
    fontWeight: "500",
    fontSize: 15,
    color: "#112D4E",
  },
  itemMoney: {
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
