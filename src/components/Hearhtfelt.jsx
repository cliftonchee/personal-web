import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  background-color: transparent;
  color: #c6c8cf;
  border-top-right-radius: 80px;
  animation: fadeIn 1s ease forwards;
    opacity: 0; /* Initially set opacity to 0 */

    @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateX(-10px); /* Optional: Move the element right by 50 pixels */
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
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