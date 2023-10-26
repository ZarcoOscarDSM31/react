import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxObjectModelScreen = () => {
    const nombre:string = "Oscar";
    return(
        <View style={ styles.container }>
            <text style={styles.title}>
                { nombre }
            </text>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        padding: 30,
        backgroundColor:'violet',
    },

    title:{
        paddingHorizontal:100,
        paddingVertical:20,
        fontSize:30,
        borderWidth: 1,
        backgroundColor: "red",
        color:"white",
    },
});

export default BoxObjectModelScreen;