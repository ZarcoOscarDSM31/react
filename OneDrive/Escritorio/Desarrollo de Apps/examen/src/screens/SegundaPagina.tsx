import React from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const SegundaPagina =() => {
    return(
        <View
            style={ styles.container}
        >
            <div>
                <button style={styles.inpu}>
                    Texto
                </button>
            </div>

            <div>
                <div style={styles.text}>Esta es la imagen</div>
                <img src="data:image/jpeg;base64,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" 
                style={styles.imagen1} />
            </div>      
        </View>
        
    
    );
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'orange',
        alignItems: 'center',
        width: 300,
        height: 500,
    },

    inpu:{
        alignContent: "center",
        color: "black",
        fontSize: 20,
        height: 50,
        width:100,
        borderColor: 'red',
        marginTop: 50,
        marginBottom: 50,
    },

    imagen1:{
        width: 300,
        height: 300,
    },

    text:{
        color: 'white',
        textAlign:'center',
        position: 'relative',
        top: 150,
        fontSize: 25,
    },
    
}); 

export default SegundaPagina;