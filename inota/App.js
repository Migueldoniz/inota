import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tab from './componentes/Tab';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InicialScreen from './componentes/Inicial';
import LoginScreen from './componentes/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LabelRecognizerScreen from './componentes/LabelRecognition';
const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
            name="InicialScreen" 
            component={InicialScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen name="LabelRecognizer" component={LabelRecognizerScreen} />
        </Stack.Navigator> 
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
