import React from "react";
import { View, StyleSheet, Text, Image,useWindowDimensions, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";

interface Props extends StackScreenProps<RootStackParams,"ExamenPantallaDos">{};
export const ExamenPantallaDos = ( {navigation}:Props) =>{
    const {width,height} = useWindowDimensions();
        const navigator = useNavigation();
    return(
        <View
            style={ styles.container}
        >
            
                <Image
                source ={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWOCLVV0wRNYlUPGDb-3RZto74mTVl55NMA&usqp=CAU' }}
                style={styles.imagen1}
                />


                <Image
                source ={{ uri:'https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg' }}
                style={styles.imagen2}
                />
                
                <Text style={styles.text}> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Text>
                
                <Button title="Ir a la pantalla 1"
                        onPress={ () => {navigation.navigate("ExamenPantallaUno")} }
                />
                <Button title="Ir a la pantalla 3"
                        onPress={ () => {navigation.navigate("ExamenPantallaTres")} }
                />
               
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        height: 600,
        backgroundColor: '#EAB69F',
        alignItems: 'center',
    },
    imagen1:{
        width: 400,
        height: "50%",
    },
    imagen2:{
        width: 400,
        height: "50%",
    },

    text:{
        color: 'blue',
        textAlign:'center',
        position: 'relative',
        top: -300,
        fontSize: 30,

    },
});
