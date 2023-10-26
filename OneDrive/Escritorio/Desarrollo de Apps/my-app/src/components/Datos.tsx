import {useState} from "react";
//const tupla:[number,string,boolean] = [ 23,"Oscar",true ]; 

/* console.clear();
console.log(tupla); */

//para algo más sencilo
//const [id,nombre,estadoCivil] = tupla;

//const datos =() =>{
    //return(
        //<>
        //Número alumno : {id} <br />
        //Nombre alumno: {nombre} <br />
        //Estado civil: {(estadoCivil) ? "Casado" : "Soltero" /* terneario o if de una sola fila */}
        //</>
    //)
//}

const Datos = () => {
    const [valor, setValor] = useState(10);
        const acumular = (numero:number) => {
            setValor( valor + numero );
        }
        return 
        <>
        <h3> Valor: {valor}</h3>
        <button
            onClick={() => acumular(1)}
        >
            +1
        </button>
        <br />
        </>
}
/* Use state: se encarga de modificar */
export default Datos;