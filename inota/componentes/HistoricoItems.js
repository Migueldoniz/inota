import React from 'react';
import { Text, View, Alert, FlatList} from 'react-native'
import { StyleSheet } from 'react-native';
import { ItemContext } from './ItemContext';
import lista from '../lista.json'
import { ListItem } from '@rneui/themed';

export default function ItemList(props) {

    const {state, dispatch} = React.useContext(ItemContext)

    function getItems({ item: items }) {
        return (
            <ListItem
                bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={{ fontSize: 13, fontWeight: '900'}}>{items.name}</ListItem.Title>
                    <ListItem.Subtitle>{items.type}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Title right style={{ color: 'green', fontSize:12 }}>preço {items.value}</ListItem.Title>
                  <ListItem.Subtitle right style={{ color: 'blue', fontSize: 12 }}>quantidade {items.quantity}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }
        return (
            <View>
            <FlatList
            keyExtractor={items => items.name.toString()}
            data={state.items}
            renderItem={getItems}
            />
        </View>
    )


    }