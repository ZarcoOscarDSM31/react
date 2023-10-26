import React from "react";
import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";
import FlexDirectionScreen from "./FlexDirectionScreen";
import { TextInput } from "react-native-gesture-handler";

const SegundaPantalla = () => {
    const texto:string = 'Imagen'
    return(
        <View style={ styles.container }>
            <View>
                <TextInput />
            </View>
            <View>
                <text style={styles.textImage}>
                    { texto }
                </text>
                <Image 
                    source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.es%2Fmoniicaa93cm%2Fleon-fondo-de-pantalla%2F&psig=AOvVaw1EN5kocVaYcMw2sKT4GW7G&ust=1696950073904000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjeiLGe6YEDFQAAAAAdAAAAABAE' }}
                    style={styles.containerImage}
                />
                
            </View>
        </View>
        
    );
}

const styles=StyleSheet.create({
    container:{
        padding: 30,
        backgroundColor:'orange',
    },
    containerImage:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textImage:{
        flex:1,
        fontSize: 70,
        fontWeight: 'bold',
        color: 'black',
        textAlign:"center",
        position:"absolute",
    },
});


export default SegundaPantalla;