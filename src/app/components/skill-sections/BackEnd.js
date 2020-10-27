import React, { useEffect, useState } from 'react'
import backEnd from '../../assets/back-end-gif.gif';
import backEndReversed from '../../assets/back-end-gif-reversed.gif'
import backEndStill from '../../assets/back-end-still.png'
import styled from 'styled-components';

const BackEnd = () => {

    const [opener, setOpener] = useState(true);
    const [bEG, setBEG] = useState(backEndReversed);
    const [bDisplay, setBDisplay] = useState('block');
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    const changeGif = () => {
        setBDisplay('none')
        if (opener) {
            setBEG(backEnd)
            setOpener(!opener)
        } else {
            setBEG(backEndReversed)
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
            <BackEndStill src={backEndStill} style={{ display: bDisplay }} />
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
    height: 706px;
    width: 449.5px;
    position: absolute;
    left: 415.4px;
    z-index: 3;
`
const ClickBox = styled.div`
    width: 200px;
    height: 500px; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 100px;
    left: 550px;
    opacity: 0;
`
const BackEndStill = styled.img`
    height: 706px;
    width: 449.5px;
    z-index: 4;
    top: 0;
    left: 415.4px;
    position: absolute; 
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 35px;
    color: black;
    text-align: center;
    position: absolute; 
    top: 120px;
    left: 585px;
    z-index: 2;
`
const StyledUl = styled.ul`
    font-size: 22px;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 175px;
    left: 560px;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`