import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParams } from "../../navigator/StackNavigator";

interface Props extends StackScreenProps<RootStackParams,"ExamenPantallaUno">{};
export const ExamenPantallaTres = ( {navigation}:Props ) =>{
    return(
        <View style={style.container}>
            <View style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                width: 350,
                height:800,
                marginLeft: 25,
                marginRight: 25,
                marginBottom: 50,
                marginTop: 50,
                }}>
                <View style={style.box}>
                    <Text style={style.text}>
                        AGREGAR TEXTO
                    </Text>
                </View>


                <View style={style.box}>
                    <button style={style.boton}>
                        Botón 1
                    </button>
                </View>

                <View style={style.box}>
                    <button style={style.boton}>
                        Botón 2
                    </button>
                </View>
                <View style={style.box}>
                    <Button title="Ir a la página 1"
                            onPress={ () => {navigation.navigate("ExamenPantallaUno")} }
                    />
                </View>
                <View style={style.box}>
                    <Button title="Ir a la página 2"
                            onPress={ () => {navigation.navigate("ExamenPantallaDos")} }
                    />
                </View>
            </View>
            
        </View>
    )
}
const style= StyleSheet.create({
    container:{
        borderColor: 'red',
        backgroundColor: '#EAB69F',
        flex:1,
    },
    text:{
        textAlign:'center',
        color:'#fff',
        fontSize: 45,
        borderWidth:3,
        borderColor: '#000', 
        height:150,
        width: 300,
    },
    inpu:{
        height:100,
        width: 300,
        borderWidth:3,
    },

    box:{
        flex:1,
        marginBottom:20, 
        marginTop: 20,  
        marginLeft: 50, 
        marginRight:50,
        alignItems: 'center',
    },

    boton:{
        borderRadius: 50,
        fontSize: 50,
        backgroundColor: 'rgb(255, 140, 30)',
    },

});



