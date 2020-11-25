import React from 'react'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'
import ScrollToTop from "react-scroll-to-top"
import Contacts from './components/Contacts'
import ContactMobile from './components/ContactMobile'
import { useMediaQuery } from 'react-responsive'

export const WebLayout = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    const chooseContactComponent = () => {
        if (isDesktopOrLaptop) {
            return <Contacts />
        } else {
            return <ContactMobile />
        }
    }

    return (
        <Container>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
            {chooseContactComponent()}
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