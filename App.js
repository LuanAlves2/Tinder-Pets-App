import React, {useState, useEffect} from 'react';
import { Text, View, Button, Alert} from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Registro, AreaRestrita} from './views';

export default function App() {

  const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} 
          options={{
          title: 'Tinder Pets', 
          headerStyle:{backgroundColor:"#FD3A73"},
          headerTintColor: '#333', 
          headerTitleStyle:{fontWeight:'bold', alignSelf:'center'},
          }}/>

          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
