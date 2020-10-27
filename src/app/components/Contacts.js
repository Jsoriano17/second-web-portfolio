import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

export const Contacts = () => {
    return (
        <div style={{ height: 1000, background: 'black' }}>
            <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                <h1 id="contacts" >contacts</h1>
            </ScrollAnimation>
        </div>
    )
}
