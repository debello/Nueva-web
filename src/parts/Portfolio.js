import React from 'react';
import "./../css/old.css"

// eslint-disable-next-line
const myScript = () => {
    const script = document.createElement("script")
    script.async = true
    script.src = "/scripts/myscript.js"
    return document.body.appendChild(script)
}
// eslint-disable-next-line
(function createGoogleScript() {
    const googleScript = document.createElement("script")
    googleScript.async = true
    googleScript.src = "/scripts/googleScript.js"
    document.head.appendChild(googleScript)
})()

const Navbar = () => {
    return ( 
        <nav class='navbar'>
            <a href='#quien-soy'>Quién soy</a>
            <a href='#destrezas'>Destrezas</a>
            <a href='#projects-redirect'>Proyectos</a>
            <a href='#profile-link'>Contacto</a>
         </nav>
    )
}

const Titulo = () => {
    return(
    <div class='welcome-section'>
        <h1 class="this-is-title" >SANTI BELLO</h1>
        <h2 className='hover-1'>Desarrollador Web.</h2>
        <h2 className='hover-2'>* JavaScript</h2>
        <h2 className='hover-2'>* PHP</h2>
        <h2 className='hover-2'>{"{Trabajando en React}"}</h2>
    </div>
    )
}

const Descripcion = () => {
    return(
        <div class='quien-soy'>
            <p>Soy un estudiante <span className='hover-2'>autodidacta</span> en Galicia. Programo a diario.</p>
            <p>Hace más de un año empecé a trastear con Java después de verle las 'tripas' a un videojuego, lo que me llevaría a descubrir la programación Web.
            Me llamó la atención el <span className='hover-2'>valor</span> que podemos aportar mediante un código y un objetivo conjunto.</p>
            <img className="heart" src="img/heart_red.png" alt="corazón rojo" />
            <p>Actualmente busco un trabajo que permita seguir formándome y abrirme a nuevas posibilidades estoy empleado en JavaScript y React :)
            Me considero <span className='hover-2'>responsable</span>, organizado, trabajo en equipo y social, habiendo participado en la planificación y ejecución de más de <span className='hover-2'>140 eventos</span> de ocio a nivel regional desde 2014 en dos organizaciones diferentes.
            Contáctame vía gmail para cualquier duda, puesta a prueba o saludarme!</p>           
        </div>
    )
}

const Destrezas = () => {
    return (
        <div className="skills" class='destrezas'>
            <div className="skills-names">
                <p>JavaScript (React)</p>
                <p>PHP (CodeIgniter)</p>
                <p>HTML/CSS</p>
                <p>Bootstrap</p>
                <p>Java</p>
            </div>
            <div className="skills-hearts">
                <div>
                    <img src="img/heart_green.png" alt="corazón verde" />
                    <img src="img/heart_green.png" alt="corazón verde" />
                    <img src="img/heart_green.png" alt="corazón verde" />
                    <img src="img/heart_green.png" alt="corazón verde" />
                </div>
                <div>
                    <img src="img/heart_yellow.png" alt="corazón amarillo" />
                    <img src="img/heart_yellow.png" alt="corazón amarillo" />
                    <img src="img/heart_yellow.png" alt="corazón amarillo" />
                </div>
                <div>
                    <img src="img/heart_red.png" alt="corazón rojo" />
                    <img src="img/heart_red.png" alt="corazón rojo" />
                    <img src="img/heart_red.png" alt="corazón rojo" />
                </div>
                <div>
                    <img src="img/heart_violet.png" alt="corazón violeta"/>
                    <img src="img/heart_violet.png" alt="corazón violeta"/>
                    <img src="img/heart_violet.png" alt="corazón violeta"/>
                </div>
                <div>
                    <img src="img/heart_blue.png" alt="corazón azul" />
                    <img src="img/heart_blue.png" alt="corazón azul" />
                </div>
            </div>
        </div>
    )
}

const Proyectos = () => {
    return (
        <>
            <h2 class='projects-redirect'>Proyectos.</h2>
            <section class='projects' className='projects-grid'>
                <a className='p-1' href='https://debello.github.io/todolist/' rel="noopener noreferrer">To do List </a>
                <a className='p-2' href='https://debello.github.io/kanban_bello/' rel="noopener noreferrer">Kanban </a>
                <a className='p-3' href='https://github.com/debello/API-Clima' rel="noopener noreferrer">API Clima</a>
                <a className='p-4 hover-3' href='https://github.com/debello?tab=repositories' rel="noopener noreferrer">Más proyectos</a>
            </section>
        </>
    )
}

const Pie = () => {
    return (
        <div class='pie-pagina'>
            <h2 class='profile-link'>Connect</h2>
            <div class='social-buttons'>
                <a href="https://twitter.com/debellodev" rel="noopener noreferrer"><img src="img/twitter-logo.png"alt="twitter handle" /></a>
                <a href="https://github.com/debello/" rel="noopener noreferrer"><img src="img/github-logo.png" alt="twitter handle" /></a>
            </div>
            <h2>Contact</h2>
            <h3>svazquez789@hotmail.com</h3>
            <div>
                <img className="fin heart hgreen" src="img/heart_green.png" alt="corazones pequeños" />
                <img className="fin heart hyellow" src="img/heart_yellow.png" alt="corazones pequeños" />
                <img className="fin heart hred" src="img/heart_red.png" alt="corazones pequeños" />
                <img className="fin heart hviolet" src="img/heart_violet.png" alt="corazones pequeños" />
                <img className="fin heart hblue" src="img/heart_blue.png" alt="corazones pequeños" />
            </div>
            <p className='credits'>Font and theme inspired by Undertale - Toby Fox.</p>
            <p className='credits'>© Santi Bello - 2/2/2019</p>
        </div>
    )
}

export { Navbar, Titulo, Descripcion, Destrezas, Proyectos, Pie };