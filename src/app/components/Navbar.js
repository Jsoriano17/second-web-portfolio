import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightOutlined } from '@ant-design/icons';


export const Navbar = () => {
    return (
        <>
            <Container>
                <StyledNav>
                    <StyledUl>
                        <StyledLi style={{ color: 'black' }}>Projects</StyledLi>
                        <StyledLi>Skills</StyledLi>
                        <StyledLi>Contacts</StyledLi>
                        <StyledLi>Resume</StyledLi>
                    </StyledUl>
                </StyledNav>
            </Container>
            <ContainerRight>
                <StyledAbout>About</StyledAbout>
                <ArrowRightOutlined style={{fontSize: '20px', color: 'grey'}} />
            </ContainerRight>
        </>
    )
}

const Container = styled.div`
    position: absolute;
    top: 10px; 
    left: 0px;
    z-index: 1;
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
const StyledAbout = styled.a`
    font-size: 25px;
    margin: 0 10px;
    color: grey;
    cursor: pointer;

    &:hover {
        color: black;
    }
`
const ContainerRight = styled.div`
    position: absolute;
    top: 10px; 
    right: 30px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
    align-items: center;
`
