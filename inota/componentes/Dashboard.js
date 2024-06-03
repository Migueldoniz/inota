import React, {useContext} from "react"
import { View, Text } from "react-native"
import { Button } from 'react-native-paper';
import { AuthContext } from "./Context";

export default function Dashboard({route}){

  const { signOut, goBack } = React.useContext(AuthContext)

  const usuarioLogado = route.params;

    return (
        <View>
            <Button
          mode="contained" 
          buttonColor='white' 
          textColor='#054F77' 
          onPress={() => signOut(JSON.stringify(usuarioLogado.usuarioLogado))}
          style={{top:30, width:150}}>
            Deslogar
            </Button>
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
          buttonColor='white' 
          textColor='#054F77' 
          onPress={() => console.log({usuarioLogado})}
          style={{top:30, width:150}}>
            mostrar
            </Button>
        </View>
        )
}