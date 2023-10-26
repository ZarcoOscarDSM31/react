import React from 'react';
import { View, StyleSheet } from 'react-native';

// Nota añadir flex al SafeAreaView

/*
    Dimensiones Flexibles
    Flex en el estilo de un componente para que el 
    componente se expanda y reduzca dinámicamente 
    según el espacio disponible. Normalmente utilizará 
    flex: 1, que le indica a un componente que llene 
    todo el espacio disponible, compartido equitativamente 
    entre otros componentes con el mismo padre. 
    Cuanto mayor sea el flex valor dado, mayor será la 
    proporción de espacio que ocupará un componente en 
    comparación con sus hermanos.

    Nota:
    Un componente sólo puede expandirse para llenar 
    el espacio disponible si su padre tiene dimensiones 
    mayores que 0. Si un padre no tiene un fijo width y 
    height o flex, el padre tendrá dimensiones de 0 y 
    los flexhijos no serán visibles.
*/

export const AltoAnchoFlexScreen = () => {
    return(
        <View
            style={ styles.container }
        >
            <View 
                style={ styles.boxI }
            />
            <View 
                style={ styles.boxII }
            />
            <View 
                style={ styles.boxIII }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    boxI:{
        flex: 1,
        backgroundColor: '#808B96',
    },
    boxII:{
        flex: 2,
        backgroundColor: 'rgb(44, 62, 80)',
    },
    boxIII:{
        flex: 3,
        backgroundColor: 'hsl(210, 29%, 13%)',
    },
});
