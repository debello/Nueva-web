import React, { useState } from 'react';
import styled from 'styled-components'
import { Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./parts/Portfolio";
import './css/old.css'
console.log("test")
console.log(window.location)

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
      <button className="moveBlock" onClick={() => setCount(count+1)}>Click me!</button>
      {NavBlock()}

    </ Container>
  );
}

const Container = styled.div`   
  font-size: 1.4rem;
    .moveBlock {
      width: 100px;
      height: 100px;
    }
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 400px;
  
`
/*
class App extends React.Component {
  state = { count: 0 }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }
  
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  cambiazo = () => {
    if(this.state.count > 0) {
      return <Descripcion />
    }
  }
  render() {
    return (
      <Container className="container">
        
        <Titulo  onClick={this.handleIncrement} />       
        <button onClick={this.handleIncrement}>Click me!</button>
        {this.cambiazo()}
        <Destrezas />
        <Proyectos />
        <Pie />
      </ Container>
    );
  }
}
*/ 
export default App;
