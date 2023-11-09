import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #2F5E91, #2c3c79);
  background-color: #080d21;
  scroll-snap-align: center;
  color: #c6c8cf;
`

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 4;
  display: grid;
  margin-left: 50px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  position: relative;
  margin-left: 90px;
  margin-top: 90px;
  width: 80px;
  height: 80px;
`

const Title = styled.p`
  font-weight: 700;
  padding-top: 200px;
  font-size: 48px;
  color: #c6c8cf;
`;

const Desc = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
  color: #c6c8cf;
  margin-right: 240px;
`;

const Line = styled.hr`
  margin: 10px 0px;
  height: 1px;
  background-color: #c6c8cf;
  border-radius: 20px;
`

const Image = styled.img`
  width: 310px;
  height: 580px;
  border-bottom-left-radius: 50px;
`

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  padding-right: 32px;
  background-color: transparent;
  border: 0px;
  font-size: 20px;
  font-weight: 200;
  color: #e9eaee;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`

const DownArrow = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const openCV = () => {
  window.open("../../cv/resume.pdf", "_blank");
}


const About = () => {
    return (
        <Section id="About">
          <Container>
          <Logo src="../../img/Chee_Logo.png" onClick={() => handleClickScroll("Intro")}></Logo>
            <Left>
              <Title>ABOUT</Title>
              <Line></Line>
              <Desc>Hi! I'm Clifton. Currently an undergrad at NUS Computer Science! Areas of interest would be Software Engineering and AI.
                Passionate about music, hiking, cooking and mental health. I enjoy taking in the small things in life. Always curious to
                push myself to learn new technologies!
              </Desc>
              <Button id="viewCVButton" onClick={() => openCV()}>
                <DownArrow src="../../img/white_down_arrow.png"></DownArrow>
                curriculum vitae
              </Button>
            </Left>
            <Right>
              <Image src="../../img/self.jpg"></Image>
            </Right>
          </Container>
        </Section>
    )
}

export default About