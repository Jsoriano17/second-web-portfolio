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
                <StyledH1 id="projects">Projects</StyledH1>
            </ScrollAnimation>
            <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true} >
                    <Reactivities />
            </ScrollAnimation>
            <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true}>
                <HomeInventory />
            </ScrollAnimation>
            <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true}>
                    <AdventureLog />
            </ScrollAnimation>
            <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true}>
                    <FirstPortfolio />
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                <StyledH12 id="skills">My_Skills</StyledH12>
            </ScrollAnimation>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 292.1511627906977vh;
    position: relative; 
    overflow: hidden;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 7.03125vw;
    color: black;
    float: right; 
    margin-right: 5vw;
    font-weight: 100;
`
const StyledH12 = styled.h1`
    font-family: Impact_Label;
    font-size: 7.03125vw;
    color: black;
    margin-left: 5vw;
    font-weight: 100;
`
