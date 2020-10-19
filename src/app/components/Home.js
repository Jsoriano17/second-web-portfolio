import React from 'react';
import paper from '../assets/paper-background-top-off.png';
import paperGif from '../assets/PaperBackgroundAnimation-Gif.gif';
import paperGifShadow from '../assets/paper-rip-shading.png';
import MagWhiteFace from '../assets/magazine-face-white-back.png';
import styled from 'styled-components';
import { Face } from './Face';
import MagLetters from './MagLetters';
import { keyframes } from 'styled-components'


export const Home = () => {
    return (
        <Container>
            <StyledGif src={paperGif} />
            <StyledGifShadow src={paperGifShadow} />
            <StyledBackground src={paper} />
            <Face />
            <FaceBack src={MagWhiteFace}/>
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
    margin-bottom: 13vh;
`
const StyledAnimation = styled.div`
    opacity: 0;
    animation: ${fadein} 1.4s ease-in 1s forwards;
`

const StyledBackground = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 0; 
    width: 100%;
    height: 117vh;
`

const StyledGif = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 1; 
    width: 100%;
    height: 21.3vh;
`
const StyledGifShadow = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 0; 
    width: 100%;
    height: 21.3vh;
    opacity: .2;
`
const FaceBack = styled.img `
    position: absolute;
    margin-left: 1%;
    margin-right: 12vh;
    margin-top: 5.5vh;
    width: 39%;
    height: 80.5vh;
    z-index: 1;
`

