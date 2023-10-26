import useCounter from "../hooks/useCounter";
const ContadorConHook = () => {
    const {valor, acumular } =useCounter(10);

    return (
        <>
            <h3>Contador Hook {valor}</h3>
            <button 
                onClick={ () => acumular(1)}  
            >
                +1
            </button>
            <button 
                onClick={ () => acumular(-1)}  
            >
                -1
            </button>
        </>
    )
}

export default ContadorConHook;