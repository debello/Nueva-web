import React from 'react';
import styled from 'styled-components';
import corazonRojo from '../img/corazon-rojo.png';

const Descripcion = () => {
    return(
        <Texto>
            <p>Soy un estudiante <span>autodidacta</span> gallego.</p>
            <p>Hace más de un año empecé a trastear con Java después de verle las 'tripas' a un videojuego, lo que me 
            llevaría a descubrir la programación Web.
            Me encantó el <span>valor</span> que podemos aportar mediante código y un objetivo.</p>
            <CorazonRojo src={corazonRojo} alt="corazón rojo" />
            <p>Busco un lugar donde pueda seguir formándome y abrirme a nuevos desafíos.
            Me considero <span>responsable</span>, organizado, trabajo en equipo y social, habiendo participado en 
            la planificación y ejecución de más de <span>140 eventos</span> de ocio a nivel regional desde 2014 en 
            dos organizaciones diferentes.</p>
            <br/>
            <p>Contáctame vía gmail para cualquier duda, puesta a prueba o saludarme!</p>           
        </Texto>
    )
}
const Texto = styled.div`
    margin-right: 40px;
    margin-left: 40px;
    padding-top: 10%;

    img {
        display: block;
        margin: 28px auto;
    }
    span {
        color: yellow;
    }
    
    @media only screen and (max-width: 480px) {
        margin-left: 0px;
        margin-right:0px;
    }
    @media only screen and (max-width: 320px) {
        margin-left: 0px;
        margin-right:0px;
    }
`
const CorazonRojo = styled.img``
export { Descripcion }