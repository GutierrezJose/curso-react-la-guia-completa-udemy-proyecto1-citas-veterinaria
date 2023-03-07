import React, { useState } from "react";
import {Formulario} from './components/Formulario';
function App() {
  
  //Arreglo de citas
  const [citas, setCitas] = useState([]);

  //Funcion que tome las citas actuales y agreue la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  }

  return (
    <>
      <h1>Administrador de Pacientes</h1>
       <div className="container">
          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>
          <div className="one-half column"> 

          </div>
       </div>
    </>
  );
}

export default App;
