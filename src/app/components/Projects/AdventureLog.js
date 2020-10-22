import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/adventure-log-magazine.png'

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
        </>
    )
}

export default AdventureLog

const StyledImg = styled.img`
    position: absolute;
    width: 1100px;
    top: 900px;
    left: -36vw;
    z-index: 0;
`
const StyledP = styled.p`
    font-size: 15px; 
    margin-top: 110px;
    margin-left: 210px;
    position: relative;
    z-index: 2;
`
const StyledP2 = styled.p`
    font-size: 15px; 
    margin-top: 75px;
    margin-left: 415px;
    position: relative;
    z-index: 2; 
`
const StyledUl = styled.ul`
    font-size: 14px; 
    margin-top: 0px;
    margin-left: 395px;
    position: relative;
    z-index: 2; 
`
