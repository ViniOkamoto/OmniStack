import React from 'react';

import {View, StyleSheet, Image, TextInput, TouchableOpacity, Text} from 'react-native'

import Logo from '../assets/logo.png'


/* a react-native-handle-gesture precisa de mais uma configuração*/

export default function Login(){
    return(
    <View style = {styles.container}>
        <Image source ={Logo}/>
        <TextInput 
        placeholder='Digite seu usuário no Github'
        placeholderTextColor='#999'
        style={styles.input}
        />
    <TouchableOpacity style ={styles.button}>
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
