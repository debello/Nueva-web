import React from 'react';
//import logo from './logo.svg';
import { Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./Portfolio";
import './App.css';
//import {Hola} from "./test"

function App() {
  return (
    <div>
      <p>Henlo, this is React.</p>
      <Titulo />
      <Descripcion />
      <Destrezas />
      <Proyectos />
      <Pie />
    </div>
  );
}

export default App;
