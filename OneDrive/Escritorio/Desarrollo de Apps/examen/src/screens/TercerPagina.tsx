import React from "react";
import { View, StyleSheet, Text } from "react-native";


const TercerPagina = () => {
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
        alignItems: 'center',
    },
    caja1:{
        flex: 1,
        backgroundColor: 'blue',
        width: 200,
        height: 40,
        marginBottom:20, 
        marginTop: 20,  
        marginLeft: 20, 
        marginRight:20,
    },
    caja2:{
        flex: 2,
        backgroundColor: 'red',
        width: 100,
        height: 50,
        marginBottom:20, 
        marginTop: 20,  
        marginLeft: 20, 
        marginRight:20,
    },
    caja3:{
        flex: 3,
        backgroundColor: 'orange',
        width: 200,
        height: 30,
        marginBottom:20, 
        marginTop: 20,  
        marginLeft: 20, 
        marginRight: 30,
    },
    color:{
        color:'white',
        fontSize: 45,
        textAlign: 'center',
    },
    color1:{
        color:'black',
        fontSize: 45,
        textAlign: 'center',
    },
});

export default TercerPagina;