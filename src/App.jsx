import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
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

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Header toggle={toggle} setToggle={setToggle} />
        <main>
          <Home />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
        <Whatsapp />
      </ThemeProvider>
    </>
  )
}

export default App
