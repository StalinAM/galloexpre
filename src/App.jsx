import { ThemeProvider } from 'styled-components'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import ScrollUp from './components/ScrollUp'
import Services from './components/Services'
import GlobalStyles from './Style/GlobalStyles'
import { DarkTheme } from './Style/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Header />
        <main>
          <Home />
          <About />
          <Services />
          <Contact />
          <Footer />
        </main>
        <ScrollUp />
      </ThemeProvider>
    </>
  )
}

export default App
