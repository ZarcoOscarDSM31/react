import React from 'react';
import { View, StyleSheet } from 'react-native';

const AltoAnchoFlexScreen = () => {
    const color1:string = 'azul';
    const color2:string = 'rojo';
    const color3:string = 'naranja';
    return(
        <View style={ styles.container }>
            <View style={ styles.caja1 }>
                <text style={styles.color} >
                    {color1}
                </text>
            </View>
            <View style={ styles.caja2 }>
                <text style={styles.color}>
                    {color2}
                </text>
            </View>
            <View style={ styles.caja3 }>
                <text style={styles.color1}>
                    {color3}
                </text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 100,
        height: 50,
        marginBottom:50, 
        marginTop: 20,  
        marginLeft: 50, 
        marginRight:50,
    },
    caja1:{
        flex: 1,
        backgroundColor: 'blue',
        width: 200,
        height: 40,
        marginBottom:50, 
        marginTop: 20,  
        marginLeft: 50, 
        marginRight:50,
    },
    caja2:{
        flex: 2,
        backgroundColor: 'red',
        width: 300,
        height: 50,
        marginBottom:50, 
        marginTop: 20,  
        marginLeft: 50, 
        marginRight:50,
    },
    caja3:{
        flex: 3,
        backgroundColor: 'orange',
        width: 300,
        height: 50,
        marginBottom:50, 
        marginTop: 20,  
        marginLeft: 50, 
        marginRight:50,
    },
    color:{
        color:'white',
    },
    color1:{
        color:'black',
    },
});


export default AltoAnchoFlexScreen;