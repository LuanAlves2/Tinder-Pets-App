import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}){

    return(
        <View style={css.container2}>
            <TouchableOpacity style={css.button__Home} onPress={()=>navigation.navigate('Login')}>
                <Image style={css.image_base} source={require('../assets/imgs/logo2.png')}/>
                <Text style={css.text_image}>Entrar no Tinder Pets</Text>
            </TouchableOpacity>
            
        </View>
    );
}