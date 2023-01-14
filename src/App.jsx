import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyles from '../Style/GlobalStyles'
import { DarkTheme } from '../Style/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
