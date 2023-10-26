import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import FlexDirectionScreen from "./FlexDirectionScreen";

const PrimerPantalla = () => {
    //Imagen 
    const nombre:string = 'Oscar Daniel Zarco González'
    const actividad:string = 'Practicar en el bajo eléctrico'
    const assets:string = './../../assets/';
    return(
        <View style={{ flex:1, }}>
            <View style={{
                    flex:2,
                    marginBottom:50, 
                    marginTop: 20,  
                    marginLeft: 50, 
                    marginRight:50,
                }}
            >
                <Image
                    source={require(assets+'oscar.jpg')}
                    style={{ 
                        flex:1,
                        height:200,
                        width: 100,
                    }}
                />   
            </View>
            <View style={{
                    flex:2,
                    marginBottom:50, 
                    marginTop: 20,  
                    marginLeft: 50, 
                    marginRight:50,
                }}
            >
                <Text style={{
                    fontSize:45,
                    textAlign:'center',
                    backgroundColor:'black',
                }}
                >
                    {nombre}
                </Text>
            </View>
            <View style={{
                    flex:3,
                    marginBottom:50, 
                    marginTop: 20,  
                    marginLeft: 50, 
                    marginRight:50,
                }}
            >
                <Text style={{
                    fontSize:45,
                    textAlign:'center',
                    backgroundColor:'black',
                }}
                >
                    {actividad}
                </Text>
            </View>
        </View>
            
        
    );
}


export default PrimerPantalla;