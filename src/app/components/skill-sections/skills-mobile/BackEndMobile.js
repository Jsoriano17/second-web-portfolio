import React, { useEffect, useState } from 'react'
import backEnd from '../../../assets/back-end-gif.gif';
import backEndReversed from '../../../assets/back-end-gif-reversed.gif'
import backEndStill from '../../../assets/back-end-still.png'
import styled from 'styled-components';

const BackEndMobile = () => {
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

export default BackEndMobile

const BackEndSec = styled.img`
    height: 27.4%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 37.2%;
    z-index: 3;
`
const ClickBox = styled.div`
    width: 40%;
    height: 25%;  
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 38%;
    left: 30%;
    opacity: 0;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 9.5vw;
    color: black;
    text-align: center;
    position: absolute; 
    top: 40%;
    left: 34%;
    z-index: 2;
    font-weight: 100;
`
const StyledUl = styled.ul`
    font-size: 6.5vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 42.6%;
    left: 37%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`