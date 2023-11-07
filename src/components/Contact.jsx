import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Section = styled.div`
  height: 100vh;
  background-color: #080d21;
  scroll-snap-align: center;
  color: #c6c8cf;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: #0077b5; /* LinkedIn color */
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2867b2; /* LinkedIn hover color */
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ivvg78r",
        "template_2t3kw9m",
        ref.current,
        "pLT_ix5r8UsJbm_hs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="Contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. I'll get back to you soon :)"}
            <SocialLinksContainer>
              <a href="https://github.com/cliftonchee" target="_blank" rel="noopener noreferrer">
                <SocialIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/clifton-chee-129b59226/" target="_blank" rel="noopener noreferrer">
                <SocialIcon icon={faLinkedin} size="2x" />
              </a>
            </SocialLinksContainer>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;