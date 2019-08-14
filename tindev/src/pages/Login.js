import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import logo from '../assets/logo.png';
//UseState se trata de uma forma para capturarmos os dados da dom pelo 
//react(tanto web quanto mobile)
export default function Login({navigation}) {
    const [user, setUser] = useState('');
//HandleLogin serve para chamar a função posta no button
    function handleLogin(){
        console.log(user)
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />

            <TextInput 
                autoCapitalize ='none'
                autoCorrect={false}
                placeholder='Digite seu usuário no Github'
                placeholderTextColor = "#999"
                style={styles.input}
                value ={user}
                onChangeText ={setUser} /> 
                
            <TouchableOpacity 
                onPress = {handleLogin}
                style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}
/* touchableopacity se trata de um botão que ao pressiona-lo ficara opaco
na stack reactive native a gente utiliza OnPress para captar o evento
de clique*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
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
        paddingHorizontal: 15,
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