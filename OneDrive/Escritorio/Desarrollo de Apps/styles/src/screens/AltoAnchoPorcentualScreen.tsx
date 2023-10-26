import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

export const AltoAnchoPorcentualScreen = () => {

    const { height, width } = useWindowDimensions();

    return( 
        <View>
            <View 
                style={{
                    ...styles.boxI,
                    width: width*0.50,
                    height: height*0.25,
                }}
            />
            <View 
                style={{
                    ...styles.boxII,
                    width: width*0.75,
                    height: height*0.30,
                }}
            />
            <View 
                style={{
                    ...styles.boxIII,
                    width: width,
                    height: height*0.45,
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({

    container:{
        height: '100%',
        width: '100%',
    },
    boxI:{
        backgroundColor: '#7B7D7D',
    },
    boxII:{
        backgroundColor: 'rgb(66, 73, 73)',
    },
    boxIII:{
        backgroundColor: 'hsl(210, 29%, 13%)',
    },

});
