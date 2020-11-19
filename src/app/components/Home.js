import React from 'react';
import paper from '../assets/paper-background-top-off.png';
import paperMobile from '../assets/paper-background-mobile.png';
import paperShadow from '../assets/paper-background-shading.png';
import paperGif from '../assets/PaperBackgroundAnimation-Gif.gif';
import eyes from '../assets/eyes-gif.gif';
import Letters from '../assets/magazine-letters.png';
import LettersMobile from '../assets/mobile-letters.png';
import paperGifShadow from '../assets/paper-rip-shading.png';
import MagWhiteFace from '../assets/magazine-face-white-back.png';
import mobileFace from '../assets/face-plug-mobile.png';
import styled from 'styled-components';
import { Face } from './Face';
import { keyframes } from 'styled-components'
import ContactIcons from './ContactIcons';
import { useMediaQuery } from 'react-responsive';

export const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1280px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 2000px)' })
    const isTablet = useMediaQuery({ query: '(min-device-width: 446px)' })
    const isTabletMax = useMediaQuery({ query: '(max-width: 1280px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 445px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <>
            { isDesktopOrLaptop && <>
                <Container>
                    <StyledGif src={paperGif} />
                    <StyledGifShadow src={paperGifShadow} />
                    <StyledBackground src={paper} />
                    <StyledBackgroundShadow src={paperShadow} />
                    <Face />
                    <FaceBack src={MagWhiteFace} />
                    <StyledAnimation>
                        <StyledImg src={Letters} />
                        <ContactIcons />
                    </StyledAnimation>
                </Container>
            </>}
            {isTablet && isPortrait && isTabletMax && <>
                <ContainerTablet>
                    <StyledBackgroundMobile src={paperMobile} />
                    <StyledBackgroundShadow src={paperShadow} />
                    <FaceContainer>
                        <EyesGifTablet src={eyes} />
                        <FaceTablet src={mobileFace} />
                    </FaceContainer>
                    <StyledAnimation>
                        <TabletLetters src={Letters} />
                    </StyledAnimation>
                </ContainerTablet>
            </>}
            {isMobile && isPortrait && <>
                <ContainerMobile>
                    <StyledBackgroundMobile src={paperMobile} />
                    <StyledBackgroundShadow src={paperShadow} />
                    <FaceContainer>
                        <EyesGifMobile src={eyes} />
                        <FaceMobile src={mobileFace} />
                    </FaceContainer>
                    <StyledAnimation>
                        <MobileLetters src={LettersMobile} />
                    </StyledAnimation>
                </ContainerMobile>
            </>}
            {isBigScreen && <> </>}
        </>
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
    margin-bottom: 20vh;
`
const ContainerTablet = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 20vh;
`
const ContainerMobile = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 20vh;
`
const StyledAnimation = styled.div`
    opacity: 0;
    animation: ${fadein} 1.4s ease-in 1s forwards;
    z-index: 1;
`

const StyledBackground = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 1; 
    width: 100%;
    height: 117vh;
`
const StyledBackgroundMobile = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 1; 
    width: 100%;
    height: 117vh;
`
const StyledBackgroundShadow = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 0; 
    width: 100%;
    height: 117vh;
    opacity: .5;
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
const FaceBack = styled.img`
    position: absolute;
    margin-left: 1%;
    margin-right: 12vh;
    margin-top: 5.5vh;
    width: 39%;
    height: 80.5vh;
    z-index: 1;
`
const StyledImg = styled.img`
    width: 58.59375vw;
    position: absolute;
    right: 2vw;
    top: 35vh;
`
const TabletLetters = styled.img`
    margin-top: 5%;
    width: 90%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const MobileLetters = styled.img`
    margin-top: 5%;
    width: 90%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const FaceContainer = styled.div`
    position: relative;
`
const FaceTablet = styled.img`
    width: 80%;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    z-index: 2; 
`
const FaceMobile = styled.img`
    width: 100%;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    z-index: 2; 
`
const EyesGifTablet = styled.img`
    position: absolute;
    width: 59.9%;
    right: 8.6%;
    overflow: hidden;
    top: 0.4%;
    z-index: 3;
`
const EyesGifMobile = styled.img`
    position: absolute;
    width: 71%;
    right: 0.3%;
    overflow: hidden;
    top: 2.7%;
    z-index: 3;
`