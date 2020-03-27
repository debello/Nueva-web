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
                <Seccion>Destrezas</Seccion>
                <p>JavaScript (React)</p>
                <p>PHP (CodeIgniter)</p>
                <p>HTML/CSS</p>
                <p>Bootstrap</p>
                <p>Java</p>
            </Tecnologias>
            <NivelDeHabilidad>
                <div>
                    <CorazonInvisible src={corazonNegro} alt="corazón negro" />
                </div>
                <div>
                    <Nivel src={corazonVerde} alt="corazón verde" />
                    <Nivel src={corazonVerde} alt="corazón verde" />
                    <Nivel src={corazonVerde} alt="corazón verde" />
                    <Nivel src={corazonVerde} alt="corazón verde" />
                </div>
                <div>
                    <Nivel src={corazonAmarillo} alt="corazón amarillo" />
                    <Nivel src={corazonAmarillo} alt="corazón amarillo" />
                    <Nivel src={corazonAmarillo} alt="corazón amarillo" />
                </div>
                <div>
                    <Nivel src={corazonRojo} alt="corazón rojo" />
                    <Nivel src={corazonRojo} alt="corazón rojo" />
                    <Nivel src={corazonRojo} alt="corazón rojo" />
                </div>
                <div>
                    <Nivel src={corazonVioleta} alt="corazón violeta"/>
                    <Nivel src={corazonVioleta} alt="corazón violeta"/>
                    <Nivel src={corazonVioleta} alt="corazón violeta"/>
                </div>
                <div>
                    <Nivel src={corazonAzul} alt="corazón azul" />
                    <Nivel src={corazonAzul} alt="corazón azul" />
                </div>
            </NivelDeHabilidad>
        </Lista>
    )
}
const Lista = styled.div`
    display: flex;
    padding-top: 10%;

    p {
        margin-bottom: 10px;
    }
    img {
        width: 30px;
        display: inline-block;
        margin-right: 5px;
    }`
const Seccion = styled.h2`
    margin-bottom: 10px;`
const Tecnologias = styled.div`
    padding-right: 10%;
    h2 {
        line-height: 32px;
    }`
const NivelDeHabilidad = styled.div``
const CorazonInvisible = styled.img`
    margin-bottom: 10px;`
const Nivel = styled.img`
    margin: 0 auto;`
export { Destrezas }