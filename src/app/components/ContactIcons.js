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
            <StyledAnchor href="https://www.linkedin.com/in/jeffrey-soriano/" target="_blank"><StyledIcon src={linkedin} alt="LinkedIn"/></StyledAnchor>
            <StyledAnchor href="https://github.com/Jsoriano17" target="_blank"><StyledIcon src={github} alt="github" /></StyledAnchor>
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
                    <StyledIcon src={gmail} alt="gmail" />
                </Link>
            </GmailHover>
            <StyledAnchor href="https://www.facebook.com/SoriaDesigns/" target="_blank"><StyledIcon src={facebook} alt="facebook"/></StyledAnchor>
            <StyledAnchor href="https://twitter.com/SoriaDesigns" target="_blank"><StyledIcon src={twitter} alt="twitter"/></StyledAnchor>
            <StyledAnchor href="https://www.instagram.com/soriadesigns/" target="_blank"><StyledIcon src={instagram} alt="instagram" /></StyledAnchor>
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
    margin: 0 0.390625vw;

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`
const StyledIcon = styled.img`
    width: 4.296875vw;
`
const GmailHover = styled.div`
    cursor: pointer; 
    margin: 0 0.390625vw;

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`