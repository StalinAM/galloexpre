import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../Style/GlobalStyles'
import { DarkTheme } from '../Style/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <div>hola</div>
      </ThemeProvider>
    </>
  )
}

export default App
