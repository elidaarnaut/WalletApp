import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  VirtualizedList,
} from "react-native";

export default function Categories() {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate("InputPage");
  };



  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://127.0.0.1:8000/category";

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get("http://127.0.0.1:8000/category");
         setData(response.data);
         setLoading(false);
       } catch (error) {
         console.error(error);
       }
     };

     fetchData();
   }, []);


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
          <Text style={styles.text}> CATEGORIES </Text>
        </View>

        <View>
          {loading ? (
            <Text>Loading ...</Text>
          ) : (
            data.map((subcategory) => (
              <View style={styles.title} key={subcategory.id}
                ><View style={styles.divider1}></View>
                <View key={subcategory.id}>
                  <Text>{subcategory.name}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: subcategory.imagePath }}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>

    /*<SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.title}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require("../assets/left-arrow.png")}
              style={styles.iconleft}
            />
          </TouchableOpacity>
          <Text style={styles.text}> CATEGORIES </Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.text}> Lifestyle </Text>
        </View>
        <View style={styles.divider1}></View>

        <View style={styles.categorysectionfirst}>
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
        </View>
        <View style={styles.divider}></View>
      </ScrollView>
    </SafeAreaView>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F7F7",
    alignItems: "center",
    marginTop: 20,
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
