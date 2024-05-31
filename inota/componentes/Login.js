// LoginScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Scan Label" onPress={() => navigation.navigate('LabelRecognizer')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LoginScreen;
