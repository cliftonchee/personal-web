import React, { useState } from 'react'
import styled from 'styled-components'
import GoogleDSC from './GoogleDSC'
import Polaris from './Polaris'
import Hearhtfelt from './Hearhtfelt'
import DigitalSpacee from './DigitalSpacee'

const Section = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #2c3c79, #080d21);
  background-color: #080d21;
  scroll-snap-align: center;
  color: #c6c8cf;
`

const Container = styled.div`
    display: flex;
    scroll-snap-align: center;
`

const Left = styled.div`
  flex: 1;
  height: 100vh;
  /* display: grid; */
  position: relative;
  /* background-color: #885fff; */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
    margin-left: 8vh;
    margin-top: 8vh;
    position: relative;
`

const Logo = styled.img`
  cursor: pointer;
  position: absolute;
  width: 80px;
  height: 80px;
`

const ProjectContainer = styled.div`
  margin-top: 26vh;
  height: 74vh;
  width: 74vh;
  overflow: hidden;
  border-top-right-radius: 80px;
  /* border: solid; */
  /* display: flex; */
`

const Right = styled.div`
  flex: 1;
  position: relative;
  display: grid;
  padding: 200px 0px 200px 0px;

  @media only screen and (max-width: 768px) {
    padding: 100px;
  }
`

const PortfolioContainer = styled.div`
  position: relative;
  display: grid;
  padding: 0px 150px 0px 50px;

  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`

const Line = styled.hr`
  height: 0.5px;
  background-color: #c6c8cf;
  border-radius: 20px;
`
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    margin: 20px 0px;
  }
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;

  @media only screen and (max-width: 768px) {
    margin-right: 50px;
  }
`;

const Number = styled.text`
  margin-top: 10px;
  margin-right: 10px;
  font-size: 36px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
`

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: justify;
  color: #c6c8cf;

  &:hover {
    transform: scale(1.05) translateX(3px);
  }
`;

const Subtext = styled.p`
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
  color: #c6c8cf;
`;

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Portfolio = () => {
    const [work, setWork] = useState("GoogleDSC");

    return (
        <Section id="Portfolio">
          <Container>
            <Left>
              <LogoContainer>
                <Logo src="../../img/Chee_Logo.png" onClick={() => handleClickScroll("Intro")}></Logo>
              </LogoContainer>
              <ProjectContainer>
                {work === "GoogleDSC" ? (
                  <GoogleDSC />
                ) : work === "Polaris" ? (
                  <Polaris />
                ) : work === "Hearhtfelt" ? (
                  <Hearhtfelt />
                ) : (
                  <DigitalSpacee />
                )} 
              </ProjectContainer>
            </Left>
            <Right>
              <PortfolioContainer>
                <TextContainer>
                  <Title>P O R T F O L I O</Title>
                  <Number>4</Number>
                </TextContainer>
                <Line/>
                <TextContainer onClick={() => setWork("GoogleDSC")}>
                  <Subtitle>Google DSC</Subtitle>
                  <Subtext>Web Dev</Subtext>
                </TextContainer>
                <Line/>
                <TextContainer onClick={() => setWork("Polaris")}>
                  <Subtitle>Polaris</Subtitle>
                  <Subtext>Full Stack</Subtext>
                </TextContainer>
                <Line/>
                <TextContainer onClick={() => setWork("Hearhtfelt")}>
                  <Subtitle>HeaRHtfelt</Subtitle>
                  <Subtext>President</Subtext>
                </TextContainer>
                <Line/>
                <TextContainer onClick={() => setWork("DigitalSpacee")}>
                  <Subtitle>Digital Spacee</Subtitle>
                  <Subtext>Web Dev</Subtext>
                </TextContainer>
                <Line/>
              </PortfolioContainer>
            </Right>
          </Container>
        </Section>
    )
}

export default Portfolio