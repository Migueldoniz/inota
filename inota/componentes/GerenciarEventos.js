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
                options={ {
                    headerShown:false      
                }}
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