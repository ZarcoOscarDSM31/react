import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/*
    Style

    Con React Native, diseñas tu aplicación usando JavaScript/TypesScript. 
    Todos los componentes principales aceptan un accesorio llamado style. 
    Los nombres y valores de estilo generalmente coinciden con cómo funciona CSS 
    en la web, excepto que los nombres se escriben usando mayúsculas de color, 
    por ejemplo, backgroundColoren lugar de background-color.

    El StyleSheet puede ser un simple objeto JavaScript antiguo. 
    Eso es lo que normalmente usamos, por ejemplo, código. 
    También puede pasar una matriz de estilos: el último estilo de la matriz 
    tiene prioridad, por lo que puede usarlo para heredar estilos.

    A medida que un componente crece en complejidad, suele ser más sencillo 
    utilizarlo StyleSheet.createpara definir varios estilos en un solo lugar.
*/

export const TextoScreen =() => {
    return(
        <View>
            <Text
                style={ styles.red }
            >
                Texto de color rojo
            </Text>
            <Text
                style={ styles.blue }
            >
            Texto justifcado de color azúl
            </Text>
            <Text
                style={styles.bigRed}
            >
            Texto grande de color rojo
            </Text>
            <Text
                style={styles.bigBlue}
            >
            Texto grande de color azúl
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
    },
    blue:{
        color:'blue',
        fontWeight: 'bold',
        fontSize:20,
    },
    red:{
        color:'red',   
        fontSize:20,
    },
    bigBlue:{
        color:'blue',
        fontWeight:"bold",
        fontSize: 35,
    },
    bigRed:{
        color:'red',
        fontWeight:"bold",
        fontSize: 35,
    }
});
