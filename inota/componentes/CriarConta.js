import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';
import { AuthContext } from './Context'
import getData from './GetData';

const LoginScreen = ({ navigation }) => {
  
  const [data, setData] = React.useState({
    username: '',
    password: '',
    samePassword: '',
    items: [],
    userToken: Math.random() * 100,
  });
  const [flag, setFlag] = React.useState(false)

  const { signUp } = React.useContext(AuthContext);
  const { goBack } = React.useContext(AuthContext);


  const checkLogin = async(data) => {
      const dados = await getData(JSON.stringify(data.username))

      if (dados != null) {
            Alert.alert(
                'Usuário já cadastrado', 
                'O nome de usuário que está tentando cadastrar já foi utilizado, tentre outro',
                [
                    {text: 'Ok', onPress: () =>  setFlag(false)}
                ],
                {
                    cancelable: false,
                }
            )
        }
        else if (data.username.length == 0) {
            Alert.alert(
                'Nome inválido', 
                'O campo de nome não pode ser vazio',
                [
                    {text: 'Ok', onPress: () =>  setFlag(false)}
                ],
                {
                    cancelable: false,
                }
            )
        }
        else if (data.password.length == 0) {
            Alert.alert(
                'Senha inválida', 
                'O campo de senha não pode ser vazio',
                [
                    {text: 'Ok', onPress: () =>  setFlag(false)}
                ],
                {
                    cancelable: false,
                }
            )
        }
      else if (data.password != data.samePassword) {
          Alert.alert(
              'Senhas diferentes', 
              'As senhas devem coincidir',
              [
                  {text: 'Ok', onPress: () =>  setFlag(false)}
              ],
              {
                  cancelable: false,
              }
          )
      }
    else {
        setFlag(true)
    }

    if (flag == true) {
        registerHandle(data)
    }
  }

  const registerHandle = (data) => {
    signUp(data);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../static/images/Inota.png')} 
        style={styles.image}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="white"
          placeholder="Registre um usuário"
          placeholderTextColor="white"
          textColor="white"
          onChangeText={val => setData({
            ...data,
            username: val
          })
        }
          />
        <TextInput
          style={styles.input}
          blurOnSubmit="true"
          underlineColorAndroid="white"
          placeholder="Registre uma senha"
          placeholderTextColor="white"
          textColor="white"
          secureTextEntry={true}
          onChangeText={val => setData({
            ...data,
            password: val
          })
        }
          />
        <TextInput
          style={styles.input}
          blurOnSubmit="true"
          underlineColorAndroid="white"
          placeholder="Repita a senha"
          placeholderTextColor="white"
          textColor="white"
          secureTextEntry={true}
          onChangeText={val => setData({
            ...data,
            samePassword: val
          })
        }
          />
      <Button 
      mode="contained" 
      buttonColor='white' 
      textColor='#054F77' 
      onPress={() => 
        {checkLogin(data)}
      }
      style={{top:30, width:150}}>
        Registrar
      </Button>
      <Button 
      mode="contained" 
      buttonColor='white' 
      textColor='#054F77' 
      onPress={() => goBack()}      
      style={{top:50, width:150}}>
        Voltar
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
