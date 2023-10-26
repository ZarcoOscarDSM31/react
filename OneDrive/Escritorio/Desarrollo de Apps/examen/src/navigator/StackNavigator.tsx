import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ExamenPantallaUno } from "../screens/examen/ExamenPantallaUno";
import { ExamenPantallaDos } from "../screens/examen/ExamenPantallaDos";
import { ExamenPantallaTres } from "../screens/examen/ExamenPantallaTres";
import { PersonaScreen } from "../screens/examen/PersonaScreen";

//Valido los parámetros
export type RootStackParams = {
    ExamenPantallaUno: undefined;
    ExamenPantallaDos: undefined;
    ExamenPantallaTres: undefined;
    PersonaScreen:{
        id:number,
        nombre:string,
        edad:number,
    }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName='ExamenPantallaUno'
            screenOptions={{ 
                headerShown: true,
                headerStyle:{
                    elevation: 0,
                    shadowColor: "transparent",
                    backgroundColor: "rgba(30, 150, 200, 0.4)",
                },
                cardStyle:{
                    backgroundColor:"rgba(120, 30, 40, 0.4)"
                },
            }}
        >
            <Stack.Screen name = "ExamenPantallaUno" options={{ title: "Pagina 1" }} component={ExamenPantallaUno} />
            <Stack.Screen name = "ExamenPantallaDos" options={{ title: "Pagina 2" }} component={ExamenPantallaDos} />
            <Stack.Screen name = "ExamenPantallaTres" options={{ title: "Pagina 3" }} component={ExamenPantallaTres} />
            <Stack.Screen name = "PersonaScreen" options={{ title: "Pagina Persona" }} component={PersonaScreen} />
        </Stack.Navigator>
    )
}

const style = StyleSheet.create({

});

