import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/first-portfolio.png'
import firstPortfolioGif from '../../assets/first-portfolio-gif.gif'

const FirstPortfolio = () => {
    return (
        <>
            <StyledImg src={magazine} />
            <StyledGif src={firstPortfolioGif} />
            <a href="https://jeffreysorianoportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </>
    )
}

export default FirstPortfolio

const StyledImg = styled.img`
    width: 50%;
    float: right; 
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 18.359375vw;
    height: 18.8953488372093vh;
    top: 81.6%;
    right: 24.4%;
    z-index: 0;
`
const ClickBox = styled.img`
    position: absolute;
    width: 18.359375vw;
    height: 18.8953488372093vh;
    top: 242.7325581395349vh;
    right: 24.375vw;
    opacity: 0;
    z-index: 3;
`
