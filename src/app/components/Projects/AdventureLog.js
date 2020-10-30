import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/adventure-log-magazine.png'
import adventureLogGif from '../../assets/adventure-log-gif.gif';

const AdventureLog = () => {
    return (
        <>
            <StyledP>
                Adventure Log is an app created for my <br />
             girlfriend and I to log all of our adventures. <br />
             The app is always being updated with new <br />
             adventures and limited to mobile till further <br />
             updates.
             </StyledP>
            <StyledP2>
                Many technologies were <br />
            used to create the adve- <br />nture app. Here's some <br/> 
            of the tech I used: 
            </StyledP2>
            <StyledUl>
                <li>React</li>
                <li>MobX</li>
                <li>TypeScript</li>
                <li>C#</li>
                <li>ASP.NET Core</li>
                <li>EntityFramework Core</li>
                <li>Adobe Suite</li>
            </StyledUl>
            <StyledImg src={magazine} />
            <StyledGif src={adventureLogGif} />
            <a href="https://github.com/Jsoriano17/AdventureLog" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </>
    )
}

export default AdventureLog

const StyledImg = styled.img`
    position: absolute;
    width: 85.9375vw;
    top: 130.8139534883721vh;
    left: -36vw;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 14.453125vw;
    left: 13.671875vw;
    height: 58.13953488372093vh;
    top: 176.59883720930233vh;
    z-index: 0;
`
const ClickBox = styled.div`
    position: absolute;
    width: 14.453125vw;
    left: 13.671875vw;
    height: 58.13953488372093vh;
    top: 176.59883720930233vh;
    opacity: 0;
    z-index: 3;
`
const StyledP = styled.p`
    font-size: 1.171875vw; 
    margin-top: 21.988372093023257vh;
    margin-left: 16.40625vw;
    position: relative;
    z-index: 3;
`
const StyledP2 = styled.p`
    font-size: 1.171875vw; 
    margin-top: 13.901162790697674vh;
    margin-left: 32.421875vw;
    position: relative;
    z-index: 3; 
`
const StyledUl = styled.ul`
    font-size:  1.09375vw; 
    margin-top: 2vh;
    margin-left: 34.375vw;
    position: relative;
    z-index: 3; 
`
