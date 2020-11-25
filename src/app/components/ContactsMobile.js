import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactMag from '../assets/contact-mag-mobile.png';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactsMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }
    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Message successfully sent! I will respond to you as soon as I can."))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { name, email, message } = this.state;
        return (
           <>
           </>
        )
    }
}

export default ContactsMobile

const ContainerMobile = styled.div`
    margin-top: 6%;
    position: relative; 
    width: 100%;
    display: inline-block;
`
const StyledNameInputMobile = styled.input`
    position: absolute;
    top: 67.2%;
    left: 35.5%;
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
const StyledEmailInputMobile = styled.input`
    top: 88.5%;
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
const StyledMessageInputMobile = styled.textarea`
    left: 31%;
    top: 98%;
    width: 54%;
    height: 19%;
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
const StyledSubmitMobile = styled.input`
    position: absolute;
    z-index: 1;    
    width: 12%; 
    border: 1px solid black;
    background: transparent;
    padding: 0.5% 0 ;
    top: 120%;
    font-size: 3vw;
    left: 75.5%;
    cursor: pointer;
`
const MagazineMobile = styled.img`
    width: 100%;
    position: absolute;
    top: 30%; 
    left: 0%;
    z-index: 0;
`
const StyledH1Mobile = styled.h1`
    font-family: Impact_Label;
    font-size: 15vw;
    color: black;
    font-weight: 100;
    text-align: center; 
`
const StyledH1TwoMobile = styled.h1`
    font-family: Impact_Label;
    font-size: 13vw;
    margin-bottom: 85%;
    color: black;
    font-weight: 100;
    text-align: center; 
`