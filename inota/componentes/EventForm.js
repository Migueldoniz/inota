import React, {useContext, useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from '@rneui/themed';
import EventsContext from "./EventContextFile";

export default ({route,navigation}) => {
    //console.warn(Object.keys(route.params))
    const [event, setEvent] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(EventsContext)
    return (
        <View style={style.form}>
            <Text Nome></Text>
            <TextInput
                style={style.input}
                //pega todos os atribuos do Event e sobrescreve nome
                onChangeText={nome_evento => setEvent({...event,nome_evento})}
                placeholder="  Informe o Nome"
                value={event.nome_evento}
            />
            <Text Data></Text>
            <TextInput
                style={style.input}
                //pega todos os atribuos do event e sobrescreve nome
                onChangeText={data => setEvent({...event,data})}
                placeholder="  Informe a data no formato: AAAA-MM-DD"
                value={event.data}
            />
            <Text Avatar></Text>
            <TextInput
                style={style.input}
                //pega todos os atribuos do event e sobrescreve nome
                onChangeText={avatarUrl => setEvent({...event,avatarUrl})}
                placeholder="  Informe o avatar"
                value={event.avatarUrl}
            />
            <Text Local></Text>
            <TextInput
                style={style.input}
                //pega todos os atribuos do event e sobrescreve nome
                onChangeText={lugares => setEvent({...event,lugares})}
                placeholder="  Informe o local no formato: Cidade, País"
                value={event.lugares}
            />
            <Text Quantidade de ingressos></Text>
            <TextInput
                style={style.input}
                //pega todos os atribuos do event e sobrescreve nome
                onChangeText={qtdingressos => setEvent({...event,qtdingressos})}
                placeholder="  Informe a quantidade de lugares disponíveis"
                value={event.qtdingressos}
            />
            <Button
                title='Salvar'
                onPress={()=> {
                    dispatch({
                        type: event.id ? 'updateEvent' : 'createEvent',
                        payload: event,
                    })
                    navigation.navigate('EventList')
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:2,
        marginLeft:6,
        marginRight:6,
        marginBottom: 10,
        form: {
            padding: 15,
        },
        placeholder:{
            marginLeft:6
        }
    }
})