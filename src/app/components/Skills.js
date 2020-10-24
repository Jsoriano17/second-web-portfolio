import React from 'react';
import background from '../assets/my-skills-back.png';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import FrontEnd from './skill-sections/FrontEnd';


export const Skills = () => {
    return (
        <Container>
            <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                <FrontEnd /> 
                <StyledBackground src={background} width="100%" />
            </ScrollAnimation>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`

const StyledBackground = styled.img`
    position: absolute; 
    top: 1px;
    left: 0;
    z-index: 0;
`
