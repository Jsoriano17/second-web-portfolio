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
                <StyledForm>
                    <StyledNameInput required />
                    <StyledEmailInput required />
                    <StyledMessageInput required />
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
    height: 750px;
`
const StyledForm = styled.form`
    display: flex; 
    flex-direction: column;
`
const StyledNameInput = styled.input`
    margin-top: 160px;
    margin-left: 565px;
    width: 400px;
    background: transparent;
    border: none;
    z-index: 1; 
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledEmailInput = styled.input`
    margin-top: 55px;
    margin-left: 535px;
    width: 435px;
    background: transparent;
    border: none;
    z-index: 1;  
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledMessageInput = styled.textarea`
    margin-top: 35px;
    margin-left: 532px;
    width: 440px;
    height: 125px;
    background: transparent;
    border: none;
    resize: none;
    padding: 5px;
    z-index: 1;  
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
`
const StyledSubmit = styled.input`
    z-index: 1;    
    width: 100px; 
    margin-top: 10px;
    border: 1px solid black;
    background: transparent;
    margin-left: 872px;
    cursor: pointer;
`

const Magazine = styled.img`
    width: 1100px;
    position: absolute;
    top: 130px; 
    left: 100px;
    z-index: 0;
`
const Envelope = styled.img`
    width: 500px;
    position: absolute;
    top: 320px; 
    left: -200px;
    z-index: 0;
    transform: rotate(90deg);
`

const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 85px;
    color: black;
`