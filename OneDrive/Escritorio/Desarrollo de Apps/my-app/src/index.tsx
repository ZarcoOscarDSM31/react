//import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/* let nombre:string = "Oscar";
let edad:number = 19;
let grupo:string = "DSM-44";

const datos =() => {
  return(
      <>
          <div>
              <p>Nombre: {nombre}</p> <br />
              <p>Edad: {edad}</p> <br />
              <p>Grupo: {grupo}</p> <br />
          </div>
      </>
  )
} */

root.render(
  <>
    {/* <div>
      <p>Nombre: {nombre}</p> <br />
      <p>Edad: {edad}</p> <br />
      <p>Grupo: {grupo}</p> <br />
    </div> */}
    <App />
  </>
);