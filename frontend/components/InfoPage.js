import React from "react";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";


export default function InfoPage(){

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate("HomeScreen");
    };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image
                        source={require("../assets/left-arrow.png")}
                        style={styles.icon}
                    ></Image>
                </TouchableOpacity>
                <Text style={styles.H1}>Wallet App</Text>
            </View>

            {/* DIVIDER */}
            <View style={styles.divider}></View>

            <Text style={styles.H2}>Team 4</Text>
            <Text style={styles.H3}>Team Members</Text>
            {/* DIVIDER */}
            <View style={styles.divider}></View>

            <View style={styles.membersBox}>
                <Text style={styles.text}>Amina Kadić</Text>
                <Text>ID: 200302010</Text>
            </View>
            <View style={styles.membersBox}>
                <Text style={styles.text}>Dalila Salčin</Text>
                <Text>ID: 200302037</Text>
            </View>
            <View style={styles.membersBox}>
                <Text style={styles.text}>Kenan Klepić</Text>
                <Text>ID: 200302040</Text>
            </View>
            <View style={styles.membersBox}>
                <Text style={styles.text}>Meliha Kasapović</Text>
                <Text>ID: 200302042</Text>
            </View>
            <View style={styles.membersBox}>
                <Text style={styles.text}>Elida Arnaut</Text>
                <Text>ID: 200302029</Text>
            </View>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#F9F7F7",
      alignItems: "center",
      paddingVertical: 25,
      justifyContent: "space-evenly",
    },
    H1: {
        color: "#F9F7F7",
        fontSize: 35,
        paddingLeft: 20,
    },
    H2: {
        color: "#112D4E",
        fontSize: 30,
    },
    H3: {
        color: "#112D4E",
        fontSize: 27,
    },
    text:{
        color: "#112D4E",
        fontSize: 25,
    },
    divider: {
        backgroundColor: "#112D4E",
        height: 2,
        borderRadius: 20,
        width: "85%",
        marginVertical: 10,
      },
      membersBox: {
        backgroundColor: "#DBE2EF",
        borderRadius: 20,
        width: "80%",
        height: 70,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      header:{
        flexDirection:'row',
        backgroundColor: '#112D4E',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 60,
        
      },
      icon: {
        width: 40,
        height: 40,
        tintColor: "#FFF",
        alignSelf: 'flex-start',
    
      },
    
  });