import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import InputTypePage from './components/InputTypePage';
import Budget from './components/Budget';
import PlannedPayments from './components/PlannedPayments';
import Converter from './components/Converter';
import InputPage from './components/InputPage';
import Categories from './components/Categories';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InputTypePage"
          component={InputTypePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Budget"
          component={Budget}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlannedPayments"
          component={PlannedPayments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Converter"
          component={Converter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InputPage"
          component={InputPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
