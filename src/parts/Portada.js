import React from 'react';
import styled from 'styled-components';

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
const Portada = () => {
    return (
        <Titulo>
            <h1>SANTI BELLO</h1>
            <div className="subtitulo">
                <div>
                    <h2>Desarrollador Frontend</h2>
                    <h2>{"{React.js}"}</h2>
                </div>
                <Navbar />
            </div>
        </Titulo>
    )
}
const Titulo = styled.div`
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


export { Portada }