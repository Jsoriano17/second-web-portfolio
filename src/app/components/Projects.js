import React from 'react'
import styled from 'styled-components'
import AdventureLog from './Projects/AdventureLog'
import FirstPortfolio from './Projects/FirstPortfolio'
import HomeInventory from './Projects/HomeInventory'
import Reactivities from './Projects/Reactivities'
import ScrollAnimation from 'react-animate-on-scroll';

export const Projects = () => {
    return (
        <Container>
            <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                <StyledH1>Projects</StyledH1>
            </ScrollAnimation>
            <ScrollAnimation offset={3000}  animateIn='animate__fadeIn' animateOnce={true} >
                <Reactivities />
            </ScrollAnimation>
            <ScrollAnimation offset={3000}  animateIn='animate__fadeIn' animateOnce={true}>
                <HomeInventory />
            </ScrollAnimation>
            <ScrollAnimation offset={3000}  animateIn='animate__fadeIn' animateOnce={true}>
                <AdventureLog />
            </ScrollAnimation>
            <ScrollAnimation offset={3000}  animateIn='animate__fadeIn' animateOnce={true}>
                <FirstPortfolio />
            </ScrollAnimation>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 5000px;
    position: relative; 
    overflow: hidden;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 90px;
    color: black;
    float: right; 
    margin-right: 5vw;
`
