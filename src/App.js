import React, { useState } from 'react'
import styled, { createGlobalStyle }from 'styled-components'
import { Portada } from "./parts/Portada"
import { Descripcion } from "./parts/Descripcion"
import { Destrezas } from "./parts/Destrezas"
import { Proyectos } from "./parts/Proyectos"
import { Pie } from "./parts/Pie"
import leftArrow from "./img/arrow-left.svg"
import fontDetermination from "./fonts_src/DeterminationSansWeb.ttf"
//import fontSuperMario from "./fonts_src/SuperPlumberBrothers.ttf";
import fontBoss from "./fonts_src/EndlessBossBattle.ttf"
//import fontMonster from "./fonts_src/MonsterFriendFore.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DTMMono';
    src: url(${fontDetermination}) format('truetype');
  }
  @font-face {
    font-family: 'EndlessBoss';
    src: url(${fontBoss}) format('truetype');
  }

  body {
    background-color: black;
    font-family: 'DTMMono', monospace;  
    color: white;  
    margin: 0 auto;  
    font-size: 1.6rem;
  }
  p, h1, h2, h3 {
    margin: 0px; 
  }
  img {
    width: 30px;
  }
`

const App = () => {
  const [count, setCount] = useState(1)

  const NavBlock = () => {  
      switch(count) {
        case 0:
          return setCount(5)
        case 1:
          return <Portada />
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
    <>
    <GlobalStyles />
      <Container className="container">
        {console.log(count)}
        <div className="move_block_left" onClick={() => setCount(count-1)} >
          <img src={leftArrow} alt="flecha izquierda"/>
        </div>
        {NavBlock()}
        <div className="move_block_right" onClick={() => setCount(count+1)} >Click me!</div>
      </ Container>
    </>
  );
}

const Container = styled.div` 
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  grid-column-gap: 10%;
  justify-content: center;
`   

export default App;
