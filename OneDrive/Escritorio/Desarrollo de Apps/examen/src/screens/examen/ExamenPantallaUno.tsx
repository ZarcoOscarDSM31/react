import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParams } from "../../navigator/StackNavigator";
import { styles } from "../../themes/appTheme";

//Se deja trabajar con any porque aun no conozco sus propiedades
interface Props extends StackScreenProps<RootStackParams,"PersonaScreen">{};

interface Alumno{
    id:number;
    nombre:string;
    edad:number;
}
export const ExamenPantallaUno = ( {navigation}:Props) =>{
    const alumno:Alumno = {
        id: 12,
        nombre: "Oscar",
        edad: 19
    }

    return(
        <View style={{ //se debe desestructurar
            ...styles.containerGlobal,
            ...styles.marginGlobal,
            ...style.container,
            //(hora) ? ...styles : ...style    esto es para poner tema claro y oscuro
        }}>
            <View style={{ 
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: 350,
                height:800,
                marginLeft: 30,
                marginRight: 25,
                marginBottom: 40,
                marginTop: 40,
                }}>
                <View style={style.box}>
                    <Text style={style.text}>
                        LOGIN
                    </Text>
                </View>

                <View style={style.box}>
                    <TextInput style={style.inpu}>
                        
                    </TextInput>
                </View>

                <View style={style.box}>
                    <button style={style.boton}>
                        Iniciar Sesion
                    </button>
                </View>

                <View style={style.box}>
                    <button style={style.boton}>
                        Salir
                    </button>
                </View>
                <View style={style.box}>
                    <Button title="Ir a la pantalla 2"
                            onPress={ () => {navigation.navigate("ExamenPantallaDos")} }
                    />
                </View>
                <View style={style.box}>
                    <Button title="Ir a la pantalla 3"
                            onPress={ () => {navigation.navigate("ExamenPantallaTres")} }
                    />
                </View>
                <View style={style.box}>
                    <Button
                        title={alumno.nombre}
                        onPress={ () => {navigation.navigate("PersonaScreen", alumno) } }
                    />
                </View>
            </View>
        </View>
    )
}

//hay dos tipos de navegacion, por extension y por custom hook

const style= StyleSheet.create({
    container:{
        borderColor: 'rgba(30, 150, 200, 0.4)',
        backgroundColor: 'rgba(30, 150, 200, 0.4)',
        flex:1,
        alignContent: "center",
        alignItems: "center"
    },
    text:{
        textAlign:'center',
        color:'#000',
        fontSize: 45,
        fontFamily:'Gill Sans',
        borderWidth:3,
        borderColor: 'crimson', 
        height:100,
        width: 300,
    },
    inpu:{
        height:100,
        width: 300,
        borderWidth:3,
        fontFamily:'Gill Sans',
        fontSize: 30,
        textAlign: 'center',
        borderColor: 'crimson',
    },

    box:{
        flex: 1,
        marginBottom: 10, 
        marginTop: 10,  
        marginLeft: 50, 
        marginRight:50,
        alignItems: 'center',
    },

    boton:{
        borderRadius: 50,
        fontSize: 40,
        fontFamily:'Gill Sans',
        backgroundColor: 'rgba(246, 100, 70, 0.4)',
    },

/*     box1:{
        marginBottom: 50, 
        marginTop: 50,  
        marginLeft: 50, 
        marginRight:40,
        width:300,
        height: 100,
        alignItems: 'center',
    }, */
});