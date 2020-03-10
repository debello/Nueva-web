import React, { useState } from 'react';
import styled from 'styled-components'
import { Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./parts/Portfolio";
import './css/old.css'

const App = () => {
  const [count, setCount] = useState(0)
  
  const NavBlock = () => {
    switch(count) {
      case -1:
        return setCount(4)
      case 0: 
        return <Titulo />
      case 1:
        return <Descripcion />
      case 2:
        return <Destrezas />
      case 3:
        return <Proyectos />
      case 4:
        return <Pie />
      default: 
        setCount(0)
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
