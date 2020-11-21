import React, { useEffect, useState } from 'react'
import frontEnd from '../../../assets/front-end-gif.gif';
import frontEndReversed from '../../../assets/front-end-gif-reversed.gif'
import frontEndStill from '../../../assets/front-end-still.png'
import styled from 'styled-components';

const FrontEndMobile = () => {

    const [fEG, setFEG] = useState(frontEndStill);
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    //it flashes the last from of the alternate gif

    const changeGif = () => {
        if (fEG === frontEndStill) {
            setFEG(frontEnd)
        } else if (fEG === frontEnd) {
            setFEG(frontEndReversed)
        } else {
            setFEG(frontEnd)
        }
    }

    const gifTimeOut = () => {
        setGifDisplay('none')
        setTimeout(() => {
            setGifDisplay('block')
        }, 1500);
    }
    return (
        <>
            <ClickBox
                onClick={() => {
                    changeGif()
                    gifTimeOut()
                }}
                style={{ display: gifDisplay }}
            />
            <FrontEndSec src={fEG} />
            <StyledUl>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript ES6</li>
                <li>React.JS</li>
                <li>TypeScript</li>
            </StyledUl>
            <StyledUlTwo>
                <li>MobX</li>
                <li>Axios</li>
                <li>React Router Dom</li>
                <li>Ant.Design</li>
                <li>BootStrap</li>
            </StyledUlTwo>
            <StyledUlThree>
                <li>Semantic UI</li>
            </StyledUlThree>
        </>
    )
}

export default FrontEndMobile

const FrontEndSec = styled.img`
    height: 44%;
    width: 60.4%;
    overflow: hidden;
    z-index: 3;
    transform: rotate(90deg);
    top: -5.8%;
    left: 15%;
    position: absolute;
`
const ClickBox = styled.div`
    width: 80%;
    height: 10%; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 12%;
    left: 10%;
    opacity: 0;
`
const StyledUl = styled.ul`
    font-size: 4.5vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 10%;
    left: 17%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`
const StyledUlTwo = styled.ul`
    font-size: 4.5vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 10%;
    left: 38%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`
const StyledUlThree = styled.ul`
    font-size: 4.5vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 10%;
    left: 60%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`