import React from 'react';
import "./../css/old.css"

const script = document.createElement("script")
script.async = true
script.src = "/scripts/myscript.js"
document.body.appendChild(script)

const googleScript = document.createElement("script")
googleScript.async = true
googleScript.src = "/scripts/googleScript.js"
document.head.appendChild(googleScript)

const Navbar = () => {
    return ( 
        <nav id='navbar'>
            <a href='#quien-soy'>Quién soy</a>
            <a href='#destrezas'>Destrezas</a>
            <a href='#projects-redirect'>Proyectos</a>
            <a href='#profile-link'>Contacto</a>
         </nav>
    )
}

const Titulo = () => {
    return(
    <div id='welcome-section'>
        <h1 id="this-is-title" >SANTI BELLO</h1>
        <h2 className='hover-1'>Desarrollador Web.</h2>
        <h2 className='hover-2'>* JavaScript</h2>
        <h2 className='hover-2'>* PHP</h2>
        <h2 className='hover-2'>{"{Trabajando en React}"}</h2>
    </div>
    )
}

const Descripcion = () => {
    return(
        <div id='quien-soy'>
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
        <div className="skills" id='destrezas'>
            <div className="skills-names">
                <div><p>JavaScript (React)</p></div>
                <div><p>PHP (CodeIgniter)</p></div>
                <div><p>HTML/CSS</p></div>
                <div><p>Bootstrap</p></div>
                <div><p>Java</p></div>
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
            <div id='projects-redirect'></div>
            <h2>Proyectos.</h2>
            <section id='projects' className='projects-grid'>
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
    <>
        <div id='pie-pagina'>
            <p id='profile-link'><strong>Connect</strong></p>
            <div id='social-buttons'>
                <a href="https://twitter.com/debellodev" className="" rel="noopener noreferrer"><img className="RRSS" src="img/twitter-logo.png"alt="twitter handle" /></a>
                <a href="https://github.com/debello/" className="" rel="noopener noreferrer"><img className="RRSS" src="img/github-logo.png" alt="twitter handle" /></a>
            </div>
            <div id='mini-raya'></div>
            <p><strong>Contact</strong></p>
            <p id='txt-mail' style={{fontSize: "30px"}}>svazquez789@hotmail.com</p>
            <div id='raya'></div>

            <div>
                <img className="fin heart hgreen" src="img/heart_green.png" alt="corazones pequeños" />
                <img className="fin heart hyellow" src="img/heart_yellow.png" alt="corazones pequeños" />
                <img className="fin heart hred" src="img/heart_red.png" alt="corazones pequeños" />
                <img className="fin heart hviolet" src="img/heart_violet.png" alt="corazones pequeños" />
                <img className="fin heart hblue" src="img/heart_blue.png" alt="corazones pequeños" />
            </div>
        </div>
        <div id='raya'></div>

        <p id='credits'>Font and theme inspired by Undertale - Toby Fox.</p>
        <p id='credits'>© Santi Bello - 2/2/2019</p>
    </>
    )
}

export { Navbar, Titulo, Descripcion, Destrezas, Proyectos, Pie };