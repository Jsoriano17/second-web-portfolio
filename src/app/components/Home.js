import React from 'react';
import MagHair from '../assets/magazine-hair.png';
import MagHairBack from '../assets/the-gentleman.jpg';
import MagEyebrows from '../assets/magazine-eyebrows.png';
import MagEyebrowsBack from '../assets/magazine-eyebrows-back.jpg';
import MagFace from '../assets/magazine-face.png';
import MagFaceBack from '../assets/magazine-face-back.jpg';
import MagLips from '../assets/magazine-lips.png';
import MagLipsBack from '../assets/magazine-lips-back.jpg';
import MagEarrings from '../assets/magazine-earrings.png';
import MagEarringsBack from '../assets/magazine-earrings-back.jpg';
import styled from 'styled-components';

export const Home = () => {
    return (
        <Container>
            {/* <StyledImg src={paper}/> */}
            <StyledHair />
            <StyledEyebrows />
            <StyledFace />
            <StyledLips />
            <StyledEarrings />
        </Container>
    )
}

const headHeight = '111.11111111111111vh';
const headWidth = '54.6875vw';


const Container = styled.div`
    height: 111vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`
const StyledHair = styled.div`
    position: absolute; 
    width: ${headWidth};
    height: ${headHeight};
    background: url(${MagHairBack}) fixed;
    background-size: ${headWidth} ${headHeight};
    background-repeat: no-repeat;
    -webkit-mask: url(${MagHair});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`
const StyledFace = styled.div`
    position: absolute;
    width: ${headWidth};
    height: ${headHeight};
    background: url(${MagFaceBack}) fixed;
    background-size: ${headWidth} ${headHeight};
    background-repeat: no-repeat;
    -webkit-mask: url(${MagFace});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat
`
const StyledLips = styled.div`
    position: absolute;
    width: ${headWidth};
    height: ${headHeight};
    background: url(${MagLipsBack}) fixed;
    background-size: ${headWidth} ${headHeight};
    background-repeat: no-repeat;
    -webkit-mask: url(${MagLips});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat
`
const StyledEyebrows = styled.div`
    position: absolute;
    width: ${headWidth};
    height: ${headHeight};
    background: url(${MagEyebrowsBack}) fixed;
    background-size: ${headWidth} ${headHeight};
    background-repeat: no-repeat;
    -webkit-mask: url(${MagEyebrows});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat
`
const StyledEarrings = styled.div`
    position: absolute;
    width: ${headWidth};
    height: ${headHeight};
    background: url(${MagEarringsBack}) fixed;
    background-size: ${headWidth} ${headHeight};
    background-repeat: no-repeat;
    -webkit-mask: url(${MagEarrings});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat
`
