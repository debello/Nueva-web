import React from 'react';
import styled from 'styled-components';


// eslint-disable-next-line
function myScript() {
    const script = document.createElement("script")
    script.async = true
    script.src = "/scripts/myscript.js"
    document.body.appendChild(script)
}
myScript()
// eslint-disable-next-line
function createGoogleScript() {
    const googleScript = document.createElement("script")
    googleScript.async = true
    googleScript.src = "/scripts/googleScript.js"
    document.head.appendChild(googleScript)
}
createGoogleScript()

const Navbar = () => {
    return ( 
        <NavbarCSS className='navbar'>
            <a href='#quien-soy'>Quién soy</a>
            <a href='#destrezas'>Destrezas</a>
            <a href='#projects-redirect'>Proyectos</a>
            <a href='#profile-link'>Contacto</a>
         </NavbarCSS>
    )
}
const NavbarCSS = styled.div`
    display: block;
    > * {
        display: flex;
        flex-direction: column;
    }
`
const Titulo = () => {
    return (
        <TituloCSS className="titulo">
            <h1 className="this-is-title" >SANTI BELLO</h1>
            <div className="subtitulo">
                <div>
                    <h2 className='hover-1'>Desarrollador Frontend</h2>
                    <h2 className='hover-2'>* JavaScript</h2>
                    <h2 className='hover-2'>{"{React.js}"}</h2>
                </div>
                <Navbar />
            </div>
        </TituloCSS>
    )
}
const TituloCSS = styled.div`
    place-self: center;
    display: grid;
    letter-spacing: 0.15rem;
    padding-top: 10%;

    p { 
        place-self: start end;
        margin: 10px;
        float: right;
    }
    .this-is-title {
        font-size: 8rem;
    }
    .subtitulo {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
    }
    .navbar {
        float: right;
        place-self: start end;
    }
`


const Descripcion = () => {
    return(
        <DescripcionCSS className='quien-soy'>
            <p>Soy un estudiante <span className='hover-2'>autodidacta</span> en Galicia. Programo a diario.</p>
            <p>Hace más de un año empecé a trastear con Java después de verle las 'tripas' a un videojuego, lo que me llevaría a descubrir la programación Web.
            Me llamó la atención el <span className='hover-2'>valor</span> que podemos aportar mediante un código y un objetivo conjunto.</p>
            <img className="heart" src="img/heart_red.png" alt="corazón rojo" />
            <p>Actualmente busco un trabajo que permita seguir formándome y abrirme a nuevas posibilidades estoy empleado en JavaScript y React :)
            Me considero <span className='hover-2'>responsable</span>, organizado, trabajo en equipo y social, habiendo participado en la planificación y ejecución de más de <span className='hover-2'>140 eventos</span> de ocio a nivel regional desde 2014 en dos organizaciones diferentes.
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
        width: 30px;
    }`

const Destrezas = () => {
    return (
        <DestrezasCSS className="skills">
            <div className="skills-names">
                <p>JavaScript (React)</p>
                <p>PHP (CodeIgniter)</p>
                <p>HTML/CSS</p>
                <p>Bootstrap</p>
                <p>Java</p>
            </div>
            <div className="skills-hearts">
                <div>
                    <img width="40px" src="img/heart_green.png" alt="corazón verde" />
                    <img width="40px" src="img/heart_green.png" alt="corazón verde" />
                    <img width="40px" src="img/heart_green.png" alt="corazón verde" />
                    <img width="40px" src="img/heart_green.png" alt="corazón verde" />
                </div>
                <div>
                    <img width="40px" src="img/heart_yellow.png" alt="corazón amarillo" />
                    <img width="40px" src="img/heart_yellow.png" alt="corazón amarillo" />
                    <img width="40px" src="img/heart_yellow.png" alt="corazón amarillo" />
                </div>
                <div>
                    <img width="40px" src="img/heart_red.png" alt="corazón rojo" />
                    <img width="40px" src="img/heart_red.png" alt="corazón rojo" />
                    <img width="40px" src="img/heart_red.png" alt="corazón rojo" />
                </div>
                <div>
                    <img width="40px" src="img/heart_violet.png" alt="corazón violeta"/>
                    <img width="40px" src="img/heart_violet.png" alt="corazón violeta"/>
                    <img width="40px" src="img/heart_violet.png" alt="corazón violeta"/>
                </div>
                <div>
                    <img width="40px" src="img/heart_blue.png" alt="corazón azul" />
                    <img width="40px" src="img/heart_blue.png" alt="corazón azul" />
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
            <h2 className='projects-redirect'>Proyectos</h2>
            <section className='projects'>
                <p><a className='p-1' href='https://debello.github.io/todolist/' rel="noopener noreferrer">To do List </a></p>
                <p><a className='p-2' href='https://debello.github.io/kanban_bello/' rel="noopener noreferrer">Kanban </a></p>
                <p><a className='p-3' href='https://github.com/debello/API-Clima' rel="noopener noreferrer">API Clima</a></p>
                <p><a className='p-4 hover-3' href='https://github.com/debello?tab=repositories' rel="noopener noreferrer">Más proyectos</a></p>
            </section>
        </ProyectosCSS>
    )
}
const ProyectosCSS = styled.div`
    padding-top: 10%;
    section p {
        display: block;
    }`

const Pie = () => {
    return (
        <PieCSS className='pie-pagina'>
            <h2 className='profile-link'>Connect</h2>
            <div className='social-buttons'>
                <a href="https://twitter.com/debellodev" rel="noopener noreferrer"><img src="img/twitter-logo.png" width="100px" alt="twitter handle" /></a>
                <a href="https://github.com/debello/" rel="noopener noreferrer"><img src="img/github-logo.png" width="100px" alt="twitter handle" /></a>
            </div>
            <h2>Contact</h2>
            <h3>svazquez789@hotmail.com</h3>
            <div>
                <img width="40px" className="fin heart hgreen" src="img/heart_green.png" alt="corazones pequeños" />
                <img width="40px" className="fin heart hyellow" src="img/heart_yellow.png" alt="corazones pequeños" />
                <img width="40px" className="fin heart hred" src="img/heart_red.png" alt="corazones pequeños" />
                <img width="40px" className="fin heart hviolet" src="img/heart_violet.png" alt="corazones pequeños" />
                <img width="40px"className="fin heart hblue" src="img/heart_blue.png" alt="corazones pequeños" />
            </div>
            <p className='credits'>Font and theme inspired by Undertale - Toby Fox.</p>
            <p className='credits'>© Santi Bello - 2/2/2019</p>
        </PieCSS>
    )
}
const PieCSS = styled.div`
    padding-top: 10%;
`
export { Navbar, Titulo, Descripcion, Destrezas, Proyectos, Pie };