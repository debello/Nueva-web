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
                <p>JS React</p>
                <p>CSS</p>
                <p>PHP</p>
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

    @media only screen and (max-width: 320px) {
        p {
            font-size: 30px;
        }
    }`
const Seccion = styled.h2`
    margin-bottom: 10px;`
const Tecnologias = styled.div`
    padding-right: 10%;
    h2 {
        line-height: 32px;
    }

    @media only screen and (max-width: 320px) {
        padding-right: 0px;
        h2 {
            line-height: 38px
        }
    }`
const NivelDeHabilidad = styled.div``
const CorazonInvisible = styled.img`
    width: 30px;
    display: inline-block;
    margin-bottom: 14px;

    @media only screen and (max-width: 320px) {
        width: 22px;
        margin-bottom: 31px;
    }`
const Nivel = styled.img`
    margin: 0 auto;
    width: 30px;
    margin-right: 5px;
    margin-bottom: 14px

    @media only screen and (max-width: 320px) {
       width: 22px;
       margin-right: 4px;
       margin-bottom: 20px;
    }`
export { Destrezas }