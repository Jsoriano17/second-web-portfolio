import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactMag from '../assets/magazines/contact-mag.png';
import EnvelopePic from '../assets/envelope.png';
import { useMediaQuery } from 'react-responsive';
import { ContactsMobile } from './ContactsMobile';
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
    Honeypot
} from 'react-netlify-forms'
import { useForm } from 'react-hook-form'

export const Contacts = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 5000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const { register, handleSubmit } = useForm({ mode: 'onBlur' })
    const netlify = useNetlifyForm({
        name: 'react-hook-form',
        action: '/thanks',
        honeypotName: 'bot-field',
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify Server')
        }
    })
    const onSubmit = (data) => netlify.handleSubmit(null, data)

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

    return (
        <>
            {isDesktopOrLaptop && <>
                <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>

                    <Container>
                        <StyledH1 id="contacts">Lets_Work_Together.</StyledH1>
                        <NetlifyFormProvider {...netlify}>
                            <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)} style={{fontSize: '1.09375vw'}}>
                                <Honeypot />
                                {netlify.success && (
                                    <p sx={{ variant: 'alerts.success', p: 3 }}>
                                        Thanks for contacting us!
                                    </p>
                                )}
                                {netlify.error && (
                                    <p sx={{ variant: 'alerts.muted', p: 3 }}>
                                        Sorry, we could not reach servers.
                                    </p>
                                )}

                                <StyledNameInput
                                    type='text'
                                    name='name'
                                    id='name'
                                    required />
                                <StyledEmailInput
                                    type='email'
                                    name='email'
                                    id='email'
                                    ref={register({
                                        required: 'Email is required',
                                        pattern: {
                                            value: EMAIL_REGEX,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    sx={{
                                        variant: 'forms.input'
                                    }}
                                />
                                <StyledMessageInput name="message" id='message' required />
                                <StyledSubmit type='submit' sx={{ variant: 'buttons.success' }} />
                            </NetlifyFormComponent>
                        </NetlifyFormProvider>
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