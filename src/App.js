import React from 'react';
import { Navbar, Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./parts/Portfolio";
import './css/old.css'

function App() {
  return (
    <div id="all-this-web" async >
      <p>Henlo, this is React.</p>
      <Navbar />
      <Titulo />
      <Descripcion />
      <Destrezas />
      <Proyectos />
      <Pie />
    </div>
  );
}

export default App;
