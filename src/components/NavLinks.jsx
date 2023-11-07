import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 100%;
    position: absolute;
    margin-top: 350px;
    margin-left: 230px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;
    z-index: 20;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const List = styled.ul`
    display: flex;
    gap: 300px;
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
    {text: "About", num: "01."},
    {text: "Portfolio", num: "02."},
    {text: "Contact", num: "03."}
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
            <Links>
                <List>
                    {data.map((item) => (
                        <ListItem key={item.text} text={item.text} num={item.num} onClick={() => handleClickScroll(item.text)}>
                            {item.num}<br/>{item.text}
                        </ListItem>
                    ))}
                </List>
            </Links>
        </Container>
    )
}

export default NavLinks
