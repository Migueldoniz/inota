import React, {useContext} from "react"
import { View, Text } from "react-native"
import { Button } from 'react-native-paper';
import { AuthContext } from "./Context";

export default function Gerenciar({route}){

  const { signOut, goBack } = React.useContext(AuthContext)

  const usuarioLogado = route.params;

    return (
        <View style={{flex:1, alignItems: 'center', alignContent: 'center', top: 20}}>

            <Button
          mode="contained" 
          buttonColor='white' 
          textColor='#054F77' 
          onPress={() => goBack()}
          style={{top:30, width:150}}>
            Voltar
            </Button>
            <Button
          mode="contained" 
          buttonColor='red' 
          textColor='#054F77' 
          onPress={() => signOut(JSON.stringify(usuarioLogado.usuarioLogado))}
          style={{top:40, width:150}}>
            Apagar conta
            </Button>
        </View>
        )
}