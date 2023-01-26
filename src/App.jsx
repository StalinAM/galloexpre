import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import ScrollUp from './components/ScrollUp'
import Services from './components/Services'
import Whatsapp from './components/Whatsapp'
import GlobalStyles from './Style/GlobalStyles'
import { DarkTheme } from './Style/Theme'

const Container = styled.main`
  @media screen and (max-width: 768px) {
    filter: ${(props) => (props.show ? 'blur(2px)' : 'none')};
    pointer-events: ${(props) => (props.show ? 'none' : '')};
    user-select: ${(props) => (props.show ? 'none' : '')};
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <GlobalStyles toggle={toggle} />
      <ThemeProvider theme={DarkTheme}>
        <Header toggle={toggle} setToggle={setToggle} />
        <Container show={toggle}>
          <Home />
          <About />
          <Services />
          <Contact />
        </Container>
        <Footer />
        <ScrollUp />
        <Whatsapp />
      </ThemeProvider>
    </>
  )
}

export default App
