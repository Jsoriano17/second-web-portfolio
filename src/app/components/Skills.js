import React, { useState } from 'react'
import background from '../assets/my-skills-back.png'
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

export const Skills = () => {
    // const [tester, setTester] = useState(true);
    // const [boop, setBoop] = useState(still);

    // const changeGif = () => {

    //     if (tester) {

    //         setBoop(something)
    //         setTester(!tester)
    //     } else {
    //         setBoop(still)
    //         setTester(!tester)
    //     }

    // }
    return (
        <div>
            <ScrollAnimation animateIn='animate__fadeIn' animateOnce={true}>
                <img src={background} width="100%" />
            </ScrollAnimation>
        </div>
    )
}

const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 90px;
    color: black;
    margin-left: 5vw;
`

