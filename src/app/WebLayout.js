import React from 'react'
import { AboutMe } from './components/AboutMe'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Slide } from './components/Slide'
import { Contacts } from './components/Contacts'
import styled from 'styled-components'

export const WebLayout = () => {
    return (
        <Container>
            <Home />
            <Projects />
            <Skills />
            <AboutMe />
            <Contacts />
        </Container>
    )
}

const Container = styled.div`
  
`