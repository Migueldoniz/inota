import React, { useState, useReducer, useContext, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { AuthContext } from './Context'
import { NavigationContainer } from '@react-navigation/native';
import CriarConta from './CriarConta'

const App = () => {
  const [userToken, setUserToken] = React.useState(null);

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
        {userToken !== null ? (
          navigation.navigate('Tab')
        ) :
        // <CriarConta/>
          Alert.alert(lore, ison, [
            {
              text: 'cancelar'
            },
            {text: 'ok', onPress: () => console.log('OK')},
          ])
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App