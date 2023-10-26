import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextoScreen =() => {
    return(
        <View>
            <Text style={ styles.morado }>
                Texto en color morado
            </Text>
            <Text style={ styles.naranja }>
                Texto en color naranja  
            </Text>
            <Text style={styles.bigNaranja}>
                Texto grande de color naranja
            </Text>
            <Text style={styles.bigMorado}>
                Texto grande de color morado
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
    },
    naranja:{
        color:'orange',
        fontWeight: 'bold',
        fontSize:20,
    },
    morado:{
        color:'purple',   
        fontSize:20,
    },
    bigMorado:{
        color:'purple',
        fontWeight:"bold",
        fontSize: 35,
    },
    bigNaranja:{
        color:'orange',
        fontWeight:"bold",
        fontSize: 35,
    }
});

export default TextoScreen;