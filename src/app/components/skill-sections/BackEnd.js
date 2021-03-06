import React, { useEffect, useState } from 'react'
import backEnd from '../../assets/back-end-gif.gif';
import backEndReversed from '../../assets/back-end-gif-reversed.gif'
import backEndStill from '../../assets/back-end-still.png'
import styled from 'styled-components';

const BackEnd = () => {
    const [bEG, setBEG] = useState(backEndStill);
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    const changeGif = () => {
        if (bEG === backEndStill) {
            setBEG(backEnd)
        } else if (bEG === backEnd) {
            setBEG(backEndReversed)
        } else {
            setBEG(backEnd)
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
            <BackEndSec src={bEG} />
            <StyledH1>Back_End</StyledH1>
            <StyledUl>
                <li>C#</li>
                <li>ASP.NET Core</li>
                <li>ASP.NET Identity</li>
                <li>ASP.NET MVC</li>
                <li>EF Core</li>
                <li>Ruby</li>
                <li>Ruby On Rails</li>
                <li>Devise</li>
                <li>SQL</li>
                <li>Postgres</li>
                <li>MySQL</li>
            </StyledUl>
        </>
    )
}

export default BackEnd

const BackEndSec = styled.img`
    height: 83.6%;
    width: 31.75%;
    top: 10.7%;
    position: absolute;
    left: 34.1%;
    z-index: 3;
`
const ClickBox = styled.div`
    width: 15.5%;
    height: 72.5%; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 14%;
    left: 42%;
    opacity: 0;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 2.734375vw;
    color: black;
    text-align: center;
    position: absolute; 
    top: 19%;
    left: 45.5%;
    z-index: 2;
    font-weight: 100;
`
const StyledUl = styled.ul`
    font-size: 1.71875vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 27%;
    left: 46.7%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`