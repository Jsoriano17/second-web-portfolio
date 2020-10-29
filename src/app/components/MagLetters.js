import React from 'react';
import styled from 'styled-components';
import Letters from '../assets/magazine-letters.png'

const MagLetters = () => {
    return (
        <>
            <StyledImg src={Letters} />
        </>
    )
}

export default MagLetters

const StyledImg = styled.img`
    width: 58.59375vw;
    position: absolute;
    right: 2vw;
    top: 35vh;
`
