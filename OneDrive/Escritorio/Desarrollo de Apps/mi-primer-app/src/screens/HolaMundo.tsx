import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HolaMundo = () => {
    const saludo:string = 'Hola Oscar'
    return (
        <SafeAreaView style={{
            flex:1,
            justifyContent:'center',
        }}>  
            <text style={{
                fontSize:45,
                textAlign:'center',
                backgroundColor:'black',
            }}>
                {saludo}
            </text>
            <text style={{
                fontSize:45,
                textAlign:'center',
                backgroundColor:'black',
            }}>
                {saludo}
            </text>
        </SafeAreaView>
    );
}

export default HolaMundo;
