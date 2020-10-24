import React, { useEffect, useState } from 'react'
import frontEnd from '../../assets/front-end-gif.gif';
import frontEndReversed from '../../assets/front-end-gif-reversed.gif'
import frontEndStill from '../../assets/front-end-still.png'
import styled from 'styled-components';

const FrontEnd = () => {

    const [opener, setOpener] = useState(true);
    const [fEG, setFEG] = useState(frontEndReversed);
    const [fDisplay, setFDisplay] = useState('block');
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    const changeGif = () => {
        setFDisplay('none')
        if (opener) {
            setFEG(frontEnd)
            setOpener(!opener)
        } else {
            setFEG(frontEndReversed)
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
            <FrontEndStill src={frontEndStill} style={{ display: fDisplay }} />
            <FrontEndSec src={fEG} />
        </>
    )
}

export default FrontEnd

const FrontEndSec = styled.img`
    height: 706px;
    width: 449.5px;
    z-index: 1;
`
const ClickBox = styled.div`
    width: 200px;
    height: 500px; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 2;
    top: 100px;
    left: 110px;
    opacity: 0;
`
const FrontEndStill = styled.img`
    height: 706px;
    width: 449.5px;
    z-index: 1;
    position: absolute; 
`