import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactMag from '../assets/contact-mag-mobile.png';

export const ContactsMobile = () => {
    return (
        <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
            <Container>
                <StyledH1 id="contacts">Lets_Work</StyledH1>
                <StyledH1Two>Together.</StyledH1Two>
                <StyledForm name="contact" method="POST" data-netlify="true">
                    <StyledNameInput name="name" required />
                    <StyledEmailInput type="email" required />
                    <StyledMessageInput name="message" required />
                    <StyledSubmit type="submit" value="Submit" />
                </StyledForm>
                <Magazine src={ContactMag}  />
            </Container>
        </ScrollAnimation>
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
    top: 81%;
    left: 35%;
    width: 52%;
    background: transparent;
    font-size: 3vw;
    border: none;
    z-index: 1; 
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledEmailInput = styled.input`
    top: 110.5%;
    left: 31%;
    position: absolute;
    width: 56%;
    background: transparent;
    font-size: 3vw;
    border: none;
    z-index: 1;  
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledMessageInput = styled.textarea`
    left: 31%;
    top: 124%;
    width: 54%;
    height: 25%;
    position: absolute;
    background: transparent;
    font-size: 3vw;
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
    width: 12%; 
    border: 1px solid black;
    background: transparent;
    padding: 0.5% 0 ;
    top: 155%;
    font-size: 3vw;
    left: 75.5%;
    cursor: pointer;
`
const Magazine = styled.img`
    width: 100%;
    position: absolute;
    top: 30%; 
    left: 0%;
    z-index: 0;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 12vw;
    color: black;
    font-weight: 100;
    text-align: center; 
`
const StyledH1Two = styled.h1`
    font-family: Impact_Label;
    font-size: 10vw;
    margin-bottom: 60%;
    color: black;
    font-weight: 100;
    text-align: center; 
`