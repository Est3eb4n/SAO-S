import './App.css';
import React, {useState} from "react"
//Esto es para importar la hoja de estilos de Boostrap For react, ¡IMPORTANTE!
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <div className='flextesty'>
      </div>
    </div>
  );
}

export default App;
