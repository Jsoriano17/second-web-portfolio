import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/adventure-log-magazine.png'
import adventureLogGif from '../../assets/adventure-log-gif.gif';

const AdventureLog = () => {
    return (
        <>
            <StyledImg src={magazine} />
            <StyledGif src={adventureLogGif} />
            <a href="https://github.com/Jsoriano17/AdventureLog" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </>
    )
}

export default AdventureLog

const StyledImg = styled.img`
    width: 50%;
    float: left; 
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 14.453125vw;
    height: 58.13953488372093vh;
    left: 14%;
    top: 60%;
    z-index: 0;
`
const ClickBox = styled.div`
    position: absolute;
    width: 14.453125vw;
    height: 58.13953488372093vh;
    left: 14%;
    top: 60%;
    opacity: 0;
    z-index: 3;
`