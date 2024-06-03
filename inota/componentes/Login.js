import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, useContext, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';
import { AuthContext } from './Context'
import getData from './GetData';

const LoginScreen = ({ navigation }) => {
  
  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const [flag, setFlag] = React.useState(false)

  const { signIn } = React.useContext(AuthContext);
  const { changeToSignIn } = React.useContext(AuthContext);

  const checkLogin = async (username, password) => {
    const data = await getData(JSON.stringify(username))
    
  if (username.length == 0) {
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

  else if (password.length == 0) {
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

  else if (data == null) {
        Alert.alert(
            'Usuário não encontrado', 
            'O nome de usuário que está tentando logar não existe',
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
      loginHandle(username, password)
  }
}

  const loginHandle = (username, password) => {
    signIn(username, password);
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
          placeholder="Usuário"
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
          placeholder="Senha"
          placeholderTextColor="white"
          textColor="white"
          secureTextEntry={true}
          onChangeText={val => setData({
            ...data,
            password: val
          })
        }
          />
      <Button 
      mode="contained" 
      buttonColor='white' 
      textColor='#054F77' 
      onPress={() => 
        {checkLogin(data.username, data.password)}
      }
      style={{top:30, width:150}}>
        Entrar
      </Button>
      <Button 
      mode="contained" 
      buttonColor='white' 
      textColor='#054F77' 
      onPress={() => 
        {changeToSignIn()}
      }      style={{top:50, width:150}}>
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
