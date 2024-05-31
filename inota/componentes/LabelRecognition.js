// LabelRecognizerScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { DynamsoftLabelRecognizerPlugin } from 'vision-camera-dynamsoft-label-recognizer';

const LabelRecognizerScreen = ({ navigation }) => {
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      if (status === 'denied') {
        // Handle the case where permission was denied
      }
    })();
  }, []);

  const handleLabelRecognized = (labels) => {
    // Process recognized labels
    console.log(labels);
    // You can navigate to the login screen or handle login logic here
    navigation.navigate('Login');
  };

  if (device == null) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={DynamsoftLabelRecognizerPlugin.processFrame}
        onFrameProcessed={handleLabelRecognized}
        frameProcessorFps={5}
      />
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
    color: 'white',
    marginBottom: 10,
  },
});

export default LabelRecognizerScreen;
