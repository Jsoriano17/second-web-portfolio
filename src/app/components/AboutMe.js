import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive'


export const AboutMe = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1280 })
        return isDesktop ? children : null
      }
      const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
      }
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
      const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
      }
    return (
        <>
            <Desktop>
                <Container >
                    <StyledMag />
                    <ContainerCol >
                        <StyledH1 id="projects">About_Me</StyledH1>
                        <p style={{fontSize: '17px', textIndent: '1.5625vw', marginTop: '10vh'}}>Hi! I'm Jeffrey Soriano. I'm a full-stack web developer.  I've put lots of time into learning the required skills to become a professional full-stack web developer. Countless hours have been put into strengthening my skills to develop clean, good looking back, and front end code for websites. Every day I'm learning new technologies to implement into my code. I believe that all the projects I've created or worked on have strengthened my abilities as a developer. I have lots of experience with graphic design and design principles. I look forward to learning new skills, working on bigger things, and sharing the many cool ideas I have in mind for future projects!</p>
                    </ContainerCol>
                </Container>
                <StyledLink as={Link} to='/'>{'<-'}go_back</StyledLink>
            </Desktop>
        </>
    )
}
const shake = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
`

const Container = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-around;
    margin: 4.3604651162790695vh 3.90625vw;
`
const ContainerCol = styled.div`
    display: flex; 
    flex-direction: column; 
`
const StyledMag = styled.div`
    background: black;
    width: 273.4375vw; 
    height: 87.20930232558139vh;
    margin-right: 7.8125vw;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 6.25vw;
    color: black;
    font-weight: 100; 
`
const StyledLink = styled.a`
    position: absolute;
    font-size: 1.953125vw;
    bottom: 7.267441860465116vh; 
    right: 3.90625vw;
    color: black;
    font-family: Impact_Label;
    cursor: pointer; 

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
        color: black;
    }
`