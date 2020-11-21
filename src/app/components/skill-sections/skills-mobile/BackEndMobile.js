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
            <StyledUl>
                <li>C#</li>
                <li>ASP.NET Core</li>
                <li>ASP.NET Identity</li>
                <li>ASP.NET MVC</li>
                <li>EF Core</li>
            </StyledUl>
            <StyledUlTwo>
                <li>Ruby</li>
                <li>Ruby On Rails</li>
                <li>Devise</li>
                <li>SQL</li>
                <li>Postgres</li>
            </StyledUlTwo>
            <StyledUlThree>
                <li>MySQL</li>
            </StyledUlThree>
        </>
    )
}

export default BackEndMobile

const BackEndSec = styled.img`
    height: 44%;
    width: 62%;
    overflow: hidden;
    z-index: 3;
    transform: rotate(90deg);
    top: 27.8%;
    left: 13%;
    position: absolute;
`
const ClickBox = styled.div`
    width: 80%;
    height: 10%; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 45%;
    left: 10%;
    opacity: 0;
`
const StyledUl = styled.ul`
    font-size: 4.5vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 44%;
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
    top: 44%;
    left: 40%;
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
    top: 44%;
    left: 62%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`