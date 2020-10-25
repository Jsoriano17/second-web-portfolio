import React, { useEffect, useState } from 'react'
import design from '../../assets/design-gif.gif';
import designReversed from '../../assets/design-gif-reversed.gif'
import designStill from '../../assets/design-still.png'
import styled from 'styled-components';

const Design = () => {

    const [opener, setOpener] = useState(true);
    const [dEG, setDEG] = useState(designReversed);
    const [dDisplay, setDDisplay] = useState('block');
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    const changeGif = () => {
        setDDisplay('none')
        if (opener) {
            setDEG(design)
            setOpener(!opener)
        } else {
            setDEG(designReversed)
            setOpener(!opener)
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
            <DesignStill src={designStill} style={{ display: dDisplay }} />
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
    height: 706px;
    width: 449px;
    position: absolute;
    right: 0;
    z-index: 2;
`
const ClickBox = styled.div`
    width: 200px;
    height: 500px; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 4;
    top: 100px;
    right: 110px;
    opacity: 0;
`
const DesignStill = styled.img`
    height: 706px;
    width: 449px;
    z-index: 3;
    top: 0;
    right: 0;
    position: absolute; 
`
const StyledH1 = styled.h1`
    font-family: Impact_Label;
    font-size: 35px;
    color: black;
    text-align: center;
    position: absolute; 
    top: 120px;
    right: 150px;
    z-index: 1;
`
const StyledUl = styled.ul`
    font-size: 20px;
    list-style-type: none;
    text-align: center;
    position: absolute; 
    top: 180px;
    right: 120px;
    z-index: 1;
`