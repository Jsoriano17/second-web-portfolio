import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactMag from '../assets/magazines/contact-mag.png';
import ContactMagMobile from '../assets/contact-mag-mobile.png';
import EnvelopePic from '../assets/envelope.png';
import MediaQuery from 'react-responsive'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contacts extends React.Component {
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
                <MediaQuery minDeviceWidth={1224}>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                        <Container>
                            <StyledH1 id="contacts">Lets_Work_Together.</StyledH1>
                            <form style={{ fontSize: '2vw' }} onSubmit={this.handleSubmit}>
                                <StyledNameInput type="text" name="name" value={name} onChange={this.handleChange} required />
                                <StyledEmailInput type="email" name="email" value={email} onChange={this.handleChange} required />
                                <StyledMessageInput name="message" value={message} onChange={this.handleChange} required />
                                <StyledSubmit type='submit' />
                            </form>
                            <Magazine src={ContactMag} />
                            <Envelope src={EnvelopePic} />
                        </Container>
                    </ScrollAnimation>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224} orientation={'portrait'}>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                        <ContainerMobile>
                            <StyledH1Mobile id="contacts">Lets_Work</StyledH1Mobile>
                            <StyledH1TwoMobile>Together.</StyledH1TwoMobile>
                            <form style={{ fontSize: '1.09375vw' }} onSubmit={this.handleSubmit}>
                                <StyledNameInputMobile type="text" name="name" value={name} onChange={this.handleChange} required />
                                <StyledEmailInputMobile type="email" name="email" value={email} onChange={this.handleChange} required />
                                <StyledMessageInputMobile name="message" value={message} onChange={this.handleChange} required />
                                <StyledSubmitMobile type='submit' />
                            </form>
                            <MagazineMobile src={ContactMagMobile} />
                        </ContainerMobile>
                    </ScrollAnimation>
                </MediaQuery>
                <MediaQuery minDeviceWidth={4000}></MediaQuery>
            </>
        )
    }
}
export default Contacts;
const Container = styled.div`
    margin-top: 6%;
    position: relative; 
    width: 100%;
    display: inline-block;
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