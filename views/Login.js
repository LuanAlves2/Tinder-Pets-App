import React, {useEffect, useState} from 'react';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform, BackHandler} from 'react-native';
import {css} from '../assets/css/Css'
import { Input} from '@rneui/base';
 
export default function Login({navigation}){

    const [display, setDisplay]=useState(initialState = 'none');
    const [display2, setDisplay2]=useState(initialState = 'none');
    const [email, setEmail]=useState(initialState = 'null');
    const [password, setPassword]=useState(initialState = 'null');
    const [login, setLogin]=useState(initialState = 'null');

//Envio de formulario de login
    async function sendForm(){
        let response=await fetch(input= 'http://192.168.100.5:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value={
                email: email,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay(value='flex');
            setDisplay2(value='none');
        }else{
            setDisplay(value='none');
            setDisplay2(value='flex');
            navigation.navigate('AreaRestrita')
            
        }
    }



    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Image source={require('../assets/imgs/logo.png')}/>

            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
                <Text style={css.login__msg2(display2)}>Você será redirecionado!</Text>
            </View>

            </View>

            <View style={css.login__form}>
                <Input style={css.text_color} placeholder='Seu e-mail ' placeholderTextColor="#FD3A73" onChangeText={text=>setEmail(text)} keyboardType='email-address' leftIcon={{ type: 'font-awesome', name: 'envelope', color:"#FD3A73" }}/>
                <Input style={css.text_color} placeholder='Sua senha ' placeholderTextColor="#FD3A73" onChangeText={text=>setPassword(text)} secureTextEntry={true} leftIcon={{ type: 'font-awesome', name: 'lock', color:"#FD3A73" }}/>
                <TouchableOpacity  style={css.login__button} onPress={()=> sendForm()} >
                    <Text style={css.login__buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Registro')}>
                    <Text style={css.text_image}>Não possui registro? Clique aqui.</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}