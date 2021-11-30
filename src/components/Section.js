import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ id, title, description, backgroundImg, leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImage={ backgroundImg }>
            <Fade bottom>
                <ItemText id={ id }>
                    <h1 id="titulo">{ title }</h1>
                    <p id="descripcion">{ description }</p> 
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>

                        { rightBtnText && 
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }      
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Buttons>

        </Wrap>
    )
}

export default Section

// esta constante la modifiqué, originalmente la puse en background image del styled Wrap pero me arrojaba una advertencia para no usar
// template literals anidadas. No estoy del todo seguro si debería ser una constante o variable.
const bgImage = props => `url("/images/${props.bgImage}")`;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${bgImage}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
    // font-weight: ;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 550;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`