import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

const AltoAnchoPorcentualScreen = () => {

    const { height, width } = useWindowDimensions();

    return( 
        <View>
            <View 
                style={{
                    ...styles.boxI,
                    width: width*0.70,
                    height: height*0.25,
                }}
            />
            <View 
                style={{
                    ...styles.boxII,
                    width: width*0.35,
                    height: height*0.30,
                }}
            />
            <View 
                style={{
                    ...styles.boxIII,
                    width: width,
                    height: height*0.90,
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
        backgroundColor: '#4c5d2a',
    },
    boxII:{
        backgroundColor: 'rgb(50, 253, 103)',
    },
    boxIII:{
        backgroundColor: 'hsl(20, 40%, 12%)',
    },

});


export default AltoAnchoPorcentualScreen;