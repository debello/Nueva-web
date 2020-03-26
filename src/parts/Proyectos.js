import React from 'react';
import styled from 'styled-components';

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
export { Proyectos }