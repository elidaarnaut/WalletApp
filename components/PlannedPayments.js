import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");
export default function App() {
  const [payments, setPayments] = useState([
    { id: 1, name: "Netflix", amount: 15, date: "March 23", type: "expense" },
    { id: 2, name: "Spotify", amount: 10, date: "April 20", type: "expense" },
    { id: 3, name: "Gym", amount: 30, date: "September 01", type: "expense" },
    { id: 4, name: "Salary", amount: 1000, date: "April 01", type: "income" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require("./assets/search.png")} style={styles.image} />
        <Text style={styles.text}>Planned Payments</Text>
        <Image source={require("./assets/sort.png")} style={styles.image} />
      </View>
      <View style={styles.kont}>
        <ScrollView>
          {payments.map((payment) => (
            <View key={payment.id} style={styles.payment}>
              <Text style={styles.paymentName}>{payment.name}</Text>
              <Text style={styles.paymentAmount}>${payment.amount}</Text>
              <Text style={styles.paymentDate}>{payment.date}</Text>
              {payment.type === "income" ? (
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
          <Image source={require("./assets/plus.png")} style={styles.image} />
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text style={styles.button}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Income</Text>
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

    backgroundColor: "#BAD7E9",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingBottom: Platform.OS === "android" ? 25 : 0,
  },
  text: {
    color: "#FCFFE7",
    fontSize: 20,
  },
  top: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
    top: 20,
    backgroundColor: "#13334C",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 27,
    height: 27,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#6DA9E4",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  kont: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    fontSize: 20,
  },
  payment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
