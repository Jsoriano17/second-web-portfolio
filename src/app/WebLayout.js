import React from 'react'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contacts } from './components/Contacts'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'
import { BackTop } from 'antd'

export const WebLayout = () => {
    return (
        <Container>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
            <Contacts/>
            <BackTop />
        </Container>
    )
}

const Container = styled.div`
  background: white;
`