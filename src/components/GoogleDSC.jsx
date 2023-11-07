import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  color: #c6c8cf;
  border-top-right-radius: 80px;
`

const Image = styled.img`
    width: 520px;
    height: 520px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`

const Time = styled.p`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 20px;
    -webkit-text-stroke: 1px white;
    color: transparent;
`

const GoogleDSC = () => {
    return (
        <Section>
            {/* <Time>Aug '23 - Current</Time> */}
            <Image src="../../img/GoogleImage.png"></Image>
        </Section>
    )
}

export default GoogleDSC