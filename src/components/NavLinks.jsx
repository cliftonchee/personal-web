import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 100%;
    position: absolute;
    margin-top: 60%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    z-index: 20;

    @media only screen and (max-width: 768px) {
        margin-top: 700px;
    }
`

const List = styled.ul`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin-left: 15%;
    margin-right: 13%;
    list-style: none;
    flex-direction: row;
`

const ListItem = styled.li`
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;
    animation: fadeIn ${(props) => props.delay} ease forwards;
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

    &:hover::after {
        content: "${(props) => props.num}"; /* Displayed when hovering */
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        color: #ADD8E6;
        overflow: hidden;
        white-space: nowrap;
        animation: moveText 0.5s linear both;
    }

    &:hover::before {
        content: "${(props) => props.text.replace(/\s+/g, '\u00A0')}"; /* Dynamic content based on props.text with non-breaking spaces */
        color: #ADD8E6; /* Change text color to light blue when hovering */
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        white-space: nowrap;
        overflow: hidden;
        animation: moveText 0.5s linear both;
    }

    @keyframes moveText {
        to {
            width: 100%;
        }
    }
`

const data = [
    {text: "About", num: "01.", delay: "1s"},
    {text: "Portfolio", num: "02.", delay: "1.75s"},
    {text: "Contact", num: "03.", delay: "2.5s"}
];

const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const NavLinks = () => {

    return (
        <Container>
            <List>
                {data.map((item) => (
                    <ListItem key={item.text} text={item.text} num={item.num} delay={item.delay} onClick={() => handleClickScroll(item.text)}>
                        {item.num}<br/>{item.text}
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default NavLinks
