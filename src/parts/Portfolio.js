import React from 'react';
import styled from 'styled-components';
import corazonRojo from '../img/corazon-rojo.png';
import corazonAzul from '../img/corazon-azul.png';
import corazonVerde from '../img/corazon-verde.png';
import corazonAmarillo from '../img/corazon-amarillo.png';
import corazonVioleta from '../img/corazon-violeta.png';
import corazonNegro from '../img/corazon-negro.png';

// eslint-disable-next-line
// function myScript() {
//     const script = document.createElement("script")
//     script.async = true
//     script.src = "/scripts/myscript.js"
//     document.body.appendChild(script)
// }
// myScript()
// eslint-disable-next-line
// function createGoogleScript() {
//     const googleScript = document.createElement("script")
//     googleScript.async = true
//     googleScript.src = "/scripts/googleScript.js"
//     document.head.appendChild(googleScript)
// }
// createGoogleScript()

const Navbar = () => {
    return ( 
        <NavbarCSS>
            <a href='#quien-soy'>Quién soy</a>
            <a href='#destrezas'>Destrezas</a>
            <a href='#projects-redirect'>Proyectos</a>
            <a href='#profile-link'>Contacto</a>
         </NavbarCSS>
    )
}
const NavbarCSS = styled.div`
    display: block;
    float: right;
    place-self: start end;
    > * {
        display: flex;
        flex-direction: column;
    }
`
const Titulo = () => {
    return (
        <TituloCSS>
            <h1>SANTI BELLO</h1>
            <div className="subtitulo">
                <div>
                    <h2>Desarrollador Frontend</h2>
                    <h2>{"{React.js}"}</h2>
                </div>
                <Navbar />
            </div>
        </TituloCSS>
    )
}
const TituloCSS = styled.div`
    padding-top: 10%;
    display: grid;

    p { 
        place-self: start end;
        margin: 10px;
        float: right;
    }
    h1 {
        font-family: 'EndlessBoss', monospace;  
        font-size: 100px;
        justify-self: center;
    }
    .subtitulo {
       display: flex;
       flex-direction: row;
       justify-content: space-around;
    }`


const Descripcion = () => {
    return(
        <DescripcionCSS>
            <p>Soy un estudiante <span>autodidacta</span> gallego.</p>
            <p>Hace más de un año empecé a trastear con Java después de verle las 'tripas' a un videojuego, lo que me 
            llevaría a descubrir la programación Web.
            Me fascinó el <span>valor</span> que podemos aportar mediante código y un objetivo.</p>
            <img src={corazonRojo} alt="corazón rojo" />
            <p>Busco un lugar donde pueda seguir formándome y abrirme a nuevos desafíos.
            Me considero <span>responsable</span>, organizado, trabajo en equipo y social, habiendo participado en 
            la planificación y ejecución de más de <span>140 eventos</span> de ocio a nivel regional desde 2014 en 
            dos organizaciones diferentes.
            Contáctame vía gmail para cualquier duda, puesta a prueba o saludarme!</p>           
        </DescripcionCSS>
    )
}
const DescripcionCSS = styled.div`
    margin-right: 40px;
    margin-left: 40px;
    padding-top: 10%;

    img {
        display: block;
        margin: 0 auto;
    }`

const Destrezas = () => {
    return (
        <DestrezasCSS>
            <div>
                <h2>Destrezas</h2>
                <p>JavaScript (React)</p>
                <p>PHP (CodeIgniter)</p>
                <p>HTML/CSS</p>
                <p>Bootstrap</p>
                <p>Java</p>
            </div>
            <div>
                <div>
                    <img src={corazonNegro} alt="corazón negro" />
                </div>
                <div>
                    <img src={corazonVerde} alt="corazón verde" />
                    <img src={corazonVerde} alt="corazón verde" />
                    <img src={corazonVerde} alt="corazón verde" />
                    <img src={corazonVerde} alt="corazón verde" />
                </div>
                <div>
                    <img src={corazonAmarillo} alt="corazón amarillo" />
                    <img src={corazonAmarillo} alt="corazón amarillo" />
                    <img src={corazonAmarillo} alt="corazón amarillo" />
                </div>
                <div>
                    <img src={corazonRojo} alt="corazón rojo" />
                    <img src={corazonRojo} alt="corazón rojo" />
                    <img src={corazonRojo} alt="corazón rojo" />
                </div>
                <div>
                    <img src={corazonVioleta} alt="corazón violeta"/>
                    <img src={corazonVioleta} alt="corazón violeta"/>
                    <img src={corazonVioleta} alt="corazón violeta"/>
                </div>
                <div>
                    <img src={corazonAzul} alt="corazón azul" />
                    <img src={corazonAzul} alt="corazón azul" />
                </div>
            </div>
        </DestrezasCSS>
    )
}
const DestrezasCSS = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 10%;

    p {
        margin-bottom: 10px;
    }
    img {
        display: inline-block;
        margin: 0 auto;
        width: 30px;
        margin-right: 5px;
    }`

const Proyectos = () => {
    return (
        <ProyectosCSS>
            <h2>Proyectos</h2>
            <section>
                <p><a href='https://debello.github.io/todolist/' rel="noopener noreferrer">To do List </a></p>
                <p><a href='https://debello.github.io/kanban_bello/' rel="noopener noreferrer">Kanban </a></p>
                <p><a href='https://github.com/debello/API-Clima' rel="noopener noreferrer">API Clima</a></p>
                <p><a href='https://github.com/debello?tab=repositories' rel="noopener noreferrer">Más proyectos</a></p>
            </section>
        </ProyectosCSS>
    )
}
const ProyectosCSS = styled.div`
    padding-top: 10%;
    section p {
        display: block;
    }`

export { Navbar, Titulo, Descripcion, Destrezas, Proyectos }