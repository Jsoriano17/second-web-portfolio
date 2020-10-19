import React from 'react';
import styled from 'styled-components';
import Letters from '../assets/magazine-letters.png'

const MagLetters = () => {
    return (
        <div>
            <StyledImg src={Letters} />
        </div>
    )
}

export default MagLetters

const StyledImg = styled.img`
    width: 730px;
    position: absolute;
    right: 2vw;
    top: 35vh;
`
