import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/adventure-log-magazine.png'

const FirstPortfolio = () => {
    return (
        <>
            <StyledImg src={magazine} />
        </>
    )
}

export default FirstPortfolio

const StyledImg = styled.img`
    position: absolute;
    width: 1100px;
    top: 1100px;
    right: -36vw;
    z-index: 0;
`