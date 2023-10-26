import React, {useState} from 'react';
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native';
 


const ContadorSimpleScreen = () => {
    const [contador,setContador] = useState(10);
    return (
        <view style={styles.container}>
            <text style={styles.title}>
                Contador: {contador}
            </text>
                {/* BOTÓN DE INCREMENTAR */}
                <TouchableOpacity
                    onPress={ () => setContador (contador +1 )}
                    style={styles.button}
                >
                    <view>
                        <text style={styles.buttonText}>
                            +1
                        </text>
                    </view>
                </TouchableOpacity>
                {/* BOTÓN DE DECREMENTAR */}
                <TouchableOpacity
                    onPress={ () => setContador (contador -1 )}
                    style={styles.button}
                >
                    <view>
                        <text style={styles.buttonText}>
                            -1
                        </text>
                    </view>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => setContador (contador +10 )}
                    style={styles.button}
                >
                    <view>
                        <text style={styles.buttonText}>
                            +10
                        </text>
                    </view>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => setContador (contador -10 )}
                    style={styles.button}
                >
                    <view>
                        <text style={styles.buttonText}>
                            -10
                        </text>
                    </view>
                </TouchableOpacity>
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        },

    title: {
        textAlign:'center',
        fontSize:50,
        },

    button: {
        backgroundColor:'violet',
        borderRadius:100,
        bottom: -20,
        marginHorizontal:80,
        },

    buttonText: {
        textAlign:'center',
        fontSize:40,
        color:'white',
        },
    
  }); 
export default ContadorSimpleScreen;