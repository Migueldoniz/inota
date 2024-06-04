import React from 'react';
import { Text, View, Alert, FlatList} from 'react-native'
import { StyleSheet } from 'react-native';
import itens from '../lista'
import { ListItem } from '@rneui/themed';
import { createContext, useReducer, useEffect } from 'react';
const ItemContext = createContext({})

const initialState = { list: [] };

const actions ={
    deleteAll(state,action){
        deleteItens()
        return{
            ...state, //opcional no caso de 1 estado, se tiver mais estados precisa clonalos com essa linha
            itens: []
        } 
    },
    deleteItem(state,action){
        const itens = action.payload
        const updateditens = state.itens.filter(u => u.id !== itens.id)
        saveItens(updateditens)
        return{
                ...state, //opcional no caso de 1 estado, se tiver mais estados precisa clonalos com essa linha
                itens: updateditens
            } //estado é eWvoluido
    },
    createEvent(state,action){
        const itens = action.payload
        itens.id = Math.random()
        const updateditens = [itens,...state.itens]
        saveItens(updateditens)
       return{
            ...state,
            itens: updateditens,
        }
    },
    updateEvent(state,action){
        const updated = action.payload;
        const updateditens = state.itens.map(u => u.id === updated.id ? updated : u);
        saveItens(updateditens)
       return {
          ...state,
          itens: updateditens,
        };
    },
    carregaritens(state,action){
        const loadeditens = action.payload.itens;
        return{
            ...state,
            itens: loadeditens,
        };
    },
    gerarRandom(state, action){
        const loadeditens = action.payload;
        return{
            ...state,
            itens: loadeditens,
        }
    },
}

export const itensProvider = props => {

    useEffect(() => {
        async function fetchData() {
            const loadeditens = await loaditens();
            dispatch({ type: 'deleteAll'});
            if(loadeditens.itens.length !==0){
                dispatch({ type: 'carregaritens', payload: loadeditens });
            }
            else{
                dispatch({ type: 'gerarRandom', payload: itens });
            }
        }
        fetchData()
    }, []);




    function reducer(state,action){
        const fn = actions [action.type]
        return fn ? fn(state,action) : state
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <ItemContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </ItemContext.Provider>
    )
}

async function saveItens(itens){
    try{
        await AsyncStorage.setItem('itens', JSON.stringify(itens));
    } catch (error){
        console.error('Erro ao salvar os usuários no AsyncStorage: ', error)
    }
}

async function loaditens(){
    try{
        const itens = await AsyncStorage.getItem('itens');
        return { itens:itens ? JSON.parse(itens) : []};
    } catch (error){
        console.error('Erro ao carregar os usuários do AsyncStorage', error);
        return { itens:[] };
    }
}

async function deleteItens(){
    try{
        await AsyncStorage.removeItem('itens');
        console.log('Eventos removidos com sucesso')
    } catch(error){
        console.error('Erro ao remover os eventos do AsyncStorage', error)
    }
}

export default ItemContext