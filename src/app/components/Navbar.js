import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from "react-scroll";
import ResumePDF from '../assets/Resume.pdf';
import { useMediaQuery } from 'react-responsive';
import paperNav from '../assets/hand-with-paper.png';
import ContactIconsMobile from './ContactIconsMobile';

export const Navbar = () => {
    const [index, setIndex] = useState(1);
    const [active, setActive] = useState("none");
    setTimeout(function () { setIndex(2) }, 3400)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 5000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    return (
        <>
            { isDesktopOrLaptop && <>
                <Container style={{ zIndex: index }}>
                    <StyledNav>
                        <StyledUl>
                            <StyledLi style={{ color: 'black' }}>
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration={500}
                                    style={{ color: 'black' }}
                                >
                                    Projects
                            </Link>
                            </StyledLi>
                            <StyledLi>
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration={500}
                                    style={{ color: 'black' }}
                                >
                                    Skills
                            </Link>
                            </StyledLi>
                            <StyledLi>
                                <Link
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration={500}
                                    style={{ color: 'black' }}
                                >
                                    Contacts
                            </Link>
                            </StyledLi>
                            <StyledLi>
                                <a
                                    style={{ color: 'black' }}
                                    href={ResumePDF}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </StyledLi>
                        </StyledUl>
                    </StyledNav>
                </Container>
                <ContainerRight style={{ zIndex: index }}>
                    <StyledAbout as={RouterLink} to='/about'>About-{">"}</StyledAbout>
                </ContainerRight>
            </>}
            { isTabletOrMobile && isPortrait && <>
                <button style={{ position: 'absolute', top: 0, left: 0, zIndex: 3 }} onClick={() => setActive("moveDown 0.9s ease forwards")}>click me</button>
                <div style={{
                    width: "100%",
                    height: "60vh",
                    top: "-80%",
                    overflow: "hidden",
                    position: "absolute",
                    zIndex: "5",
                    animation: active
                }}>
                    <StyledUlMobile>
                        <StyledLiMobile><Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                            style={{ color: 'black' }}
                        >
                            Projects
                            </Link></StyledLiMobile>
                        <StyledLiMobile><Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                            style={{ color: 'black' }}
                        >
                            Skills
                            </Link></StyledLiMobile>
                        <StyledLiMobile> <Link
                            activeClass="active"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                            style={{ color: 'black' }}
                        >
                            Contacts
                            </Link></StyledLiMobile>
                        <StyledLiMobile><a
                            style={{ color: 'black' }}
                            href={ResumePDF}
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            Resume
                                </a></StyledLiMobile>
                    </StyledUlMobile>
                    <ContactIconsMobile />
                    <button style={{ position: 'absolute', top: 0, left: 0, zIndex: 6 }} onClick={() => setActive("moveUp 0.5s ease forwards")}>click me</button>
                    <BackgroundImg src={paperNav} />
                </div>
            </>}
            {isBigScreen && <> </>}
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
    position: absolute;
    top: 5.9vh; 
    left: 2.6vw;
`
const StyledNav = styled.nav`
   font-size: 1.5234375vw;
`
const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
`
const StyledUlMobile = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-top: 15vh;
    margin-left: 5%;
    position: relative;
    font-size: 8vw; 
    z-index: 2;
`
const StyledLi = styled.li`
    margin: 0 0.390625vw;
    color: black;
    cursor: pointer;
    font-family: Impact_Label;
    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`
const StyledLiMobile = styled.li`
    margin: 3.5% 0.390625vw;
    color: black;
    cursor: pointer;
    font-family: Impact_Label;

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`
const ContainerRight = styled.div`
    position: absolute;
    top: 6.7vh; 
    right:  4.53125vw;
    z-index: 1;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
    align-items: center;
`
const StyledAbout = styled.a`
    font-size: 1.875vw;
    color: black;
    cursor: pointer;
    font-family: Impact_Label;

    &:hover {
        color: black;
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`
const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
`


