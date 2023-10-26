import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PrimerPagina from './src/screens/PrimeraPagina';
import SegundaPagina from './src/screens/SegundaPagina';
import TercerPagina from './src/screens/TercerPagina';
import { ExamenPantallaUno } from './src/screens/examen/ExamenPantallaUno';
import { ExamenPantallaDos } from './src/screens/examen/ExamenPantallaDos';
import { ExamenPantallaTres } from './src/screens/examen/ExamenPantallaTres';
import { PersonaScreen } from './src/screens/examen/PersonaScreen';

export default function App() {
  return (
    <NavigationContainer>
        {/* ESTO PERTENECE AL EJERCICIO PREVIO AL EXAMEN*/}
        {/* <PrimerPagina />  */}
        {/* <SegundaPagina /> */} 
        {/* <TercerPagina /> */}  

        {/* ESTO PERTENECE AL EXAMEN */}
        {/* <ExamenPantallaUno />  */}
        {/* <ExamenPantallaDos /> */} 
        {/* <ExamenPantallaTres /> */}
        {/* <PersonaScreen /> */}

        <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
