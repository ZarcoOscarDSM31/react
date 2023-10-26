import React from "react";
import { View, Text, StyleSheet,useWindowDimensions,Image } from "react-native";

const DimensionesScreen = () => {
    const {width,height} = useWindowDimensions();
    return(
        <view style={styles.container}>
            <view style={styles.cajaMorada}>
                <view style={styles.cajaNaranja}>
                
                </view>
            </view>
            <Image
                style={ styles.capibara }
                source={{
                    uri: "https://el-hilvan.myshopify.com/cdn/shop/collections/capibara_3.jpg?v=1679445977"
                }}
            />
            <text style={styles.title}>
                W {width}  H {height}
            </text>
        </view>
    )
}

const styles=StyleSheet.create({
    container:{
        width: "100%",
        height: 600,
        backgroundColor: "red",
    },

    cajaMorada:{
        padding: 50,
        width: "50%",
        height: "70%",
        backgroundColor: "purple",
        
    },

    cajaNaranja:{
        padding:50,
        backgroundColor: "orange",
    },

    title:{
        fontSize: 40,
        textAlign: "center",
        color:"white",
    },

    capibara:{
        height: "70%",
        width: "100%",
        borderRadius: 100,
        
    },
});

export default DimensionesScreen;