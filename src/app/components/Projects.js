import React from 'react'
import styled from 'styled-components'
import AdventureLog from './Projects/AdventureLog'
import HomeInventory from './Projects/HomeInventory'
import Reactivities from './Projects/Reactivities'

export const Projects = () => {
    return (
        <Container>
            <StyledH1>Projects</StyledH1>
            <Reactivities />
            <HomeInventory />
            <AdventureLog />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 5000px;
    position: relative; 
    overflow: auto;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 90px;
    color: black;
    float: right; 
    margin-right: 5vw;
`
