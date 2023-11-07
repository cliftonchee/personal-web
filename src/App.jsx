import styled from "styled-components"
import Intro from "./components/Intro"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import NavLinks from "./components/NavLinks"

// Primary colour: #080d21
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  // background: url("../../img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
    </Container>
  )
}

export default App
