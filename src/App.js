import React from 'react';
import styled from 'styled-components'
import { Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./parts/Portfolio";
import './css/old.css'

const App = () => {
  return (
    <Container className="container">
      
      <Titulo />
      <Descripcion />
      <Destrezas />
      <Proyectos />
      <Pie />
    </ Container>
  );
}

const Container = styled.div`   
  font-size: 1.4rem;
  img {
    width: 40px;
  }
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 400px;
  
`

export default App;
