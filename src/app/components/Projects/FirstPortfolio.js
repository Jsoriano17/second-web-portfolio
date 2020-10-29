import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/first-portfolio.png'
import firstPortfolioGif from '../../assets/first-portfolio-gif.gif'

const FirstPortfolio = () => {
    return (
        <>
            <StyledP>
                We all started somewhere <br /> 
                and this is where I did. This <br /> 
                the first portfolio site I made to <br /> 
                display all my projects. The web- <br />
                site was made with very bare bone <br />
                tech and developer tools. Looking back at my first site <br /> 
                shows how much I've learned and advanced as a developer. 
            </StyledP>
            <StyledUl>
                <StyledLi>HTML</StyledLi>
                <StyledLi>CSS</StyledLi>
                <StyledLi>JavaScript</StyledLi>
                <StyledLi>Adobe Suite</StyledLi>
            </StyledUl>
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
    position: absolute;
    width: 85.9375vw;
    top: 85.9375vw;
    right: -36vw;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 18.359375vw;
    height: 18.8953488372093vh;
    top: 242.7325581395349vh;
    right: 24.375vw;
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
const StyledP = styled.p`
    font-size:  1.171875vw; 
    margin-top: -7.994186046511628vh;
    margin-left: 57.421875vw;
    color: black;
    position: relative;
    z-index: 3;
`
const StyledUl = styled.ul`
    font-size: 1.328125vw; 
    font-weight: bold;
    margin-top: 3.052325581395349vh;
    margin-left: 79.6875vw;
    position: relative;
    color: white;
    list-style-type: none;
    z-index: 3; 
`

const StyledLi = styled.li`
    margin: 1.308139534883721vh 0;
`
