import React from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { AuthContext } from './Context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tab from './Tab';

const Stack = createStackNavigator();

const loginDados = () => {
  const [userToken, setUserToken] = React.useState(234);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken(Math.random() * 1000)
    },
    signOut: () => {
      setUserToken(null)
    },
    signUp: () => {
      setUserToken(Math.random() * 1000)
    },
  }))

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">

        {userToken != null ? (

        <Stack.Screen 
          name="Tab" 
          component={Tab} 
          options={{ headerShown: false }}
        />
        ) :
        // <CriarConta/>
          Alert.alert('loren', 'ipson', [
            {
              text: 'cancelar'
            },
            {text: 'ok', onPress: () => console.log('OK')},
          ])
        }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default loginDados