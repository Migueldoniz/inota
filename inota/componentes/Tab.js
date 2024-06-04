import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Dashboard from "./Dashboard";
import GerenciarEventos from "./GerenciarEventos";
import ItemList from "./HistoricoItems";
import LabelRecognizerScreen from "./LabelRecognition";
import { ItemContext } from "./ItemContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Gerenciar from "./Gerenciar";

const Tab = createBottomTabNavigator()

export default function Tabs ({route}) {
    const {usuarioLogado} = route.params

    const itemInitialState = {items: usuarioLogado.items};
    const [elements, setElements] = React.useState([])
    const [qtdElements, setQtd] = React.useState(usuarioLogado.items)

    itemReducer = (prevState, action) => {
        switch(action.type) {
            case 'ADICIONAR':
                return {
                    //TODO
                };
            case 'REMOVER':
                return {
                    //TODO
                };
            case 'ATUALIZAR':
                return {
                    //TODO
                };
            case 'RENDERIZAR':
                return {
                    //TODO
                };
        }
    }

    const [ItemState, dispatch] = React.useReducer(itemReducer, null)

    const itemContext = React.useMemo(() => ({
        addItem: async(item) => {
            try {
                let aux = JSON.parse(item)
                console.log(item)

                AsyncStorage.setItem(JSON.stringify(aux.name), JSON.stringify(item))
            } catch(e) {
                console.error('Não foi possível adicionar')
            }
        },
        removeItem: async(item) => {
            //TODO
        },
        updateItem: async(item) => {
            //TODO
        },
        renderizaLista: async(item) => {
            const loadedItens = action.payload.items;
            return{
                ...state,
                items: loadedItens,
            };
        },
    }))

    return (
    <SafeAreaView style={{flex:1}}>
        <ItemContext.Provider value={itemContext}>
            <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:'#1FB9EC',
            tabBarInactiveTintColor: '#E6F9FF',
            tabBarActiveBackgroundColor: "#054F77",
            tabBarInactiveBackgroundColor: "#054F77",
            tabBarLabelStyle: {fontSize: 15}
        }}
        initialRouteName="Dashboard"> 
        <Tab.Screen name="Camera" component={LabelRecognizerScreen} 
         options={{
             tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="camera" color={color} size={size} />
                ),
                tabBarShowLabel: false,
                headerShown:false,
                title: 'Câmera'
            }}
            /> 
        <Tab.Screen name="Dashboard" component={Dashboard}
            initialParams = {{usuarioLogado}}
         options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
            ),
            headerShown:false,
            tabBarShowLabel: false,
            title: 'Dashboard'
         }}/> 
        <Tab.Screen name="Historico" component={GerenciarEventos}
         options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" color={color} size={size} />
            ),
            headerShown:false,
            tabBarShowLabel: false,
            title: 'Seus eventos'
         }}/> 
         {/* <Tab.Screen name="Gerenciar" component={Gerenciar}
         options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" color={color} size={size} />
            ),
            headerShown:false,
            tabBarShowLabel: false,
            title: 'Gerenciar'
        }}/> */}
        </Tab.Navigator>
        </NavigationContainer>
        </ItemContext.Provider>
    </SafeAreaView>
    )
}