import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import FlexDirectionScreen from './src/screens/FlexDirectionScreen';
import PrimerPantalla from './src/screens/PrimerPantalla';
import SegundaPantalla from './src/screens/SegundaPantalla';
import TercerPantalla from './src/screens/TercerPantalla';

const App = () => {
  return(
    <SafeAreaView>
      <PrimerPantalla />
      <SegundaPantalla />
      <TercerPantalla />
    </SafeAreaView>
  )
}


export default App;

























/*
import HolaMundo from './src/screens/HolaMundo';
import ContadorSimpleScreen from './src/screens/ContadorSimpleScreen';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import DimensionesScreen from './src/screens/DimensionesScreen';
import ButtonScreen from './src/screens/ButtonScreen';
import TextoScreen from './src/screens/TextoScreen';
import CapibaraScreen from './src/screens/CapibaraScreen';
import AltoAnchoFlexScreen from './src/screens/AltoAnchoFlexScreen';
import AltoAnchoPorcentualScreen from './src/screens/AltoAnchoPorcentualScreen';
import AltoAnchoScreen from './src/screens/AltoAnchoScreen';

const App = () => {
  <SafeAreaView
      style={{ flex:1, }}
  >
      <FlexDirectionScreen />
  </SafeAreaView>
}

export default App;


VALIDAR VALORES
  interface alumno {
  nombre:string,
  edad:number,
  grupo:string,
}

DEFINIR VALORES
  const Oscar:alumno = {
  nombre: "Oscar Daniel Zarco",
  edad: 19,
  grupo: "DSM44",
} 

ASIGNAR VALORES
const { nombre, edad, grupo} = Oscar;

REFLEJAR VALORES

        <HolaMundo />
        <ContadorSimpleScreen />
        <BoxObjectModelScreen />
        <DimensionesScreen />
        

        //CÓDIGOS RECIENTES
        <AltoAnchoFlexScreen />
        <AltoAnchoPorcentualScreen />
        <AltoAnchoScreen />
        <ButtonScreen />
        <CapibaraScreen />
        <TextoScreen />
        

    <View style={styles.container}>
      <Text style={styles.texto}>
        {nombre}
      </Text>
      <Text style={styles.texto}>
        {edad}
      </Text>
      <Text style={styles.texto}>
        {grupo}
      </Text>
      <StatusBar style="auto" />
    </View>

//ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color:'white',
    fontSize:200,
  }
}); 

*/