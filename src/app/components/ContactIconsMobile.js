import React from 'react'
import styled, { keyframes } from 'styled-components'
import linkedin from '../assets/icons/linkedin-black.png'
import github from '../assets/icons/github-black.png'
import gmail from '../assets/icons/gmail-black.png'
import facebook from '../assets/icons/facebook-black.png'
import twitter from '../assets/icons/twitter-black.png'
import instagram from '../assets/icons/instagram-black.png'
import { Link } from "react-scroll"


const ContactIconsMobile = () => {
    return (
        <Container>
            <ColOne>
                <StyledAnchor href="https://www.linkedin.com/in/jeffrey-soriano/" target="_blank"><StyledIcon src={linkedin} alt="LinkedIn" /></StyledAnchor>
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
            </ColOne>
            <ColTwo>
                <StyledAnchor href="https://www.facebook.com/SoriaDesigns/" target="_blank"><StyledIcon src={facebook} alt="facebook" /></StyledAnchor>
                <StyledAnchor href="https://twitter.com/SoriaDesigns" target="_blank"><StyledIcon src={twitter} alt="twitter" /></StyledAnchor>
                <StyledAnchor href="https://www.instagram.com/soriadesigns/" target="_blank"><StyledIcon src={instagram} alt="instagram" /></StyledAnchor>
            </ColTwo>
        </Container>
    )
}

export default ContactIconsMobile

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
    z-index: 3;
    top: 15vh;
    right: 10%;
`
const ColOne = styled.div`
    display: flex; 
    flex-direction: column; 
    margin-right: 10%;
`
const ColTwo = styled.div`
    display: flex; 
    margin-right: 10%;
    flex-direction: column; 
`
const StyledAnchor = styled.a`
    cursor: pointer; 
    margin: 15% 5%; 

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`
const StyledIcon = styled.img`
    width: 17vw;
`
const GmailHover = styled.div`
    cursor: pointer; 
    margin: 15% 5%; 

    &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
    }
`