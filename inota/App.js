import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Tab from './componentes/Tab';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InicialScreen from './componentes/Inicial';
import LoginScreen from './componentes/Login';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { AuthContext } from './componentes/Context';
import CriarConta from './componentes/CriarConta';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import LabelRecognizerScreen from './componentes/LabelRecognition';
const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  // const [userToken, setUserToken] = React.useState(null);
  // const [interaction, setInteraction] = React.useState(false)

  const initialLoginState = {
    interaction: false,
    userName: null,
    userToken: null,
  }

  loginReducer = (prevState, action) => {
    switch(action.type) {
        case 'LOGIN':
          return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          interaction: true,
          };
        case 'LOGOUT':
          return {
          ...prevState,
          userName: null,
          userToken: null,
          interaction: false,
          };
        case 'REGISTER':
          return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          interaction: true,
          };
        case 'GOBACK' :
          return {
          ...prevState,
          userName: null,
          userToken: null,
          interaction: false,
          }
          case 'CHANGESIGNIN' :
            return {
            ...prevState,
            userName: null,
            userToken: null,
            interaction: true,
            }
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
  
  const authContext = React.useMemo(() => ({
    signIn: async(username, password) => {
        try {
          await AsyncStorage.getItem('username')
          .then(user => {
            if (user != null) {
              AsyncStorage.getItem('password')
              .then(pass => {
                if (pass != null) {
                  dispatch({ type: 'LOGIN', id: username, token: userToken})
                }
              })
            }
            else {
              Alert.alert(
                'Login ou senha inválido', 
                'Login senha não cadastrado, deseja cadastrar?',
                [
                    {text: 'sim', onPress: () =>  
                      dispatch({type: 'LOGIN', id: null, token: null})},
                    {text: 'não'}
                ],
                {
                    cancelable: false,
                }
            )
            }
          })
        } catch(e) {
          console.error('Erro ao buscar usuário');
        }
    },
    signOut: async() => {
      // setUserToken(null)
      // setInteraction(false)
      try {
        await AsyncStorage.removeItem('userToken')
      } catch(e) {
        console.error('Erro ao remover usuário');
      }
      dispatch({ type: 'LOGOUT'})
    },
    signUp: async(data) => {
      // setUserToken(Math.random() * 1000)
      // setInteraction(false)
        try {
          await AsyncStorage.setItem('user', JSON.stringify(data))
        } catch(e) {
          console.error('Erro ao cadastrar usuário');
        }
      dispatch({ type: 'REGISTER', id: data.username, token: data.userToken})
    },
    goBack: () => {
      dispatch({ type: 'GOBACK'})
    },
    changeToSignIn: () => {
      dispatch({ type: 'CHANGESIGNIN'})
    }
  }))

  async function loadUsers() {
    //TODO
  }

  React.useEffect(() => {
    //TODO
    const fetchData = async () => {
      const data = await fetchData()
    }
})

  return (
    <SafeAreaView style={{flex:1}}>
      <AuthContext.Provider value={authContext}>
      {loginState.interaction != true ? (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="InicialScreen">
        <Stack.Screen 
            name="InicialScreen" 
            component={InicialScreen} 
            options={{ headerShown: false }}
            />
        <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ headerShown: false }}
            />
          </Stack.Navigator>
          </NavigationContainer>
      ) :
          <NavigationContainer>
          <Stack.Navigator> 
          {loginState.userToken != null ? (
            <Stack.Screen 
            name="Tab" 
            component={Tab} 
            options={{ headerShown: false }}
            />
          ) :
          <Stack.Screen 
          name="CriarConta" 
          component={CriarConta} 
          options={{ headerShown: false }}
          />
          }    
        </Stack.Navigator> 
      </NavigationContainer>
      }

      </AuthContext.Provider>
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
