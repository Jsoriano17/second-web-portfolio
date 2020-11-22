import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactMag from '../assets/magazines/contact-mag.png';
import EnvelopePic from '../assets/envelope.png';
import { useMediaQuery } from 'react-responsive';
import { ContactsMobile } from './ContactsMobile';

export const Contacts = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 5000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <>
            {isDesktopOrLaptop && <>
                <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                    <Container>
                        <StyledH1 id="contacts">Lets_Work_Together.</StyledH1>
                        <StyledForm name="contact" method="POST" data-netlify="true">
                            <StyledNameInput name="name" required />
                            <StyledEmailInput type="email" required />
                            <StyledMessageInput name="message" required />
                            <StyledSubmit type="submit" value="Submit" />
                        </StyledForm>
                        <Magazine src={ContactMag} />
                        <Envelope src={EnvelopePic} />
                    </Container>
                </ScrollAnimation>
            </>}
            
            {isTabletOrMobile && isPortrait && <>
                <ContactsMobile />
            </>}

            {isBigScreen && <> </>}
        </>
    )
}

const Container = styled.div`
    margin-top: 6%;
    position: relative; 
    width: 100%;
    display: inline-block;
`
const StyledForm = styled.form`
    font-size: 1.09375vw;
`
const StyledNameInput = styled.input`
    position: absolute;
    top: 73.8%;
    left: 44%;
    width: 31.25%;
    background: transparent;
    font-size: 1vw;
    border: none;
    z-index: 1; 
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledEmailInput = styled.input`
    top: 90.6%;
    left: 41.5%;
    position: absolute;
    width: 33.984375%;
    background: transparent;
    font-size: 1vw;
    border: none;
    z-index: 1;  
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledMessageInput = styled.textarea`
    left: 42%;
    top: 101.5%;
    width: 32.7%;
    height: 18%;
    position: absolute;
    background: transparent;
    font-size: 1vw;
    border: none;
    resize: none;
    padding:  0.7267441860465116% 0.390625%;
    z-index: 1;  
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledSubmit = styled.input`
    position: absolute;
    z-index: 1;    
    width: 7.8125%; 
    border: 1px solid black;
    background: transparent;
    padding: 0.5% 0 ;
    top: 128%;
    font-size: 1vw;
    left: 68.125%;
    cursor: pointer;
`

const Magazine = styled.img`
    width: 86%;
    position: absolute;
    top: 30%; 
    left: 7.8%;
    z-index: 0;
`
const Envelope = styled.img`
    width: 39.0625%;
    position: absolute;
    top: 62%; 
    left: -15.625%;
    z-index: 0;
    transform: rotate(90deg);
`

const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 6.640625vw;
    margin-bottom: 30%;
    color: black;
    font-weight: 100;
    text-align: center; 
`