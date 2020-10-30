import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/reactivities.png'
import reactivitiesGif from '../../assets/reactivities-gif.gif'

const Reactivities = () => {
    return (
        <>
            <StyledP>
                Reactivities is activity app created to orga- <br />
                nize and host events. Users may create, join, <br />
                and chat in events as well as follow other <br />
                users. Reactivities goal is to motivate users to <br />
                go out and meet new people through real <br />
                events. The app is limited to desktop for the <br />
                time being. Go create and be apart of the <br />
                events in Reactivities!
            </StyledP>
            <Container>
                <StyledUl>
                    <li>React JS</li>
                    <li>Typescript</li>
                    <li>MobX</li>
                    <li>Axios</li>
                    <li>React Router</li>
                    <li>Many more...</li>
                </StyledUl>
                <StyledUl2>
                    <li>C#</li>
                    <li>ASP.NET Core</li>
                    <li>ASP.NET Identity</li>
                    <li>EF Core</li>
                    <li>Mediator</li>
                    <li>Many more...</li>
                </StyledUl2>
            </Container>
            <StyledImg src={magazine} />
            <StyledGif src={reactivitiesGif} />
            <a href="https://github.com/Jsoriano17/Reactivities" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                <ClickBox />
            </a>
        </>
    )
}

export default Reactivities

const StyledImg = styled.img`
    position: absolute;
    width: 85.9375vw;
    top: 0;
    left: -36vw;
    z-index: 1;
`
const StyledGif = styled.img`
    position: absolute;
    width: 21.09375vw;
    height: 24.563953488372093vh;
    top: 13.517441860465116vh;
    left: 20.625vw;
    z-index: 0;
`
const ClickBox = styled.div`
    position: absolute;
    width: 21.09375vw;
    height: 24.563953488372093vh;
    top: 13.517441860465116vh;
    left: 20.625vw;
    opacity: 0;
    z-index: 3;
`
const StyledP = styled.p`
    font-size: 1.171875vw; 
    margin-top:  51.30813953488372vh;
    margin-left:  19.921875vw;
    position: relative;
    color: #b3b3b3;
    text-indent: 1.5625vw;
    z-index: 3;
`
const Container = styled.div`
    display: flex; 
    flex-direction: row;
    margin-top: 25.5vh;
    margin-left: 25vw;
    font-size: 0.9375vw; 
    font-weight: bold;

`
const StyledUl = styled.ul`
    list-style: none;
    margin-Right: 6.640625vw;
    position: relative;
    color: #1b1b1b;
    z-index: 3; 
`
const StyledUl2 = styled.ul`
    list-style: none;
    position: relative;
    color: #1b1b1b;
    z-index: 3; 
`

