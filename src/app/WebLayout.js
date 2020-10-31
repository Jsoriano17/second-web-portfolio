import React from 'react'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contacts } from './components/Contacts'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'
import ScrollToTop from "react-scroll-to-top";

export const WebLayout = () => {
    return (
        <Container>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
            <Contacts/>
            <ScrollToTop smooth={true} top={500} style={{zIndex: 5}} svgPath={} />
        </Container>
    )
}

const Container = styled.div`
  background: white;
`