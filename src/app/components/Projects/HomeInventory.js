import React from 'react'
import styled from 'styled-components'
import magazine from '../../assets/magazines/adventure-log-magazine.png'

const HomeInventory = () => {
    return (
        <>
             <StyledImg src={magazine} />
        </>
    )
}

export default HomeInventory

const StyledImg = styled.img`
    position: absolute;
    width: 1100px;
    top: 200px;
    right: -36vw;
    z-index: 0;
`
