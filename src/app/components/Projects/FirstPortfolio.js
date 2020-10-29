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
        </>
    )
}

export default FirstPortfolio

const StyledImg = styled.img`
    position: absolute;
    width: 1100px;
    top: 1100px;
    right: -36vw;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 235px;
    height: 130px;
    top: 1670px;
    right: 312px;
    z-index: 0;
`
const StyledP = styled.p`
    font-size: 15px; 
    margin-top: -55px;
    margin-left: 735px;
    color: black;
    position: relative;
    z-index: 3;
`
const StyledUl = styled.ul`
    font-size: 17px; 
    font-weight: bold;
    margin-top: 21px;
    margin-left: 980px;
    position: relative;
    color: white;
    list-style-type: none;
    z-index: 3; 
`

const StyledLi = styled.li`
    margin: 9px 0;
`
