import React from 'react';
import background from '../assets/my-skills-back.png';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import FrontEnd from './skill-sections/FrontEnd';
import BackEnd from './skill-sections/BackEnd';
import Design from './skill-sections/Design';
import shadow from '../assets/paper-background-shading.png';

export const Skills = () => {
    return (
        <Container>
            <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                <FrontEnd /> 
                <BackEnd />
                <Design />
                <StyledBackground src={background} />
                <BackgroundShading src={shadow} width='100%' />
            </ScrollAnimation>
        </Container>
    )
}

const Container = styled.div`
    position: relative; 
    display: inline-block;
`

const StyledBackground = styled.img`
    width: 100vw;
    position: relative; 
    z-index: 1;
`
const BackgroundShading = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 0; 
    width: 100%;
    height: 107%;
    opacity: .5;
`
