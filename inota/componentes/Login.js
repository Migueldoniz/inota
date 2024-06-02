import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, useContext } from 'react-native';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';
import { AuthContext } from './Context'

const LoginScreen = ({ navigation }) => {
  
  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        source={require('../static/images/Inota.png')} 
        style={styles.image}
      />
        <TextInput
          style={styles.input}
          underlineColorAndroid="white"
          placeholder="Usuário"
          placeholderTextColor="white"
          textColor="white"
        />
        <TextInput
          style={styles.input}
          blurOnSubmit="true"
          underlineColorAndroid="white"
          placeholder="Senha"
          placeholderTextColor="white"
          textColor="white"
          secureTextEntry={true} 
        />
      <Button 
      mode="contained" 
      buttonColor='white' 
      textColor='#054F77' 
      onPress={() => {signIn()}}
      style={{top:30, width:150}}>
        Entrar
      </Button>
      <Button 
      mode="contained" 
      buttonColor='white' 
      textColor='#054F77' 
      onPress={() => navigation.navigate('Tab')}
      style={{top:50, width:150}}>
        Cadastrar
      </Button>
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
    marginBottom: 20,
  },
  input: {
    margin: 15,
    height: 40,
    width: Dimensions.get('window').width/2,
    borderColor: "transparent",
    borderWidth: 1,
    color: "white",
  },
  image: {
    width: 92, // Ajuste conforme necessário
    height: 55, // Ajuste conforme necessário
    bottom: 100,
  },
});

export default LoginScreen;
