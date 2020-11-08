import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/homeInventory.png'
import homeInventoryGif from '../../assets/home-inventory-gif.gif'

const HomeInventory = () => {
    return (
        <Container>
            <StyledImg src={magazine} />
            <StyledGif src={homeInventoryGif} />
            <a href="https://home-inventory-website.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>

        </Container>
    )
}

export default HomeInventory

const Container = styled.div`
    position: relative; 
    display: inline-block;
    float: right;
    margin-top: 6%;
`

const StyledImg = styled.img`
    width: 50vw;
    position: relative; 
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 44%;
    height: 17.7%;
    top: 19.7%;
    right: 38.6%;
    z-index: 0;
    transform: rotate(-0.5deg);
`
const ClickBox = styled.div`
    position: absolute;
    width: 44%;
    height: 17.7%;
    top: 19.7%;
    right: 38.6%;
    z-index: 3;
    opacity: 0;
    transform: rotate(-0.5deg);

`