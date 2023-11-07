import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  background-color: transparent;
  color: #c6c8cf;
  border-top-right-radius: 80px;
`

const Image = styled.img`
    width: 520px;
    height: 520px;
    border-top-right-radius: 50px;
`

const Desc = styled.p`
    margin-top: 5px;
    font-size: 20px;
    font-weight: 500;
    margin-left: 20px;
`

const Hearhtfelt = () => {
    return (
        <Section>
            <Image src='../../img/hearhtfelt.jpg'></Image>
            {/* <Desc>Aug '23 - Present</Desc>
            <Desc>Mental well-being of residents</Desc> */}
        </Section>
    )
}

export default Hearhtfelt