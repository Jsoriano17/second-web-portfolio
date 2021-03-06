import React, { useEffect, useState } from 'react'
import frontEnd from '../../assets/front-end-gif.gif';
import frontEndReversed from '../../assets/front-end-gif-reversed.gif'
import frontEndStill from '../../assets/front-end-still.png'
import styled from 'styled-components';

const FrontEnd = () => {

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
            <StyledH1>Front_End</StyledH1>
            <StyledUl>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript ES6</li>
                <li>React.JS</li>
                <li>TypeScript</li>
                <li>MobX</li>
                <li>Axios</li>
                <li>React Router Dom</li>
                <li>Ant.Design</li>
                <li>BootStrap</li>
                <li>Semantic UI React</li>
            </StyledUl>
        </>
    )
}

export default FrontEnd

const FrontEndSec = styled.img`
    height: 84.4%;
    width: 30.6%;
    top: 9.2%;
    z-index: 3;
    position: absolute;
`
const ClickBox = styled.div`
    width: 16%;
    height: 72%; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 14%;
    left: 8.5%;
    opacity: 0;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 2.734375vw;
    color: black;
    text-align: center;
    position: absolute; 
    top: 18.5%;
    left: 10%;
    z-index: 2;
    font-weight: 100;
`
const StyledUl = styled.ul`
    font-size: 1.71875vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 27%;
    left: 11.5%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`