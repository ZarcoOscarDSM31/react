import React from "react";
import { StyleSheet, View } from 'react-native';

const FlexDirectionScreen = () => {
    return(
        <View 
            style={ styles.container }
        >
            <View 
                style={ styles.box1 }
            />
            <View 
                style={ styles.box2 }
            />
            <View 
                style={ styles.box3 }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        flex: 1,
        flexWrap:"wrap",
        //justifyContent:"space-between",
        //justifyContent:"space-around",
        //justifyContent:"space-evenly",
        //flexDirection: "column",
        //alignItems: "flex-start",
        //alignItems: "flex-start",
    },
    box1:{
        backgroundColor: "blue",
        height:100,
        width:100,
    },
    box2:{
        backgroundColor: "pink",
        height:100,
        width:100,
        alignSelf:"center",
    },
    box3:{
        backgroundColor: "violet",
        height:100,
        width:100,
    },
    
});

export default FlexDirectionScreen;