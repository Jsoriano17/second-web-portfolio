import React, { useEffect, useState } from 'react'
import design from '../../assets/design-gif.gif';
import designReversed from '../../assets/design-gif-reversed.gif'
import designStill from '../../assets/design-still.png'
import styled from 'styled-components';

const Design = () => {
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

export default Design

const DesignSec = styled.img`
    height: 83.7%;
    width: 30.6%;
    top: 10.9%;
    position: absolute;
    right: 0;
    z-index: 3;
`
const ClickBox = styled.div`
    width: 15.5%;
    height: 72.5%; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 14.5%;
    right: 8.5%;
    opacity: 0;
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 2.734375vw;
    color: black;
    text-align: center;
    position: absolute; 
    top: 19.4%;
    right: 11.8%;
    z-index: 2;
    font-weight: 100;
`
const StyledUl = styled.ul`
    font-size: 1.71875vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 27.4%;
    right: 12.5%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`