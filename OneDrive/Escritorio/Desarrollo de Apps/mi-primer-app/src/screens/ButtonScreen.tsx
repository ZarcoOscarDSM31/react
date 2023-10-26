import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity} from 'react-native';

const ButtonScreen = () => {

    const initialState:number = 10;

    const [ contador, setContador ] = useState( initialState );

    const addContador = ( num:number ):void => {
        setContador( contador + num );
    }

    const resetContador = ():void => {
        setContador( initialState );
    }

    return(
        <View
            style={{ flex: 1, alignContent: "center", justifyContent: "center", paddingHorizontal: 60, }}
        >
            <Text
                style={{ fontWeight: "bold", fontSize: 30, textAlign:"center", marginBottom:100 }}
            >
                Contador: {contador}
            </Text>
            <Button
                title='Button +1'
                onPress={ () => addContador( 1 ) }
            />
            <TouchableOpacity
                onPress={ () => resetContador() }
            >
                <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'violet',
                        borderRadius:5,
                        height:30,
                        justifyContent: 'center',
                        marginBottom: 10,
                        marginTop:10,
                    }}
                >
                    <Text
                        style={{
                            color:"white",
                            fontSize:17,
                        }}
                    >
                        Button reset
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => addContador( -1 ) }
            >
                <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'orange',
                        borderRadius:5,
                        height:30,
                        justifyContent: 'center',
                        marginBottom: 10,
                        marginTop:10,
                    }}
                >
                    <Text
                        style={{
                            color:"white",
                            fontSize:17,
                        }}
                    >
                        Button -1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonScreen;