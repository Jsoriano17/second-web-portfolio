import React from 'react'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'
import ScrollToTop from "react-scroll-to-top";
import Contacts from './components/Contacts'

export const WebLayout = () => {
    return (
        <Container>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
            <Contacts />
            <ScrollToTop
                color="white"
                viewBox="-70 -10 400 300"
                smooth={true}
                top={500}
                style={{
                    zIndex: 5,
                    background: 'black',
                    opacity: 0.7
                }} />
        </Container>
    )
}

const Container = styled.div`
  background: white;
`