import React from 'react';
import paper from '../assets/paper-background-top-off.png';
import paperGif from '../assets/PaperBackgroundAnimation-Gif.gif';
import styled from 'styled-components';
import { Face } from './Face';
import MagLetters from './MagLetters';
import { keyframes } from 'styled-components'


export const Home = () => {
    return (
        <Container>
            <StyledGif src={paperGif}/>
            <StyledBackground src={paper}/>
            {/* <Face /> */}
            <StyledAnimation>
                <MagLetters />
            </StyledAnimation>
        </Container>
    )
}
const fadein = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`

const Container = styled.div`
    height:100vh;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    background: white;
    
`
const StyledAnimation = styled.div`
    opacity: 0;
    animation: ${fadein} 1.4s ease-in 1s forwards;
`

const StyledBackground = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    zIndex: 0; 
    width: 100%;
`

const StyledGif = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 1; 
    width: 100%;
`


