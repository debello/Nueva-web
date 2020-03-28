import React from 'react';
import styled from 'styled-components';
import corazonRojo from '../img/corazon-rojo.png';
import corazonAzul from '../img/corazon-azul.png';
import corazonVerde from '../img/corazon-verde.png';
import corazonAmarillo from '../img/corazon-amarillo.png';
import corazonVioleta from '../img/corazon-violeta.png';
import corazonNegro from '../img/corazon-negro.png';

const Destrezas = () => {
    return (
        <Lista>
            <Tecnologias>
                <Seccion>Destreza</Seccion>
                <p>JS React</p>
                <p>CSS</p>
                <p>PHP</p>
                <p>Bootstrap</p>
                <p>Java</p>
            </Tecnologias>
            <NivelDeHabilidad>
                
                    <h2>Des</h2>
                
                <div>
                    <Nivel src={corazonVerde} alt="corazón verde" />
                    <Nivel src={corazonVerde} alt="corazón verde" />
                    <Nivel src={corazonVerde} alt="corazón verde" />
                </div>
                <div>
                    <Nivel src={corazonAmarillo} alt="corazón amarillo" />
                    <Nivel src={corazonAmarillo} alt="corazón amarillo" />
                </div>
                <div>
                    <Nivel src={corazonRojo} alt="corazón rojo" />
                    <Nivel src={corazonRojo} alt="corazón rojo" />
                </div>
                <div>
                    <Nivel src={corazonVioleta} alt="corazón violeta"/>
                    <Nivel src={corazonVioleta} alt="corazón violeta"/>
                </div>
                <div>
                    <Nivel src={corazonAzul} alt="corazón azul" />
                </div>
            </NivelDeHabilidad>
        </Lista>
    )
}
const Lista = styled.div`
    display: flex;
    padding-top: 10%;
    justify-content: center;

    @media only screen and (max-width: 320px) {
        p {
            font-size: 30px;
        }
    }`
const Seccion = styled.h2`
line-height: 28px;`
const Tecnologias = styled.div`
    display: grid;
    align-content: stretch;
    h2 {
        
    }
    @media only screen and (max-width: 480px) {
        h2 {
            font-size: 32px;
        }
    }
    @media only screen and (max-width: 400px) {
        h2 {
            font-size: 30px;
        }
    }
    @media only screen and (max-width: 320px) {
    }`
const NivelDeHabilidad = styled.div`
    display: grid;
    align-content: stretch;
    color: black;
    @media only screen and (max-width: 480px) {
        h2 {
            font-size: 32px;
        }
    }
    @media only screen and (max-width: 400px) {
        h2 {
            font-size: 30px;
        }
    }`
const CorazonInvisible = styled.img`
    width: 30px;
    padding-bottom: 26px;

    @media only screen and (max-width: 480px) {
        width: 22px;
    }
    @media only screen and (max-width: 320px) {
        width: 22px;
    }`
const Nivel = styled.img`
    width: 30px;
    padding-right: 5px;
    @media only screen and (max-width: 600px) {
        width: 25px;
    }
    @media only screen and (max-width: 480px) {
     }
    @media only screen and (max-width: 320px) {
       width: 22px;
    }`
export { Destrezas }