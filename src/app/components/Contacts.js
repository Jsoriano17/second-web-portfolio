import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactMag from '../assets/magazines/contact-mag.png';
import EnvelopePic from '../assets/envelope.png';


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
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <>
                <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                    <Container>
                        <StyledH1 id="contacts">Lets_Work_Together.</StyledH1>
                        <form style={{ fontSize: '1.5vw' }} onSubmit={this.handleSubmit}>
                            <StyledNameInput type="text" name="name" value={name} onChange={this.handleChange} required />
                            <StyledEmailInput type="email" name="email" value={email} onChange={this.handleChange} required />
                            <StyledMessageInput name="message" value={message} onChange={this.handleChange} required />
                            <StyledSubmit type='submit' />
                        </form>
                        <Magazine src={ContactMag} />
                        <Envelope src={EnvelopePic} />
                    </Container>
                </ScrollAnimation>
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