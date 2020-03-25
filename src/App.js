import React, { useState } from 'react';
import styled from 'styled-components';
import { Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./parts/Portfolio";
import './css/old.css';

const App = () => {
  const [count, setCount] = useState(1)

  const NavBlock = () => {  
      switch(count) {
        case 0:
          return setCount(5)
        case 1:
          return <Titulo />
        case 2:
          return <Descripcion />
        case 3:
          return <Destrezas />
        case 4:
          return <Proyectos />
        case 5:
          return <Pie />
        case 6: 
          return setCount(1)
        default: 
          console.log("Error: default returned")
      }
  }

  return (
    <Container className="container">
      {console.log(count)}
        <div className="move_block_left" onMouseOver={() => setCount(count-1)} >Click me!</div>
        {NavBlock()}
        <div className="move_block_right" onMouseOver={() => setCount(count+1)} >Click me!</div>
    </ Container>
  );
}

const Container = styled.div`   
  font-size: 1.2rem;
  display: grid;
  height: 100vh;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  grid-column-gap: 10%;
  justify-content: center;
`   

export default App;
