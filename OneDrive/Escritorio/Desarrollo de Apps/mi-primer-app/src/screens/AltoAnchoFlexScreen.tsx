import React from 'react';
import { View, StyleSheet } from 'react-native';

const AltoAnchoFlexScreen = () => {
    return(
        <View style={ styles.container }>
            <View style={ styles.boxI }></View>
            <View style={ styles.boxII }></View>
            <View style={ styles.boxIII }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 100,
        height: 50,
    },
    boxI:{
        flex: 1,
        backgroundColor: '#5f2c7a',
        width: 200,
        height: 40,
    },
    boxII:{
        flex: 2,
        backgroundColor: 'rgb(255, 150, 34)',
        width: 300,
        height: 50,
    },
    boxIII:{
        flex: 3,
        backgroundColor: 'hsl(180, 19%, 24%)',
    },
});


export default AltoAnchoFlexScreen;