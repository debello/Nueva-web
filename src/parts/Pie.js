import React from 'react';
import styled from 'styled-components';
import corazonRojo from '../img/corazon-rojo.png';
import corazonAzul from '../img/corazon-azul.png';
import corazonVerde from '../img/corazon-verde.png';
import corazonAmarillo from '../img/corazon-amarillo.png';
import corazonVioleta from '../img/corazon-violeta.png';
import iconoGithub from '../img/icono-github.png';
import iconoTwitter from '../img/icono-twitter.png';

const Pie = () => {
    return (
        <PieCSS>
            <h2>Connect</h2>
            <RRSS>
                <a href="https://twitter.com/debellodev" rel="noopener noreferrer">
                    <Img src={iconoTwitter} alt="icono de Twitter" />
                </a>
                <a href="https://github.com/debello/" rel="noopener noreferrer">
                    <Img src={iconoGithub} alt="icono de Github" />
                </a>
            </RRSS>
            <h2>Contact</h2>
            <h3>svazquez789@hotmail.com</h3>
            <div>
                <img alt="corazon verde" src={corazonVerde} />
                <img alt="corazon amarillo" src={corazonAmarillo} />
                <img alt="corazon rojo" src={corazonRojo} />
                <img alt="corazon violeta" src={corazonVioleta} />
                <img alt="corazon azul" src={corazonAzul} />
            </div>
            <Creditos>Font and theme inspired by Undertale - Toby Fox.</Creditos>
            <Creditos>© Santi Bello - 2/2/2019</Creditos>
        </PieCSS>
    )
}
const PieCSS = styled.div`
    padding-top: 10%;`
const RRSS = styled.div``
const Img = styled.img`
    width: 55px;`
const Creditos = styled.p``

export { Pie }