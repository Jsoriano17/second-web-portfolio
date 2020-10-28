import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactMag from '../assets/magazines/contact-mag.png';
import EnvelopePic from '../assets/envelope.png';

export const Contacts = () => {
    return (
        <Container>
            <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                <StyledH1 id="contacts">Lets_Work_Together.</StyledH1>
                <Magazine src={ContactMag} />
                <Envelope src={EnvelopePic} />
            </ScrollAnimation>
        </Container>
    )
}

const Container = styled.div `
    position: relative;
    text-align: center;
    overflow: hidden;
    height: 750px;
`

const Magazine = styled.img`
    width: 1100px;
    position: absolute;
    top: 130px; 
    left: 100px;
`
const Envelope = styled.img`
    width: 500px;
    position: absolute;
    top: 320px; 
    left: -200px;
    transform: rotate(90deg);
`

const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 85px;
    color: black;
`