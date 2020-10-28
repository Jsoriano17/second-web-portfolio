import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const AboutMe = () => {
    return (
        <>
            <Container >
                <StyledMag />
                <ContainerCol >
                    <StyledH1 id="projects">About_Me</StyledH1>
                    <p>Do dolore adipisicing esse culpa eiusmod consectetur qui. Esse eiusmod commodo labore veniam elit voluptate excepteur esse magna qui consequat occaecat velit. Esse incididunt incididunt ad laboris. Sit in aute amet id reprehenderit culpa. Tempor deserunt do reprehenderit commodo labore excepteur fugiat tempor dolore commodo laboris.</p>
                </ContainerCol>
            </Container>
            <StyledLink as={Link} to='/'>{'<-'} go_back</StyledLink>
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
    display: flex; 
    flex-direction: row; 
    justify-content: space-around;
    margin: 30px 50px;
`
const ContainerCol = styled.div`
    display: flex; 
    flex-direction: column; 
`
const StyledMag = styled.div`
    background: black;
    width: 1700px; 
    height: 600px;
    margin-right: 100px;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 80px;
    color: black;
`
const StyledLink = styled.a`
    position: absolute;
    font-size: 25px;
    bottom: 50px; 
    right: 50px;
    color: black;
    font-family: Impact_Label;
    cursor: pointer; 

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
        color: black;
    }
`