import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/homeInventory.png'
import homeInventoryGif from '../../assets/home-inventory-gif.gif'

const HomeInventory = () => {
    return (
        <>
            <StyledP>
                Home Inventory is an app <br />
                created to keep track of all  <br />
                your possessions. If you ever <br />
                run into an accident, natural <br />
                disaster, or legal problem, <br />
                Home Inventory can help! Use <br />
                Home Inventory to keep track <br />
                of household items, receipts, <br />
                and documents. Never worry <br />
                again today! (desktop only)
            </StyledP>
            <StyledUl>
                <li>React JS</li>
                <li>Axios</li>
                <li>React Router</li>
                <li>React Dropzone</li>
                <li>Ant.Design</li>
                <li>Ruby</li>
                <li>Ruby On Rails</li>
                <li>Devise</li>
            </StyledUl>
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
    position: absolute;
    width: 85.9375vw;
    top: 29.069767441860463vh;
    right: -36vw;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 22.03125vw;
    height: 22.96511627906977vh;
    top: 55.08720930232558vh;
    right: 19.296875vw;
    z-index: 0;
    transform: rotate(-0.5deg);
`
const ClickBox = styled.div`
    position: absolute;
    width: 282px;
    height: 158px;
    top: 379px;
    right: 247px;
    z-index: 3;
    opacity: 0;
    transform: rotate(-0.5deg);

`
const StyledP = styled.p`
    font-size: 1.171875vw; 
    margin-top: -5.174418604651162vh;
    margin-left: 73.828125vw;
    color: #e3e3e3;
    position: relative;
    text-indent: 1.5625vw;
    z-index: 3;
`
const StyledUl = styled.ul`
    font-size: 1.328125vw; 
    font-weight: bold;
    margin-top: -18.069767441860463vh;
    margin-right: 31.25vw;
    position: relative;
    direction: rtl;
    z-index: 3; 
`
