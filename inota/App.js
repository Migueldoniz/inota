import React from 'react';
import { StyleSheet } from 'react-native';
import Tab from './componentes/Tab';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InicialScreen from './componentes/Inicial';
import LoginScreen from './componentes/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './componentes/Context';
import CriarConta from './componentes/CriarConta';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getData from './componentes/GetData';
import 'react-native-reanimated'

const Stack = createStackNavigator();

export default function App() {

  //constrola telas
  const initialLoginState = {
    interaction: false,
    userName: null,
    userToken: null,
  }

  const [usuarioLogado, setUsuariosLogados] = React.useState(null)

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
          interaction: false,
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
      const data = await getData(JSON.stringify(username))
      let aux = JSON.parse(data)

      if (aux.password == password) {
        console.log('Senha correta')
        setUsuariosLogados(aux.username)
        dispatch({ type: 'LOGIN', id: aux.username, token: aux.userToken})
      }
      else {
        console.log('errado')
      }

    },
    signOut: async(username) => {
      try {
        console.warn('Usuário', username, 'apagado')
        await AsyncStorage.removeItem(username)
      } catch(e) {
        console.error('Erro ao remover usuário');
      }
      dispatch({ type: 'LOGOUT'})
    },
    signUp: async(data) => {
        try {
          await AsyncStorage.setItem(JSON.stringify(data.username), JSON.stringify(data))
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
          {loginState.userToken != null ? (
            <Stack.Navigator>
            <Stack.Screen 
            initialParams={{usuarioLogado}}
            name="Tab" 
            component={Tab} 
            options={{ headerShown: false }}
            />
          </Stack.Navigator> 
          ) :
          <Stack.Navigator> 
          <Stack.Screen 
          name="CriarConta" 
          component={CriarConta} 
          options={{ headerShown: false }}
          />
        </Stack.Navigator> 
          }    
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
