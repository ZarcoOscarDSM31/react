import { useReducer } from "react"; //se importa el useReducer

interface AuthState {
 //valida que contador sea de tipo number
    contador:number;
}

const initialState:AuthState = {
    contador:10,
}

type ActionType = //usamos las pipes o tuberias
    | { type:"incrementar" }
    | { type: "decrementar" }
    | { type: "reset" }

const contadorReducer = (state:AuthState, action:ActionType) =>{
    switch (action.type) {
        case 'incrementar':
            return {
                ...state, /* desestructurar */
                contador:state.contador + 1 /* tomo su propiedad y lo vuelvo a  rearmar */
            } /* dame el viejo state, dame el dato que tiene y lo rearmo */
        case 'decrementar':
            return {
                ...state, /* desestructurar */
                contador:state.contador - 1 /* rearmar */
            }
        case "reset":
            return {
                ...state, /* desestructurar */
                contador:initialState.contador, /* rearmar */
            }
        default:
            return state 
    }
}

//se define el componente
const ContadorRed = () => {
    const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

    return(
        <>
        <h3>Contador: {contadorState.contador}</h3>
        {/* sumar */}
        <button onClick={() => dispatch({type:"incrementar"})}>
            +1
        </button>
        {/* restar */}
        <button onClick={() => dispatch({type:"decrementar"})}>
            -1
        </button>
        {/* resetear */}
        <button onClick={() => dispatch({type:"reset"})}>
            Reset
        </button>
        </>
    )
}

export default ContadorRed;