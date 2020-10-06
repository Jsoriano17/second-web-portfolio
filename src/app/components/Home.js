import React from 'react';
import paper from '../assets/paper-background.jpg';
import styled from 'styled-components';
import { Face } from './Face';

export const Home = () => {
    return (
        <Container>
            <StyledBackground src={paper} />
            <Face />
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const StyledBackground = styled.img`
    position: absolute; 
    top: 0;
    left: 0; 
    zIndex: 0; 
    width: 100%;
    height: 100vh;
`
