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
            <Face>
                {/* <StyledImg src={paper}/> */}
                <StyledHair />
                <StyledEyebrows />
                <StyledFace />
                <StyledLips />
                <StyledEarrings />
            </Face>
        </Container>
    )
}

const headHeight = '91vh';
const headWidth = '44%';


const Container = styled.div`
    height:100vh;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const Face = styled.div`
    display: block;
    position: relative;
    margin-left: 3%;
    margin-right: 5%;
    margin-top: 9vh;
    background: black;
    width: ${headWidth};
    height: ${headHeight};
`
const StyledHair = styled.div`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${MagHairBack}) fixed;
    background-position:1% 6vh;
    background-size: contain;
    -webkit-mask: url(${MagHair});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`
const StyledFace = styled.div`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${MagFaceBack}) fixed;
    background-position: 1% 5vh;
    background-size: contain;
    -webkit-mask: url(${MagFace});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`
const StyledLips = styled.div`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${MagLipsBack}) fixed;
    background-position:1% 2vh;
    background-size: contain;
    -webkit-mask: url(${MagLips});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`
const StyledEyebrows = styled.div`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${MagEyebrowsBack}) fixed;
    background-position: 0% 5.5vh;
    background-size: contain;
    -webkit-mask: url(${MagEyebrows});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`
const StyledEarrings = styled.div`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${MagEarringsBack}) fixed;
    background-position:1% 4vh;
    background-size: contain;
    -webkit-mask: url(${MagEarrings});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`
