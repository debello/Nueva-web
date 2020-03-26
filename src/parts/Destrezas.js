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
            <div>
                <h2>Destrezas</h2>
                <p>JavaScript (React)</p>
                <p>PHP (CodeIgniter)</p>
                <p>HTML/CSS</p>
                <p>Bootstrap</p>
                <p>Java</p>
            </div>
            <div>
                <div>
                    <img src={corazonNegro} alt="corazón negro" />
                </div>
                <div>
                    <img src={corazonVerde} alt="corazón verde" />
                    <img src={corazonVerde} alt="corazón verde" />
                    <img src={corazonVerde} alt="corazón verde" />
                    <img src={corazonVerde} alt="corazón verde" />
                </div>
                <div>
                    <img src={corazonAmarillo} alt="corazón amarillo" />
                    <img src={corazonAmarillo} alt="corazón amarillo" />
                    <img src={corazonAmarillo} alt="corazón amarillo" />
                </div>
                <div>
                    <img src={corazonRojo} alt="corazón rojo" />
                    <img src={corazonRojo} alt="corazón rojo" />
                    <img src={corazonRojo} alt="corazón rojo" />
                </div>
                <div>
                    <img src={corazonVioleta} alt="corazón violeta"/>
                    <img src={corazonVioleta} alt="corazón violeta"/>
                    <img src={corazonVioleta} alt="corazón violeta"/>
                </div>
                <div>
                    <img src={corazonAzul} alt="corazón azul" />
                    <img src={corazonAzul} alt="corazón azul" />
                </div>
            </div>
        </Lista>
    )
}
const Lista = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 10%;

    p {
        margin-bottom: 10px;
    }
    img {
        display: inline-block;
        margin: 0 auto;
        width: 30px;
        margin-right: 5px;
    }`

export { Destrezas }