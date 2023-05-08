
import { useState, useEffect } from "react";
import Form from './components/Form'
import Cita from "./components/Cita";


function App() {

  // Citas in local Storage
  // Local storage solo almacena string
  let citasIni = JSON.parse(localStorage.getItem('citas'));
  if (!citasIni)
    citasIni = [];

  // array citas
  const [citas, setCitas] = useState(citasIni);
    
  //UseEffect to do operations then the state changes

  useEffect( () => {
    //dispara cuando el componente esta listo o haya cambios en el componente, tambien para decirle que se ejecute una ves se pone el []
    //Dentro de las llaves se le conoce como dependencias asi que cada ves que "citas" cambie se dispara el useEffect
    let citasIni = JSON.parse(localStorage.getItem('citas'));
    if (citasIni)
      localStorage.setItem('citas',JSON.stringify(citas));
    else
      localStorage.setItem('citas',JSON.stringify([]));

  },[citas])

  // function add new citas 

  const createCita = cita => {
    setCitas([...citas,cita]);
  };

  //function delete cita

  const deleteCita = id => {
    const newCita = citas.filter((cita) => cita.id !== id);
    setCitas(newCita);
  }

  //message conditional
  const title_ = citas.length === 0 ? 'No hay citas' : "Administrador de Citas";

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createCita = {createCita}
            />
          </div>
          <div className="one-half column">
             <h2>{title_}</h2>
             {citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  deleteCita = {deleteCita}
                />
             ))}
          </div>    
        </div>
      </div>
    </>
  );
}

export default App;
