
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";
interface Props extends StackScreenProps<RootStackParams,"PersonaScreen">{};
interface Alumno{
    id:number;
    nombre:string;
    edad:number;
}

export const PersonaScreen = ({route}:Props) => {
    const {id, nombre, edad } = route.params as Alumno;
    return(
        <View style={style.container}>
            <Text style={style.title}>
                Persona: {id}
            </Text>
            <Text style={style.title}>
                {nombre}
            </Text>
            <Text style={style.title}>
                {edad}
            </Text>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(30,130,100)',
        width: '100%',
        height: 400,
    },
    title:{
        borderWidth: 1,
        color: '#000',
        fontSize:40,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 30,
        
    },
})