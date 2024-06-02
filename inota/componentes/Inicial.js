// screens/InicialScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import {LoginScreen} from './Login'

const Stack = createStackNavigator();

const InicialScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3800);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../static/images/Inota.png')} 
        style={styles.image}
      />
    <ActivityIndicator animating={true} color='#FFFFFF' style={{top:100}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#054F77',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 92, // Ajuste conforme necessário
    height: 55, // Ajuste conforme necessário
  },
});

export default InicialScreen;
