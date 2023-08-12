import './App.css';
import React, {useState} from "react"
//Esto es para importar la hoja de estilos de Boostrap For react, ¡IMPORTANTE!
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar />
    </div> 
  );
}

export default App;
