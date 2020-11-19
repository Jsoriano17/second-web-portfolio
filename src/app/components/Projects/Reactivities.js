import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/reactivities.png'
import reactivitiesGif from '../../assets/reactivities-gif.gif'

const Reactivities = () => {
    return (
        <Container>
            <StyledImg src={magazine} />
            <StyledGif src={reactivitiesGif} />
            <a href="https://github.com/Jsoriano17/Reactivities" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </Container>
    )
}

export default Reactivities

const Container = styled.div`
    position: relative; 
    display: inline-block;
    float: left; 
    width: 50%;
`

const StyledImg = styled.img`
    width: 100%;
    position: relative; 
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 42%;
    height: 19%;
    top: 10.1%;
    left: 41.4%;
    z-index: 0;
`
const ClickBox = styled.div`
    position: absolute;
    width: 42%;
    height: 19%;
    top: 10.1%;
    left: 41.4%;
    opacity: 0;
    z-index: 3;
`
