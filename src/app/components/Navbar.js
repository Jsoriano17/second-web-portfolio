import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [index, setIndex] = useState(1);

    setTimeout(function(){ setIndex(2) }, 3200)
    return (
        <>
            <Container style={{zIndex: index}}>
                <StyledNav>
                    <StyledUl>
                        <StyledLi style={{ color: 'black' }}>Projects</StyledLi>
                        <StyledLi>Skills</StyledLi>
                        <StyledLi>Contacts</StyledLi>
                        <StyledLi>Resume</StyledLi>
                    </StyledUl>
                </StyledNav>
            </Container>
            <ContainerRight style={{zIndex: index}}>
                <StyledAbout as={Link} to='/about'>About-{">"}</StyledAbout>
            </ContainerRight>
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
    top: 40px; 
    left: -7px;
`
const StyledNav = styled.nav`
   font-size: 19.5px;
`
const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
`
const StyledLi = styled.li`
    margin: 0 5px;
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
    top: 45px; 
    right: 58px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
    align-items: center;
`
const StyledAbout = styled.a`
    font-size: 24px;
    color: black;
    cursor: pointer;
    font-family: Impact_Label;

    &:hover {
        color: black;
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`

