import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import {View, StyleSheet, Image, TextInput, TouchableOpacity, Text} from 'react-native';

import api from '../services/api'

import logo from '../assets/logo.png';




/* a react-native-handle-gesture precisa de mais uma configuração*/
/* após feita a comunicação com a api, instalamos yarn add @react-native-community/async-storage
    que se trata de uma ferramenta a que a atualização da página mobile, não
    faça o usuário voltar a página login, feito isso necessário a 
    reintação da biblioteca */
export default function Login({navigation}){
    const [user,setUser] = useState('');
/* o useEffect é um disparador de funcionalidade assim que um componente é 
exibido em tela um uma informação muda.
    os [] é quando x variaveis mudarem ele executara novamente, mas no caso 
    ele só sera executado uma vez */
    useEffect(()=> {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                /* se obtiver algum resutado em user, se tiver ele resultara 
                a tela main, assim que o usuário loga ficara salvo dentro do 
                asycnstorage o user e o id se ele atualizar a página, o asyncstorage
                será executado, e jogara ele para tela de main novamente  */
                navigation.navigate('Main', { user })
            }
        })
    }, []);
    async function handleLogin(){
        const response = await api.post('/devs', {username: user});
        const{ _id } = response.data;
        /* assim feito o login sera setado dentro do asyncstorage o valor user e
        valor da informação como segundo parâmetro */
        await AsyncStorage.setItem('user', _id);
        console.log(_id)
        navigation.navigate('Main', {user: _id});
    }

    return(
    <View style = {styles.container}>
        <Image source ={logo}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='Digite seu usuário no Github'
        placeholderTextColor='#999'
        style={styles.input}
        value ={user}
        onChangeText = {setUser}
        />
    <TouchableOpacity onPress={handleLogin} style ={styles.button}>
        <Text style ={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
    </View>
    );
}
/* button do react-native vem com algumas estilos já predefinos
    logo usaremos o touchableOpacity, que só possui estilo de opacidade ao 
    clique
*/

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingTop: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }

})
