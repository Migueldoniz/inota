import React, {useContext} from "react"
import { View, Text } from "react-native"
import { AuthContext } from "./Context"
import { Button } from 'react-native-paper';

export default props => {

    const { singOut } = React.useContext(AuthContext)

    return (
        <View>
            <Button
          mode="contained" 
          buttonColor='white' 
          textColor='#054F77' 
          onPress={() => singOut()}
          style={{top:30, width:150}}>
            Deslogar
            </Button>
        </View>
        )
}