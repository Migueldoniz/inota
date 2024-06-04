import React, {useContext} from "react"
import { View, Text } from "react-native"
import { Button } from 'react-native-paper';
import { AuthContext } from "./Context";
import {PieChart} from 'react-native-gifted-charts'
import { ItemContext } from "./ItemContext";

export default function Dashboard({route}){

  const { signOut, goBack } = React.useContext(AuthContext)
  const { addItem } = React.useContext(ItemContext)

  const usuarioLogado = route.params;

  const dataPie = [{ value : 54 , color : '#054F77', text : '41%', gradientCenterColor: '#006DFF', focused: true} ,
  { value : 40 , color : '#1FB9EC', text : '30%'} ,
  { value : 20 , color : '#E6F9FF', text : '15%'} ,
  { value : 10 , color : '#CBE6EE', text : '7%'},
  { value : 5 , color : '#D9D9D9', text : '3%'}]

  const renderDot = color => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };


  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot('#1FB9EC')}
            <Text style={{color: 'white'}}>Limpeza: 30%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#E6F9FF')}
            <Text style={{color: 'white'}}>Lazer: 15%</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot('#CBE6EE')}
            <Text style={{color: 'white'}}>Bebida: 7%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#D9D9D9')}
            <Text style={{color: 'white'}}>Outro: 3%</Text>
          </View>
        </View>
      </>
    );
  };

    return (
        <View style={{
          paddingVertical: 100,
          backgroundColor: '#E6F9FF',
          flex: 1,
        }}>
    <View
    style={{
      margin: 20,
      padding: 16,
      borderRadius: 20,
      backgroundColor: '#232B5D',
    }}>
    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
      Média de gastos
    </Text>
    <View style={{padding: 20, alignItems: 'center'}}>
      <PieChart
        data={dataPie}
        donut
        showGradient
        sectionAutoFocus
        radius={90}
        innerRadius={60}
        innerCircleColor={'#232B5D'}
        centerLabelComponent={() => {
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                41%
              </Text>
              <Text style={{fontSize: 14, color: 'white'}}>Comida</Text>
            </View>
          );
        }}
      />
    </View>
    {renderLegendComponent()}
    </View>
        </View>
        )
}