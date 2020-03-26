import React, { useState } from 'react'
import styled, { createGlobalStyle }from 'styled-components'
import { Titulo } from "./parts/Titulo"
import { Descripcion } from "./parts/Descripcion"
import { Destrezas } from "./parts/Destrezas"
import { Proyectos } from "./parts/Proyectos"
import { Pie } from "./parts/Pie"
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
  
  img {
    width: 30px;
  }

  p, h1, h2, h3, span, div {
    margin: 0px; 
  }
`

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
    <>
    <GlobalStyles />
      <Container className="container">
        {console.log(count)}
        <div className="move_block_left" onClick={() => setCount(count-1)} >Click me!</div>
        {NavBlock()}
        <div className="move_block_right" onClick={() => setCount(count+1)} >Click me!</div>
      </ Container>
    </>
  );
}

const Container = styled.div` 
  font-family: 'DTMMono', monospace;  
  background-color: black;
  color: white;  
  margin: 0 auto;  
  font-size: 1.6rem;
  display: grid;
  height: 100vh;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  grid-column-gap: 10%;
  justify-content: center;
`   

export default App;
