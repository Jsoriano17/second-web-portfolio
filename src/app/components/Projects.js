import React from 'react'
import styled from 'styled-components'
import AdventureLog from './Projects/AdventureLog'

export const Projects = () => {
    return (
        <Container>
            <StyledH1>Projects</StyledH1>
            <AdventureLog />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 500px;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 90px;
    color: black;
    float: right; 
    margin-right: 5vw;
`
