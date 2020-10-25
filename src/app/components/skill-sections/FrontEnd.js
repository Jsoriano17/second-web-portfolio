import React, { useEffect, useState } from 'react'
import frontEnd from '../../assets/front-end-gif.gif';
import frontEndReversed from '../../assets/front-end-gif-reversed.gif'
import frontEndStill from '../../assets/front-end-still.png'
import styled from 'styled-components';

const FrontEnd = () => {

    const [opener, setOpener] = useState(true);
    const [fEG, setFEG] = useState(frontEndReversed);
    const [fDisplay, setFDisplay] = useState('block');
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    const changeGif = () => {
        setFDisplay('none')
        if (opener) {
            setFEG(frontEnd)
            setOpener(!opener)
        } else {
            setFEG(frontEndReversed)
            setOpener(!opener)
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
            <FrontEndStill src={frontEndStill} style={{ display: fDisplay }} />
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
    height: 706px;
    width: 449.5px;
    z-index: 2;
    position: absolute;
`
const ClickBox = styled.div`
    width: 200px;
    height: 500px; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 4;
    top: 100px;
    left: 110px;
    opacity: 0;
`
const FrontEndStill = styled.img`
    height: 706px;
    width: 449.5px;
    z-index: 3;
    position: absolute; 
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 35px;
    color: black;
    text-align: center;
    position: absolute; 
    top: 120px;
    left: 130px;
    z-index: 1;
`
const StyledUl = styled.ul`
    font-size: 20px;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 180px;
    left: 90px;
    z-index: 1;
    
`