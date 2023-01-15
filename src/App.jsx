import styled, { ThemeProvider } from 'styled-components'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import Services from '../components/Services'
import GlobalStyles from '../Style/GlobalStyles'
import { DarkTheme } from '../Style/Theme'

const Container = styled.main`
  padding: 0 9rem; ;
`
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Header />
        <Container>
          <Home />
          <About />
          <Services />
          <Contact />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
