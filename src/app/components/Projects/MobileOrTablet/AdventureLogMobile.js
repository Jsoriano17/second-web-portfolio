import React from 'react'
import styled from 'styled-components'
import magazine from '../../../assets/magazines/adventure-log-magazine.png'
import adventureLogGif from '../../../assets/adventure-log-gif.gif';

const AdventureLogMobile = () => {
    return (
        <Container>
            <StyledImg src={magazine} />
            <StyledGif src={adventureLogGif} />
            <a href="https://github.com/Jsoriano17/AdventureLog" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </Container>
    )
}

export default AdventureLogMobile

const Container = styled.div`
    position: relative; 
    display: inline-block;
    float: left;
`

const StyledImg = styled.img`
    width: 100vw;
    position: relative;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 28.3%;
    height: 44%;
    left: 28%;
    top: 35.8%;
    z-index: 0;
`
const ClickBox = styled.div`
    position: absolute;
    width: 28.3%;
    height: 44%;
    left: 28%;
    top: 35.8%;
    opacity: 0;
    z-index: 3;
`