import React, { useState, useContext } from "react";
import { SafeAreaView, StatusBar, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Modal,
  } from "react-native";
import { GlobalContext } from "./global";
const OCR_API_KEY = 'K88986161588957';

export default function OCRPage () {
  const [image, setImage] = useState(null);
  const [ocrResult, setOCRResult] = useState(null);
  const { amount, setAmount } = useContext(GlobalContext);
  const { typeofpayment, setPaymentType } = useContext(GlobalContext);
  const { userId } = useContext(GlobalContext);

  const setTypeOfPayment = () => {
    setPaymentType(0);
  };
console.log(amount);
console.log(typeofpayment);
console.log(userId);
  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      console.log('Media library permission not granted');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setTypeOfPayment();
      setImage(result.uri);
      console.log('Selected Image URI:', result.uri);
      performTextRecognition(result.uri);
    }
  };

  const performTextRecognition = async (uri) => {
    const base64Image = await convertImageToBase64(uri);
    const formData = new FormData();
    formData.append('apikey', OCR_API_KEY);
    formData.append('base64image', base64Image);
    formData.append('isOverlayRequired', 'false');

    const response = await fetch('https://api.ocr.space/parse/image', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    console.log('OCR API Response:', result);

    if (result && result.ParsedResults && result.ParsedResults.length > 0) {
      const parsedText = result.ParsedResults[0].ParsedText;
      const words = parsedText.split(/\s+/);
      setOCRResult(words);
      console.log('Recognized Text:', words);
    }
  };

  const convertImageToBase64 = async (uri) => {
    const response = await fetch(uri);
    const imageBlob = await response.blob();
    const base64Data = await imageBlobToBase64(imageBlob);
    return base64Data;
  };

  const imageBlobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  const handleWordSelection = (word) => {
    setAmount(parseFloat(word.replace(",", ".")).toFixed(2));
  };

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("InputTypePage");
  };

  const handleSubmitPress = () => {
    navigation.navigate("Categories");
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress}>
                <Image
                    source={require("../assets/left-arrow.png")}
                    style={styles.image}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Text Recognition</Text>

            <TouchableOpacity onPress={handleSubmitPress}>
                <Image
                    source={require("../assets/correctIcon.png")}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
        
        <Button title="Select Image" onPress={handleSelectImage} style={{ height: 90 }}/>
        {image && <Image source={{ uri: image }} style={{ width: '100%', height: 400, alignItems:"center", justifyContent: "center",}} />}
        {ocrResult ? (
          <View>
            {ocrResult.map((word, index) => (
              <Text
                key={index}
                selectable={true}
                onPress={() => handleWordSelection(word)}
                style={{ marginBottom: 5 }}
              >
                {word}
              </Text>
            ))}
          </View>
        ) : null}
        {amount ? <Text>Selected Word: {amount}</Text> : null}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height:"100%",
        backgroundColor: "#F9F7F7",
        alignContent: "center",
      },
    header: {
        width: "100%",
        height: 80,
        backgroundColor: "#112D4E",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "flex-start",
        paddingHorizontal:20,
         
    },
    image: {
        width: 30,
        height: 30,
        tintColor: "#FFFFFF",
      },
      text:{
        color: "#FFF",
        fontSize:30,
      },
   
});