import React, { useEffect, useState } from 'react'
import backEnd from '../../assets/back-end-gif.gif';
import backEndReversed from '../../assets/back-end-gif-reversed.gif'
import backEndStill from '../../assets/back-end-still.png'
import styled from 'styled-components';

const BackEnd = () => {

    const [opener, setOpener] = useState(true);
    const [bEG, setBEG] = useState(backEndReversed);
    const [bDisplay, setBDisplay] = useState('block');
    const [gifDisplay, setGifDisplay] = useState('block')

    useEffect(() => {
        gifTimeOut()
    }, [])

    const changeGif = () => {
        setBDisplay('none')
        if (opener) {
            setBEG(backEnd)
            setOpener(!opener)
        } else {
            setBEG(backEndReversed)
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
            <BackEndStill src={backEndStill} style={{ display: bDisplay }} />
            <BackEndSec src={bEG} />
        </>
    )
}

export default BackEnd

const BackEndSec = styled.img`
    height: 706px;
    width: 449.5px;
    position: absolute;
    left: 415.4px;
    z-index: 1;
`
const ClickBox = styled.div`
    width: 200px;
    height: 500px; 
    background: black;
    cursor: pointer; 
    position: absolute; 
    z-index: 3;
    top: 100px;
    left: 550px;
    opacity: 0;
`
const BackEndStill = styled.img`
    height: 706px;
    width: 449.5px;
    z-index: 2;
    top: 0;
    left: 415.4px;
    position: absolute; 
`