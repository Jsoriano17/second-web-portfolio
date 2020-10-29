import React from 'react'
import styled, { keyframes } from 'styled-components'
import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/github.png'
import gmail from '../assets/icons/gmail.png'
import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'
import instagram from '../assets/icons/instagram.png'
import { Link } from "react-scroll"


const ContactIcons = () => {
    return (
        <Container>
            <StyledAnchor href="https://www.linkedin.com/in/jeffrey-soriano/" target="_blank"><img src={linkedin} width="55px" alt="LinkedIn"/></StyledAnchor>
            <StyledAnchor href="https://github.com/Jsoriano17" target="_blank"><img src={github} width="55px" alt="github" /></StyledAnchor>
            <GmailHover>
                <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    style={{ color: 'black' }}
                >
                    <img src={gmail} width="55px" alt="gmail" />
                </Link>
            </GmailHover>
            <StyledAnchor href="https://www.facebook.com/SoriaDesigns/" target="_blank"><img src={facebook} width="55px" alt="facebook"/></StyledAnchor>
            <StyledAnchor href="https://twitter.com/SoriaDesigns" target="_blank"><img src={twitter} width="55px" alt="twitter"/></StyledAnchor>
            <StyledAnchor href="https://www.instagram.com/soriadesigns/" target="_blank"><img src={instagram} width="55px" alt="instagram" /></StyledAnchor>
        </Container>
    )
}

export default ContactIcons

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
    align-items: center; 
    position: absolute; 
    top: 85vh;
    right: 2vw;
`
const StyledAnchor = styled.a`
    cursor: pointer; 
    margin: 0 5px;

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`
const GmailHover = styled.a`
    cursor: pointer; 
    margin: 0 5px;

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`