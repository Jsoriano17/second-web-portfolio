import React from 'react';
import MagHair from '../assets/magazine-hair.png';
import MagHairBack from '../assets/the-gentleman.jpg';
import MagEyebrows from '../assets/magazine-eyebrows.png';
import MagEyebrowsBack from '../assets/magazine-eyebrows-back.jpg';
import MagEyes from '../assets/eyes-gif.gif';
import MagEyeDuct from '../assets/magazine-eye-ducts.png';
import MagFace from '../assets/magazine-face.png';
import MagFaceBack from '../assets/magazine-face-back.jpg';
import MagLips from '../assets/magazine-lips.png';
import MagLipsBack from '../assets/magazine-lips-back.jpg';
import MagEarrings from '../assets/magazine-earrings.png';
import MagEarringsBack from '../assets/magazine-earrings-back.jpg';
import styled from 'styled-components';

export const Face = () => {
    return (
        <StyledHead>
            <StyledHair />
            <StyledEyebrows />
            <StyledEyes src={MagEyes} />
            <StyledEyeDuct src={MagEyeDuct} />
            <StyledFace />
            <StyledLips />
            <StyledEarrings />
        </StyledHead>
    )
}

const headHeight = '80vh';
const headWidth = '39%';

const StyledHead = styled.div`
    display: block;
    position: relative;
    margin-left: 1%;
    margin-right: 5%;
    margin-top: 11vh;
    width: ${headWidth};
    height: ${headHeight};
    z-index: 1;
`

/**************************
 keep just in case
 *************************/
// const StyledHair = styled.div`
//     position: absolute; 
//     top:0;
//     left:0;
//     width: 100%;
//     height: 100%;
//     background: url(${MagHairBack}) fixed;
//     background-position: 0% 8vh;
//     background-size: contain;
//     -webkit-mask: url(${MagHair});
//     -webkit-mask-size: 100% 100%;
//     -webkit-mask-repeat: no-repeat;
// `
// const StyledFace = styled.div`
//     position: absolute; 
//     top:0;
//     left:0;
//     width: 100%;
//     height: 100%;
//     background: url(${MagFaceBack}) fixed;
//     background-position: -3% 8vh;
//     background-size: contain;
//     -webkit-mask: url(${MagFace});
//     -webkit-mask-size: 100% 100%;
//     -webkit-mask-repeat: no-repeat;
// `
/**************************/
const StyledHair = styled.div`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${MagHairBack}) fixed;
    background-position: 1% 12vh;
    background-size: 41% 90%;
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
    background-position: 1% 12.5vh;
    background-size: 41% 86%;
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
    background-position:-4.5% 0vh;
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
    background-position: -8% 8vh;
    background-size: contain;
    -webkit-mask: url(${MagEyebrows});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`
const StyledEyes = styled.img`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
`
const StyledEyeDuct = styled.img`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
`

const StyledEarrings = styled.div`
    position: absolute; 
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url(${MagEarringsBack}) fixed;
    background-position:0% 2vh;
    background-size: contain;
    -webkit-mask: url(${MagEarrings});
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
`


