import React from 'react';
import background from '../assets/my-skills-back.png';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import FrontEnd from './skill-sections/FrontEnd';
import BackEnd from './skill-sections/BackEnd';
import Design from './skill-sections/Design';
import FrontEndBackground from '../assets/front-end-background.jpg'
import BackEndBackground from '../assets/back-end-background.jpg'
import DesignBackground from '../assets/design-background.jpg'
import shadow from '../assets/paper-background-shading.png';
import { useMediaQuery } from 'react-responsive';
import FrontEndMobile from './skill-sections/skills-mobile/FrontEndMobile';
import BackEndMobile from './skill-sections/skills-mobile/BackEndMobile';
import DesignMobile from './skill-sections/skills-mobile/DesignMobile';


export const Skills = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1280px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 2000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <>
            { isDesktopOrLaptop && <>
                <Container>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                        <FrontEnd />
                        <BackEnd />
                        <Design />
                        <StyledBackground src={background} />
                        <BackgroundShading src={shadow} width='100%' />
                    </ScrollAnimation>
                </Container>
            </>}

            {isTabletOrMobile && isPortrait && <>
                <Container>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                        <FrontEndMobile />
                        <BackEndMobile />
                        <DesignMobile />
                        <StyledFrontEndBack src={FrontEndBackground}/>
                        <StyledBackEndBack src={BackEndBackground} />
                        <StyledDesignBack src={DesignBackground}/>
                    </ScrollAnimation>
                </Container>
            </>}

            {isBigScreen && <> </>}
        </>
    )
}

const Container = styled.div`
    position: relative; 
    display: inline-block;
`

const StyledBackground = styled.img`
    width: 100%;
    position: relative; 
    z-index: 1;
`
const StyledFrontEndBack = styled.img`
    width: 100vw;
    position: relative; 
    z-index: 1;
`
const StyledBackEndBack = styled.img`
    width: 100vw;
    position: relative; 
    z-index: 1;
`
const StyledDesignBack = styled.img`
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
