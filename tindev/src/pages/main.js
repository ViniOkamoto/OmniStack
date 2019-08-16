import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import logo from '../assets/logo.png';
import api from '../services/api';

export default function Main({ navigation }) {
    const id = navigation.getParam('user')
    const [users, setUsers] = useState([]);

    console.log(id)
    console.log(users.length)

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: id,
                }
            })
            setUsers(response.data);
        }
        loadUsers();

    }, [id]);
/* handleLike e handleDislike são funções onde estão sendo chamadas no botão 
    like e dislike, onde capturarão os usurários que estão disponíveis após o 
    clique
    */
    async function handleLike() {
        const [user, ...rest] = users;
        /* aqui é onde há a captura dos users e o restos dos outros usuários,
        essa é uma sintaxe que basicamente é equivalente a esta 
        const user = users[0], porém esta consegue capturar o resto da array.  */
        
        await api.post(`devs/${user._id}/likes`, null, {
            headers: { user: id },
        })
        /* aqui é onde denominamos qual usuário esta sofrend com o evento user.id
            indicando para api que ocorreu algo */
        setUsers(rest);
        /* set users será a atualização da página após o evento anterior. */
    };


    async function handleDislike() {
        const [user, ...rest] = users;

        
        await api.post(`devs/${user._id}/likes`, null, {
            headers: { user: id },
        })

        setUsers(rest);
    };

    async function handleLogout() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Image style={styles.logo} source={logo} />
            </TouchableOpacity>
            <View style={styles.cardContainer}>
                {users.length === 0
                    ? <Text style={styles.empty}>Acabou :(</Text> :
                    (
                        users.map((user, index) => (
                            <View key={user._id} style={[styles.card, { zIndex: users.length - index }]}>
                                <Image style={styles.avatar} source={{ uri: user.avatar }} />
                                <View style={styles.footer}>
                                    <Text style={styles.name}>{user.name}</Text>
                                    <Text style={styles.bio} numberOfLines={3}>{user.bio}</Text>
                                </View>
                            </View>
                        ))
                    )}
            </View>
           
           {users.length > 0 && (
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLike}>
                    <Image source={like} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleDislike}>
                    <Image source={dislike} />
                </TouchableOpacity>
            </View>
           )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    logo: {
        marginTop: 30,
    },

    empty: {
        alignSelf: 'center',
        color: '#999',
        fontSize: 24,
        fontWeight: 'bold'
    },

    cardContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,
    },

    card: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    avatar: {
        flex: 1,
        height: 300,
    },

    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,

    },

})