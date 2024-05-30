import React from 'react';
import { Text, View } from 'react-native'
import { Button, Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import PassoStack from './PassoStack';
import { EventsProvider } from './EventContextFile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {EventsList} from './EventList';
import { useContext } from 'react';
import EventsContext from './EventContextFile';
import EventForm from './EventForm';
import { Alert } from 'react-native';
const Stack = createNativeStackNavigator()

export default props => {

    return(
        <EventsProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                <Stack.Screen
                name="EventList"
                component={EventsList}
                options={({ navigation }) => {
                    const {state, dispatch} = useContext(EventsContext)
                    return {
                        title: 'Gerenciar eventos',
                        headerRight: () => (
                            <>
                          <Button
                            onPress={() => navigation.navigate('EventForm')}
                            type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                            icon={<Icon name="add" size={25} color="black" />} />
                          <Button
                          onPress={() => 
                            Alert.alert('Excluir Eventos', 'Deseja excluir a lista de eventos?', [
                                {
                                    text: 'Sim',
                                    onPress(){
                                        dispatch({
                                            type: 'deleteAll'
                                        })
                                    }
                                },
                                {
                                    text: 'Não'
                                }
                            ])
                        }
                          type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                          icon={<Icon name="delete" size={25} color="black" />} />
                        </>
                      )
                    }
                }}
            />
                <Stack.Screen
                name="EventForm"
                component={EventForm}
                options={{ title: 'Adicionar Evento' }}
                />
                </Stack.Navigator>
            </NavigationContainer>
        </EventsProvider>
    )
}

const style = StyleSheet.create({
    texto: {
        fontSize: 50,
    },
    tela: {
        flex: 1, //significa que pode oculpar a tela inteira
        justifyContent: "center", //eixo principal (vertical) conteudo é centralizado
        alignItems: 'center',
    }
})