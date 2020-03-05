import React from 'react';
import styled from 'styled-components'
import { Titulo, Descripcion, Destrezas, Proyectos, Pie } from "./parts/Portfolio";
import './css/old.css'
console.log("test")
console.log(window.location)
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
