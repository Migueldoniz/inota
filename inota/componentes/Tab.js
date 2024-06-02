import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Dashboard from "./Dashboard";
import GerenciarEventos from "./GerenciarEventos";
import LabelRecognition from "./LabelRecognition"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'#1FB9EC',
        tabBarInactiveTintColor: '#E6F9FF',
        tabBarActiveBackgroundColor: "#054F77",
        tabBarInactiveBackgroundColor: "#054F77",
        tabBarLabelStyle: {fontSize: 15}
    }}
    initialRouteName=""> 
         <Tab.Screen name="Camera" component={LabelRecognition} 
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
    </Tab.Navigator>
)