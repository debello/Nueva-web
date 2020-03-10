import React, { useState } from 'react';
import styled from 'styled-components'
import { Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./parts/Portfolio";
import './css/old.css'

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
      <div>
        <button className="move_block_left" onClick={() => setCount(count-1)}>Click me!</button>
        <button className="move_block_right" onClick={() => setCount(count+1)}>Click me!</button>
      </div>
      {NavBlock()}
    </ Container>
  );
}

const Container = styled.div`   
  font-size: 1.4rem;
  display: grid;
  grid-template-rows: 100px 1fr 1fr;
  grid-row-gap: 50px;

    .move_block_left {
      width: 100px;
      height: 100px;
      float: left;
    } 
    .move_block_right {
      width: 100px;
      height: 100px;
      float: right;
    }
`   

export default App;
