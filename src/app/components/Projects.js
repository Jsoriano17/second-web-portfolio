import React from 'react'
import styled from 'styled-components'
import AdventureLog from './Projects/AdventureLog'
import FirstPortfolio from './Projects/FirstPortfolio'
import HomeInventory from './Projects/HomeInventory'
import Reactivities from './Projects/Reactivities'
import ScrollAnimation from 'react-animate-on-scroll'
import { useMediaQuery } from 'react-responsive'
import ReactivitiesMobile from './Projects/MobileOrTablet/ReactivitiesMobile'
import HomeInventoryMobile from './Projects/MobileOrTablet/HomeInventoryMobile'
import AdventureLogMobile from './Projects/MobileOrTablet/AdventureLogMobile'
import FirstPortfolioMobile from './Projects/MobileOrTablet/FirstPortfolioMobile'


export const Projects = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 5000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <>
            {isDesktopOrLaptop && <>
                <Container>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                        <StyledH1 id="projects">Projects</StyledH1>
                        <Reactivities />
                        <HomeInventory />
                        <AdventureLog />
                        <FirstPortfolio />
                        <StyledH12>My_Skills</StyledH12>
                    </ScrollAnimation>
                </Container>
            </>}

            {isTabletOrMobile && isPortrait && <>
                <Container>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                        <StyledH1Mobile id="projects">Projects</StyledH1Mobile>
                    </ScrollAnimation>
                    <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true}>
                        <ReactivitiesMobile />
                    </ScrollAnimation>
                    <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true}>
                        <HomeInventoryMobile />
                    </ScrollAnimation>
                    <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true}>
                        <AdventureLogMobile />
                    </ScrollAnimation>
                    <ScrollAnimation offset={3000} animateIn='animate__fadeIn' animateOnce={true}>
                        <FirstPortfolioMobile />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                        <StyledH12Mobile>My_Skills</StyledH12Mobile>
                    </ScrollAnimation>
                </Container>
            </>}

            {isBigScreen && <> </>}
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 200%;
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
const StyledH1Mobile = styled.h1`
    font-family: Impact_Label;
    font-size: 17vw;
    margin-bottom: 10%;
    color: black;
    text-align: center;
    font-weight: 100;
`
const StyledH12 = styled.h1`
    font-family: Impact_Label;
    font-size: 7.03125vw;
    color: black;
    margin-left: 5vw;
    font-weight: 100;
`
const StyledH12Mobile = styled.h1`
    font-family: Impact_Label;
    font-size: 17vw;
    margin-bottom: 10%;
    color: black;
    text-align: center;
    font-weight: 100;
`
