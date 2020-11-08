import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/homeInventory.png'
import homeInventoryGif from '../../assets/home-inventory-gif.gif'

const HomeInventory = () => {
    return (
        <>
            <StyledImg src={magazine} />
            <StyledGif src={homeInventoryGif} />
            <a href="https://home-inventory-website.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>

        </>
    )
}

export default HomeInventory

const StyledImg = styled.img`
    margin-top: 6%;
    width: 50%;
    float: right; 
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 22.03125vw;
    height: 22.96511627906977vh;
    top: 18.2%;
    right: 19.3%;
    z-index: 0;
    transform: rotate(-0.5deg);
`
const ClickBox = styled.div`
    position: absolute;
    width: 282px;
    height: 158px;
    top: 18.2%;
    right: 19.3%;
    z-index: 3;
    opacity: 0;
    transform: rotate(-0.5deg);

`