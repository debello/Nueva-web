import React from 'react';
import "./old.css"

const script = document.createElement("script")
script.async = true
script.src = "/scripts/myscript.js"
document.body.appendChild(script)

const Titulo = () => {
    
    return (
        <div>
        <script />
            <nav id='navbar'>
                <a href='#quien-soy'>Quién soy</a>
                <a href='#destrezas'>Destrezas</a>
                <a href='#projects-redirect'>Proyectos</a>
                <a href='#profile-link'>Contacto</a>
            </nav>
            <div id='raya_primera'></div>
            <div id='mini-raya'></div>
            <div id='welcome-section'>
                <h1 id="this-is-title" >SANTI BELLO</h1>
                <h2 className='hover-1'>Desarrollador Web.</h2>
                <h2 className='hover-2'>* JavaScript</h2>
                <h2 className='hover-2'>* PHP</h2>
                <h2 className='hover-2'>{"{Trabajando en React}"}</h2>
            </div>
        </div>
    )
}

const Descripcion = () => {
    return(
        <div className='container' id='quien-soy'>
            <div className='jumbotron' style={{lineHeight: "20px"}} >
                <div id='txt'>
                    <p className='rwd-line'>Soy un estudiante <span className='hover-2'>autodidacta</span> en Galicia. Programo a diario.
                    </p><br />
                    <p className='rwd-line'>Hace más de un año empecé a trastear con Java después de verle las
                    'tripas' a un videojuego, lo que me llevaría a descubrir la programación Web.
                    <br></br>
                    Me llamó la atención el <span className='hover-2'>valor</span> que podemos aportar mediante un código y un objetivo conjunto.</p>
                    <br /><br />
                    <div id='pie-pagina'>
                        <img className="heart" src="img/heart_red.png" alt="corazón rojo" /></div>
                    <br /><br /><br />
                    <p className='rwd-line'>Actualmente <strike>busco un trabajo que permita seguir formándome y
                        abrirme a nuevas posibilidades</strike> estoy empleado en JavaScript y React :)</p>
                    <br />
                    <p className='rwd-line'>Me considero <span className='hover-2'>responsable</span>, organizado, trabajo en equipo y social,
                    habiendo participado en la planificación y ejecución de más de <span className='hover-2'>140 eventos</span> de ocio a nivel
                    regional desde 2014 en dos organizaciones diferentes.</p>
                    <p className='rwd-line'>Contáctame vía gmail para cualquier duda, puesta a prueba o saludarme!</p>
                </div>
            </div>
        </div>
    )
}

const Destrezas = () => {
    return (
        <div className = 'flox-all' id='destrezas'>
            <div className="sk-names">
                <div><p>JavaScript (React)</p></div>
                <div><p>PHP (CodeIgniter)</p></div>
                <div><p>HTML/CSS</p></div>
                <div><p>Bootstrap</p></div>
                <div><p>Java</p></div>
            </div>

            <div className="sk-hearts">
                <div className="sk-heart">
                    <img className="heart" src="img/heart_green.png" alt="corazón verde" />
                    <img className="heart" src="img/heart_green.png" alt="corazón verde" />
                    <img className="heart" src="img/heart_green.png" alt="corazón verde" />
                    <img className="heart" src="img/heart_green.png" alt="corazón verde" />
                </div>
                <div className="sk-heart">
                    <img className="heart" src="img/heart_yellow.png" alt="corazón amarillo" />
                    <img className="heart" src="img/heart_yellow.png" alt="corazón amarillo" />
                    <img className="heart" src="img/heart_yellow.png" alt="corazón amarillo" />
                </div>
                <div className="sk-heart">
                    <img className="heart" src="img/heart_red.png" alt="corazón rojo" />
                    <img className="heart" src="img/heart_red.png" alt="corazón rojo" />
                    <img className="heart" src="img/heart_red.png" alt="corazón rojo" />
                </div>
                <div className="sk-heart">
                    <img className="heart" src="img/heart_violet.png" alt="corazón violeta"/>
                    <img className="heart" src="img/heart_violet.png" alt="corazón violeta"/>
                    <img className="heart" src="img/heart_violet.png" alt="corazón violeta"/>
                </div>
                <div className="sk-heart">
                    <img className="heart" src="img/heart_blue.png" alt="corazón azul" />
                    <img className="heart" src="img/heart_blue.png" alt="corazón azul" />
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

export { Titulo, Descripcion, Destrezas, Proyectos, Pie };