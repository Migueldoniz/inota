import React, { createContext, useEffect, useReducer } from "react";
import events from "./Events"
import AsyncStorage from "@react-native-async-storage/async-storage";

const EventsContext = createContext({})

const initialState = { events: [] };

const actions ={
    deleteAll(state,action){
        deleteEvents()
        return{
            ...state, //opcional no caso de 1 estado, se tiver mais estados precisa clonalos com essa linha
            events: []
        } 
    },
    deleteEvent(state,action){
        const events = action.payload
        const updatedEvents = state.events.filter(u => u.id !== events.id)
        saveEvents(updatedEvents)
        return{
                ...state, //opcional no caso de 1 estado, se tiver mais estados precisa clonalos com essa linha
                events: updatedEvents
            } //estado é eWvoluido
    },
    createEvent(state,action){
        const events = action.payload
        events.id = Math.random()
        const updatedEvents = [events,...state.events]
        saveEvents(updatedEvents)
       return{
            ...state,
            events: updatedEvents,
        }
    },
    updateEvent(state,action){
        const updated = action.payload;
        const updatedEvents = state.events.map(u => u.id === updated.id ? updated : u);
        saveEvents(updatedEvents)
       return {
          ...state,
          events: updatedEvents,
        };
    },
    carregarEvents(state,action){
        const loadedEvents = action.payload.events;
        return{
            ...state,
            events: loadedEvents,
        };
    },
    gerarRandom(state, action){
        const loadedEvents = action.payload;
        return{
            ...state,
            events: loadedEvents,
        }
    },
}

export const EventsProvider = props => {

    useEffect(() => {
        async function fetchData() {
            const loadedEvents = await loadEvents();
            dispatch({ type: 'deleteAll'});
            if(loadedEvents.events.length !==0){
                dispatch({ type: 'carregarEvents', payload: loadedEvents });
            }
            else{
                dispatch({ type: 'gerarRandom', payload: events });
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
        <EventsContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </EventsContext.Provider>
    )
}

async function saveEvents(events){
    try{
        await AsyncStorage.setItem('events', JSON.stringify(events));
    } catch (error){
        console.error('Erro ao salvar os usuários no AsyncStorage: ', error)
    }
}

async function loadEvents(){
    try{
        const events = await AsyncStorage.getItem('events');
        return { events:events ? JSON.parse(events) : []};
    } catch (error){
        console.error('Erro ao carregar os usuários do AsyncStorage', error);
        return { events:[] };
    }
}

async function deleteEvents(){
    try{
        await AsyncStorage.removeItem('events');
        console.log('Eventos removidos com sucesso')
    } catch(error){
        console.error('Erro ao remover os eventos do AsyncStorage', error)
    }
}

export default EventsContext