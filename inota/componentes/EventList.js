import React, { useContext } from 'react';
import { View, Text, Alert, FlatList } from 'react-native'; // Adicionando a importação de 'react-native'
import { ListItem, Avatar, Icon, Button } from '@rneui/themed';
import EventsContext from './EventContextFile';

export function EventsListHome(props) {
    const {state, dispatch} = useContext(EventsContext)


    function getActions(events) {
        return (
            <>
                <Button
                    onPress={() => dispatch({
                                    type: 'updateEvent',
                                    payload: events.favorite=!events.favorite,
                                })}
                    type = 'clear'
                    icon = {<Icon name = 'star' size = {25} color = {events.favorite ? 'orange' : 'gray'} />}
                />
            </>
        )
    }

    function confirmEventsDeletion(events) {
        Alert.alert('Excluir Evento?', 'Deseja excluir o evento?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteEvent',
                        payload: events,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getEventsItems({ item: events }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate('EventsForm', events)}
                bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={{ fontSize: 14, fontWeight: '900'}}>{events.nome_evento}</ListItem.Title>
                    <ListItem.Subtitle>{events.lugares}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Title right style={{ color: 'green' }}>
                   {events.data}
                  </ListItem.Title>
                  <ListItem.Subtitle right style={{ color: 'blue' }}>{events.qtdingressos} lugares</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(events)}
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={events => events.id.toString()}
                data={state.events}
                renderItem={getEventsItems}
            />
        </View>
    );
}





export function EventsList(props) {
    const {state, dispatch} = useContext(EventsContext)


    function getActions(events) {
        return (
            <>
                 <>
                <Button
                    onPress={() => props.navigation.navigate('EventForm', events)}
                    type = 'clear'
                    icon = {<Icon name = 'edit' size = {25} color = 'black' />}
                />
                <Button
                    onPress={() => confirmEventsDeletion(events)}
                    type = 'clear'
                    icon = {<Icon name = 'delete' size = {25} color = 'black' />}
                />
                </>
            </>
        )
    }

    function confirmEventsDeletion(events) {
        Alert.alert('Excluir Evento?', 'Deseja excluir o evento?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteEvent',
                        payload: events,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getEventsItems({ item: events }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate('EventsForm', events)}
                bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={{ fontSize: 13, fontWeight: '900'}}>{events.nome_evento}</ListItem.Title>
                    <ListItem.Subtitle>{events.lugares}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Title right style={{ color: 'green', fontSize:12 }}>
                   {events.data}
                  </ListItem.Title>
                  <ListItem.Subtitle right style={{ color: 'blue', fontSize: 12 }}>{events.qtdingressos} unidades</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(events)}
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={events => events.id.toString()}
                data={state.events}
                renderItem={getEventsItems}
            />
        </View>
    );
}