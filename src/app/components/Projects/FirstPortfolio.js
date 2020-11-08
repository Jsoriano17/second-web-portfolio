import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/first-portfolio.png'
import firstPortfolioGif from '../../assets/first-portfolio-gif.gif'

const FirstPortfolio = () => {
    return (
        <Container>
            <StyledImg src={magazine} />
            <StyledGif src={firstPortfolioGif} />
            <a href="https://jeffreysorianoportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </Container>
    )
}

export default FirstPortfolio
const Container = styled.div`
    position: relative; 
    display: inline-block;
    float: right;
`

const StyledImg = styled.img`
    width: 50vw;
    position: relative;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 36.5%;
    height: 15%;
    top: 63.5%;
    right: 49%;
    z-index: 0;
`
const ClickBox = styled.img`
    position: absolute;
    width: 36.5%;
    height: 15%;
    top: 63.5%;
    right: 49%;
    opacity: 0;
    z-index: 3;
`
