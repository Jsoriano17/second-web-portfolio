import React from 'react'
import { AboutMe } from './components/AboutMe'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Slide } from './components/Slide'
import { Contacts } from './components/Contacts'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'

export const WebLayout = () => {
    return (
        <Container>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
            <Contacts />
        </Container>
    )
}

const Container = styled.div`
  background: #fedc00;
`