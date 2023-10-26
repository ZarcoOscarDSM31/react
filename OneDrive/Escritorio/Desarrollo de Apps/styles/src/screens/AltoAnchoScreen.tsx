import React from 'react';
import { View, StyleSheet } from 'react-native';

/*
    Dimensiones Fijas
    La forma general de establecer las dimensiones fijas 
    o absolutas de un componente es agregando un estilo 
    fijo width y height. 
    Todas las dimensiones en React Native 
    no tienen unidades y representan píxeles 
    independientes de la densidad.
*/

export const AltoAnchoScreen = () => {
    return(
        <View>
            <View 
                style={ styles.boxI }
            />
            <View 
                style={ styles.boxII }
            />
            <View 
                style={ styles.boxIII }
            />
            <View 
                style={ styles.boxIV }
            />
        </View>
    );
}

/*
    Hsl
    La hsl()notación funcional expresa un color sRGB 
    según sus componentes de tono , saturación 
    y luminosidad . Un componente alfa opcional 
    representa la transparencia del color.
*/

const styles = StyleSheet.create({
    boxI:{
        backgroundColor: '#4A235A',
        height: 50,
        width: 50,
    },
    boxII:{
        backgroundColor: 'rgb(27, 79, 114)',
        height: 100,
        width: 100,
    },
    boxIII:{
        backgroundColor: 'rgba(66, 73, 73, 0.7)',
        height:200,
        width:200,
    },
    boxIV:{
        backgroundColor: 'hsla(210, 29%, 15%, 0.9)',
        //backgroundColor: 'hsl(210, 29%, 15%)',
        height:300,
        width:300,
    }
});
