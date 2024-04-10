import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
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
    /* object-fit: cover; */
    border-top-right-radius: 50px;
    /* border-bottom-right-radius: 50px; */
`

const Time = styled.p`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 20px;
    -webkit-text-stroke: 1px white;
    color: transparent;
`

const BigHeartBros = () => {
    return (
        <Section>
            {/* <Time>Aug '23 - Current</Time> */}
            <Image src="../../img/big-heart-bros.png"></Image>
        </Section>
    )
}

export default BigHeartBros