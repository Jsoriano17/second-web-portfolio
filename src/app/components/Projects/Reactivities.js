import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/reactivities.png'
import reactivitiesGif from '../../assets/reactivities-gif.gif'

const Reactivities = () => {
    return (
        <>
            <StyledImg src={magazine} />
            <StyledGif src={reactivitiesGif} />
            <a href="https://github.com/Jsoriano17/Reactivities" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </>
    )
}

export default Reactivities

const StyledImg = styled.img`
    width: 50%;
    float: left; 
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 21.09375vw;
    height: 24.563953488372093vh;
    top: 4.5%;
    left: 20.6%;
    z-index: 0;
`
const ClickBox = styled.div`
    position: absolute;
    width: 21.09375vw;
    height: 24.563953488372093vh;
    top: 4.5%;
    left: 20.6%;
    opacity: 0;
    z-index: 3;
`
