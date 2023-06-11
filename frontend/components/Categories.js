import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { GlobalContext } from "./global";

export default function Categories() {
  const {
    amount,
    typeofpayment,
    userId,
    categoryId,
    setCategoryId,
    subcategoryId,
    setSubcategoryId,
  } = useContext(GlobalContext);

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate("InputPage");
  };

  const [data, setData] = useState([]);
  const [category, setCategories] = useState([]);
  const [subcategory, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/category");
        setData(response.data);
        setCategories(response.data.category);
        setSubcategories(response.data.subcategory);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubcategoryPress = (subcat) => {
    setCategoryId(subcat.categoryid);
    setSubcategoryId(subcat.id);
  };

  console.log("odavdje");
  console.log(userId);
  console.log(amount);
  console.log(typeofpayment);
  console.log(categoryId);
  console.log(subcategoryId);

  const handleSubmitPress = async () => {
    try {
      const recordData = JSON.stringify({
        typeofpayment: typeofpayment,
        subcategoryid: subcategoryId,
        categoryid: categoryId,
        amount: amount,
        userid: userId,
      });

      const response = await fetch("http://127.0.0.1:8000/record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: recordData,
      });

      if (response.ok) {
        console.log("Record created successfully");
        // Handle successful response here
        navigation.navigate("Budget");
      } else {
        console.error("Failed to create record");
        // Handle error response here
      }
    } catch (error) {
      console.error(error);
      // Handle network or other errors here
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.title}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require("../assets/left-arrow.png")}
              style={styles.iconleft}
            />
          </TouchableOpacity>
          <Text style={styles.text}>CATEGORIES</Text>
          <TouchableOpacity onPress={handleSubmitPress}>
            <Image
              source={require("../assets/correctIcon.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <View>
          {loading ? (
            <Text>Loading ...</Text>
          ) : (
            <View style={styles.categoryContainer}>
              {category.map((cat) => (
                <View key={cat.id}>
                  <Text style={styles.categoryTitle}>{cat.name}</Text>
                  {/* DIVIDER */}
                  <View style={styles.divider}></View>

                  <View style={styles.subcategoryContainer}>
                    {subcategory
                      .filter((subcat) => subcat.categoryid === cat.id)
                      .map((subcat) => (
                        <TouchableOpacity
                          key={subcat.id}
                          style={styles.iconContainer}
                          onPress={() => handleSubcategoryPress(subcat)}
                        >
                          <Text style={styles.iconText}>{subcat.name}</Text>
                        </TouchableOpacity>
                      ))}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F7F7",
    paddingTop: 20,
    display: "flex",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#112D4E",
    flex: 1, // Take up remaining space
    textAlign: "center", // Center text
  },
  title: {
    backgroundColor: "#F9F7F7",
    flexDirection: "row", // Update to row direction
    alignItems: "center", // Align items vertically
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  categoryContainer: {
    marginVertical: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 10,
    textAlign: "center",
    color: "#112D4E",
  },
  subcategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F9F7F7",
    borderRadius: 10,
  },
  iconContainer: {
    width: "48%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
    backgroundColor: "#3F72AF",
    borderRadius: 10000,
  },
  iconText: {
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    fontWeight: 500,
  },
  iconleft: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginLeft: 5,
    backgroundColor: "#F9F7F7",
    padding: 10,
    borderRadius: 5,
  },
  divider: {
    backgroundColor: "#112D4E",
    height: 2,
    borderRadius: 20,
    width: "85%",
    marginVertical: 10,
    alignSelf: "center",
  },
});
