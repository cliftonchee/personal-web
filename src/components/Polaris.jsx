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
    width: 70%;
    height: 100%;
    border-top-right-radius: 50px;
`

const Polaris = () => {
    return (
        <Section>
            <Image src='../../img/polaris.png'></Image>
        </Section>
    )
}

export default Polaris