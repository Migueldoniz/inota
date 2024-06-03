import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LabelRecognizerScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.overlay}>
        <Text style={styles.text}>Scan your label</Text>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});

export default LabelRecognizerScreen;
