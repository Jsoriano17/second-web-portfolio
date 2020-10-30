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
                <StyledForm name="contact" method="POST" data-netlify="true">
                    <StyledNameInput name="name" required />
                    <StyledEmailInput type="email" type="email" required />
                    <StyledMessageInput name="message" required />
                    <StyledSubmit type="submit" value="Submit" />
                </StyledForm>
                <Magazine src={ContactMag} />
                <Envelope src={EnvelopePic} />
            </ScrollAnimation>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    text-align: center;
    overflow: hidden;
    height: 109.01162790697674vh;
`
const StyledForm = styled.form`
    display: flex; 
    flex-direction: column;
    font-size: 1.09375vw;
`
const StyledNameInput = styled.input`
    margin-top: 34.5vh;
    margin-left: 44.140625vw;
    width: 31.25vw;
    background: transparent;
    border: none;
    z-index: 1; 
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledEmailInput = styled.input`
    margin-top: 9.720930232558139vh;
    margin-left: 41.796875vw;
    width: 33.984375vw;
    background: transparent;
    border: none;
    z-index: 1;  
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledMessageInput = styled.textarea`
    margin-top: 5vh;
    margin-left: 41.5625vw;
    width: 33.375vw;
    height: 15.877906976744185vh;
    background: transparent;
    border: none;
    resize: none;
    padding:  0.7267441860465116vh 0.390625vw;
    z-index: 1;  
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledSubmit = styled.input`
    z-index: 1;    
    width: 7.8125vw; 
    margin-top: 0.5vh;
    border: 1px solid black;
    background: transparent;
    padding: 3px 0 ;
    margin-left: 68.125vw;
    cursor: pointer;
`

const Magazine = styled.img`
    width: 85.9375vw;
    position: absolute;
    top: 18.8953488372093vh; 
    left: 7.8125vw;
    z-index: 0;
`
const Envelope = styled.img`
    width: 39.0625vw;
    position: absolute;
    top: 46.51162790697674vh; 
    left: -15.625vw;
    z-index: 0;
    transform: rotate(90deg);
`

const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 6.640625vw;
    color: black;
    font-weight: 100;
`