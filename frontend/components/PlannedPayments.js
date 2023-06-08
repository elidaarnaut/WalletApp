import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";

const { width, height } = Dimensions.get("window");
export default function App() {
  const [payments, setPayments] = useState([
   /* { id: 1, name: "Netflix", amount: 15, date: "March 23", type: "expense" },
    { id: 2, name: "Spotify", amount: 10, date: "April 20", type: "expense" },
    { id: 3, name: "Gym", amount: 30, date: "September 01", type: "expense" },
    { id: 4, name: "Salary", amount: 1000, date: "April 01", type: "income" },
  */]);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/plannedpayment");
         setPayments(response.data);
         console.log(response.data);
         
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayment();
  }, []);

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("HomeScreen");
  };

  const handlePlusPress = () => {
    navigation.navigate("PlannedPaymentInput");
  };


  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.top}>

        {/* BACK BUTTON */}
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require("../assets/left-arrow.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        {/* TITLE */}
        <Text style={styles.text}>Planned Payments</Text>

        {/* SORT */}
        <Image source={require("../assets/sort.png")} style={styles.image} />
      </View>

      {/* BODY SECTION */}
      <View style={styles.kont}>

        <ScrollView>
          {payments.map((payment) => (
            <View key={payment.id} style={styles.payment}>
              <Text style={styles.paymentName}>{payment.name}</Text>
              <Text style={styles.paymentAmount}>${payment.amount}</Text>
              <Text style={styles.paymentDate}>{payment.date}</Text>
              {payment.typeofpayment === 1 ? (
                <View style={styles.incomeBanner}>
                  <Text style={styles.bannerText}>Income</Text>
                </View>
              ) : (
                <View style={styles.expenseBanner}>
                  <Text style={styles.bannerText}>Expense</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text style={styles.button}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlusPress}
        style={styles.plus}>
          <Image
            source={require("../assets/plus.png")}
            style={styles.plusImage}
          />
      </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Expense</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9F7F7",
    paddingTop: 25,
  },
  text: {
    color: "#000",
    fontSize: 25,
  },
  top: {
    //top: 10,
    //flex: 1,
    width: "90%",
    height: "10%",
    paddingHorizontal: 15,
    marginTop: 55,
    flexDirection: "row",
    backgroundColor: "#DBE2EF",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  plusImage: {
    width: 40,
    height: 40,
    alignSelf: "center",
    tintColor: "#FFF",
  },
  plus: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: -30, // half of the width of inputIcon component
    marginTop: -30,
    backgroundColor: "#3F72AF",
  },
  bottom: {
    //flex: 1,
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "#112D4E",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  kont: {
    //flex: 10,
    height: "60%",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DBE2EF",
    borderRadius: 20,
  },
  button: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: "#FFF",
  },
  payment: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  incomeBanner: {
    backgroundColor: "#6DA9E4",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  expenseBanner: {
    backgroundColor: "#EB455F",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bannerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
