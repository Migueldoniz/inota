import React from 'react';
import { Text } from 'react-native'
import { Button, Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import EventsContext from './EventContextFile';
import {EventsListHome} from './EventList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EventsProvider } from './EventContextFile';
import { useContext } from 'react';

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <EventsProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                <Stack.Screen
                name="EventsListHome"
                component={EventsListHome}
                options={({ navigation }) => {
                const {state, dispatch} = useContext(EventsContext)
                return {
                    title: 'Home',
                }
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