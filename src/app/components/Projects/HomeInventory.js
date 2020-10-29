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
        </>
    )
}

export default HomeInventory

const StyledImg = styled.img`
    position: absolute;
    width: 1100px;
    top: 200px;
    right: -36vw;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 282px;
    height: 158px;
    top: 379px;
    right: 247px;
    z-index: 0;
    transform: rotate(-0.5deg);
`
const StyledP = styled.p`
    font-size: 15px; 
    margin-top: -70px;
    margin-left: 945px;
    color: #e3e3e3;
    position: relative;
    text-indent: 20px;
    z-index: 3;
`
const StyledUl = styled.ul`
    font-size: 17px; 
    font-weight: bold;
    margin-top: -200px;
    margin-right: 350px;
    position: relative;
    direction: rtl;
    z-index: 3; 
`
