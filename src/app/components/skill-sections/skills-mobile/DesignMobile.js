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
    height: 44%;
    width: 62%;
    overflow: hidden;
    z-index: 3;
    transform: rotate(90deg);
    top: 61%;
    left: 13%;
    position: absolute;
`
const ClickBox = styled.div`
    width: 80%;
    height: 10%; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 5;
    top: 77%;
    left: 10%;
    opacity: 0;
`
const StyledUl = styled.ul`
    font-size: 4.5vw;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 75.5%;
    left: 17%;
    z-index: 2;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    opacity: 0.7; 
`