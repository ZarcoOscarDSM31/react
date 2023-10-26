import React from 'react';
import { View, StyleSheet } from 'react-native';

const AltoAnchoScreen = () => {
    return(
        <View>
            <View style={ styles.boxI }></View>
            <View style={ styles.boxII }></View>
            <View style={ styles.boxIII }></View>
            <View style={ styles.boxIV }></View>
        </View>
    );
}


const styles = StyleSheet.create({
    boxI:{
        backgroundColor: '#3fc25a',
        height: 70,
        width: 50,
    },
    boxII:{
        backgroundColor: 'rgb(185, 28, 89)',
        height: 40,
        width: 150,
    },
    boxIII:{
        backgroundColor: 'rgba(87, 50, 43, 0.5)',
        height:100,
        width:250,
    },
    boxIV:{
        backgroundColor: 'hsla(80, 29%, 15%, 0.9)',
        //backgroundColor: 'hsl(210, 29%, 15%)',
        height:200,
        width:300,
    }
});


export default AltoAnchoScreen;