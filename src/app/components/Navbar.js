import React, { useState } from 'react';
import styled from 'styled-components';


export const Navbar = () => {
    return (
        <Container>
            <StyledNav>
                <StyledUl>
                    <StyledLi style={{color: 'black'}}>Home</StyledLi>
                    <StyledLi>Projects</StyledLi>
                    <StyledLi>Skills</StyledLi>
                    <StyledLi>About</StyledLi>
                    <StyledLi>Contacts</StyledLi>
                    <StyledLi>Resume</StyledLi>
                </StyledUl>
            </StyledNav>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0px; 
    left: 0px;
`
const StyledNav = styled.nav`
   font-size: 25px;
`
const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
`
const StyledLi = styled.li`
    margin: 0 10px;
    color: grey;
    cursor: pointer;

    &:hover {
        color: black;
    }
`
