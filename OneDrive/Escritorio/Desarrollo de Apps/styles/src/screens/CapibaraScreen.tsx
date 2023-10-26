import React from 'react';
import {View, Image, Text, StyleSheet, useWindowDimensions} from 'react-native';

export const CapibaraScreen = () => {

    const assets:string = './../../assets/';
    const { width, height } = useWindowDimensions();

    return(
        <View>
            <Image
                source={require(assets+'capibara.jpeg')}
                style={{
                    ...styles.capibaraI,
                    height: height*0.33,
                    width: width,
                }}
            />            
            <Image
                source={require(assets+'capibara2.png')}
                style={{
                    ...styles.capibaraI,
                    height: height*0.33,
                    width: width,
                }}
            />            
            <View
                style={ styles.containerImage }
            >
                <Text
                    style={ styles.textImage }
                >
                    Capibara...
                </Text>
                <Image
                    source={{ uri: 'https://i.etsystatic.com/17603298/r/il/8672dc/4853437638/il_fullxfull.4853437638_ad5i.jpg' }}
                    style={{
                        ...styles.capibaraIII,
                        height: height*0.34,
                        width: width,
                    }}
                />            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width: "100%",
    },
    capibaraI:{
        borderColor: 'violet',
        borderWidth: 3,
        borderRadius:100,
        paddingBottom: 20,
    },
    capibaraII:{
        borderColor: 'purple',
        borderWidth: 3,
        borderRadius:20,
        opacity: 0.2,
        paddingBottom: 20,
    },
    capibaraIII:{
        borderColor: 'pink',
        borderWidth: 3,
        borderRadius:50,
        opacity: 0.75,
        paddingBottom: 20,
    },
    containerImage:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textImage:{
        fontSize: 70,
        fontWeight: 'bold',
        color: 'black',
        textAlign:"center",
        position:"absolute",
    }
});
