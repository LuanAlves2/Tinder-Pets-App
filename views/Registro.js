import React, {useEffect, useState} from 'react';
import {  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform, BackHandler,SafeAreaView, Alert} from 'react-native';
import { ScrollView } from 'react-native';
import { Input, Icon, Text, CheckBox, color } from '@rneui/base';
import { RadioButton } from 'react-native-paper';
import {css} from '../assets/css/Css';
import { TextInputMask } from 'react-native-masked-text';
 
export default function Registro({navigation}){

    const [display, setDisplay]=useState(initialState = 'none');
    const [display2, setDisplay2]=useState(initialState = 'none');
    const [email, setEmail]=useState(initialState = 'null');
    const [password, setPassword]=useState(initialState = 'null');
    const [namepet, setNamePet]=useState(initialState = 'null');
    const [phone, setPhone]=useState(initialState = 'null');
    const [racapet, setRacaPet]=useState(initialState = 'null');
    const [generpet, setGenerPet]=useState(initialState = 'null');
    const [agepet, setAgePet]=useState(initialState = 'null');
    const [interessepet, setInteressePet]=useState(initialState = 'null');
    const [descpet, setDesc]=useState(initialState = 'null');
    const [login, setLogin]=useState(initialState = 'null');
    const [male,setMale] = useState(false);
    const [female,setFemale] = useState(false);

    const genderMale = () => {
        setMale(true);
        setFemale(false);
        setGenerPet("M");
        setInteressePet("F")
    };
    const genderFemale = () => {
        setMale(false);
        setFemale(true);
        setGenerPet("F");
        setInteressePet("M")
    };


    async function sendForm(){
        let response=await fetch(input= 'http://192.168.100.5:3000/create',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value={
                email: email,
                password: password,
                namepet: namepet,
                phone: phone,
                racapet: racapet,
                generpet: generpet,
                agepet: agepet,
                interessepet: interessepet,
                descpet: descpet,
            })
                
        });
        if(err){
                    console.log(err);
                }else{
                    res.send('Usuário criado com sucesso!');
                    Alert.alert("Bem-vindo "+namepet+ ", seu usuário foi criado com sucesso!")
                }
    }



    return(
        
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]} keyboardVerticalOffset={100}>
        
        
            <ScrollView style={css.login__form}>
                <Input style={css.text_color} placeholder='Seu melhor e-mail' placeholderTextColor="#FD3A73" onChangeText={text=>setEmail(text)} leftIcon={{ type: 'font-awesome', color:"#FD3A73" }} returnKeyType='done'/>
                <Input style={css.text_color} placeholder='Sua senha' placeholderTextColor="#FD3A73" onChangeText={text=>setPassword(text)} secureTextEntry={true} leftIcon={{ type: 'font-awesome', color:"#FD3A73" }} returnKeyType='done'/>
                <Input style={css.text_color} placeholder='Nome do seu pet' placeholderTextColor="#FD3A73" onChangeText={text=>setNamePet(text)} leftIcon={{ type: 'font-awesome', color:"#FD3A73" }} returnKeyType='done'/>
                <View style={css.containerMask}>
                <TextInputMask style={css.masked_input} placeholder='Numero de telefone' placeholderTextColor="#FD3A73" type={'cel-phone'} value={phone} onChangeText={text=>setPhone(text)} leftIcon={{ type: 'font-awesome', color:"#FD3A73" }} keyboardType="phone-pad" returnKeyType='done'/>
                </View>
                <Input style={css.text_color} placeholder='Raça do seu pet' placeholderTextColor="#FD3A73" onChangeText={text=>setRacaPet(text)} leftIcon={{ type: 'font-awesome', color:"#FD3A73" }} returnKeyType='done'/>
                
                <CheckBox
                backgroundColor="#333"
                title='Macho' 
                center
                checked={male}
                checkedIcon="check"
                uncheckedIcon="circle-o"
                onPress={genderMale} 
                />
                <CheckBox
                backgroundColor="#333"
                title='Femea' 
                center
                checked={female}
                checkedIcon="check"
                uncheckedIcon="circle-o"
                onPress={genderFemale} 
                />
                <Input style={css.text_color} placeholder='Idade do seu pet em meses' placeholderTextColor="#FD3A73" onChangeText={text=>setAgePet(text)} leftIcon={{ type: 'font-awesome', color:"#FD3A73" }} keyboardType="number-pad" returnKeyType='done'/>
                <Input style={css.desc} placeholder='Descrição' placeholderTextColor="#FD3A73" onChangeText={text=>setDesc(text)} leftIcon={{ type: 'font-awesome', color:"#FD3A73"}} returnKeyType='done'/>
                <TouchableOpacity style={css.register__button} onPress={()=> sendForm()}>
                    <Text style={css.register__buttonText}>
                        Registrar-se
                    </Text>
                </TouchableOpacity>
            </ScrollView>
    </KeyboardAvoidingView>
        
    );
};