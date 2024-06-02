import React, {useContext} from "react"
import { View, Text } from "react-native"
import { Button } from 'react-native-paper';
import { AuthContext } from "./Context";

export default props => {

    const { signOut } = React.useContext(AuthContext)
    const { goBack } = React.useContext(AuthContext)

    return (
        <View>
            <Button
          mode="contained" 
          buttonColor='white' 
          textColor='#054F77' 
          onPress={() => signOut()}
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
        </View>
        )
}