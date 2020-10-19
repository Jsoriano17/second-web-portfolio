import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightOutlined } from '@ant-design/icons';
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
                <StyledAbout as={Link} to='/about'>About</StyledAbout>
                <ArrowRightOutlined style={{fontSize: '20px', color: 'grey'}} />
            </ContainerRight>
        </>
    )
}

const Container = styled.div`
    position: absolute;
    top: 35px; 
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
    top: 43px; 
    right: 60px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
    align-items: center;
`
