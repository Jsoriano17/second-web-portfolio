import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/reactivities.png'

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
        </>
    )
}

export default Reactivities

const StyledImg = styled.img`
    position: absolute;
    width: 1100px;
    top: 0;
    left: -36vw;
    z-index: 0;
`
const StyledP = styled.p`
    font-size: 15px; 
    margin-top: 353px;
    margin-left: 255px;
    position: relative;
    color: #b3b3b3;
    text-indent: 20px;
    z-index: 2;
`
const Container = styled.div`
    display: flex; 
    flex-direction: row;
    margin-top: 133px;
    margin-left: 280px;
    font-size: 12px; 
    font-weight: bold;
`
const StyledUl = styled.ul`
    list-style: none;
    margin-Right: 43px;
    position: relative;
    color: #1b1b1b;
    z-index: 2; 
`
const StyledUl2 = styled.ul`
    list-style: none;
    position: relative;
    color: #1b1b1b;
    z-index: 2; 
`

