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

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Textbar': require('./static/fonts/LibreBarcode128Text-Regular.ttf'),
    });
    setFontsLoaded(true);
    // Esconde a tela de splash após carregar as fontes
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Aguardando as fontes carregarem
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
            name="InicialScreen" 
            component={InicialScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
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
