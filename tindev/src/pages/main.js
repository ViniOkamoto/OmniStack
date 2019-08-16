import React from 'react';

import logo from '../assets/logo.png'
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';

export default function Main() {
    return (
        <SafeAreaView sytle={styles.container}>
            <Image source={logo} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    }
})