import React, { useEffect, useState } from 'react'
import design from '../../../assets/design-gif.gif';
import designReversed from '../../../assets/design-gif-reversed.gif'
import designStill from '../../../assets/design-still.png'
import styled from 'styled-components';

const DesignMobile = () => {
    const [dEG, setDEG] = useState(designStill);
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    const changeGif = () => {
        if (dEG === designStill) {
            setDEG(design)
        } else if (dEG === design) {
            setDEG(designReversed)
        } else {
            setDEG(design)
        }
    }

    const gifTimeOut = () => {
        setGifDisplay('none')
        setTimeout(() => {
            setGifDisplay('block')
        }, 1500);
    }
    return (
        <>
            <ClickBox
                onClick={() => {
                    changeGif()
                    gifTimeOut()
                }}
                style={{ display: gifDisplay }}
            />
            <DesignSec src={dEG} />
            <StyledH1>Design</StyledH1>
            <StyledUl>
                <li>Adobe PhotoShop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe After Effects</li>
                <li>Figma</li>
                <li>Responsive Design</li>
            </StyledUl>
        </>
    )
}

export default DesignMobile

const DesignSec = styled.img`
    height: 28.33%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 70%;
    z-index: 3;
`
const ClickBox = styled.div`
    width: 40%;
    height: 25%; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 71%;
    left: 27%;
    opacity: 0;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 10.5vw;
    color: black;
    text-align: center;
    position: absolute; 
    top: 73%;
    left: 25%;
    z-index: 2;
    font-weight: 100;
`
const StyledUl = styled.ul`
    font-size: 6.5vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 76%;
    left: 28%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`