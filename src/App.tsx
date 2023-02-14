import './reset.css'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './containers/Router'



function App() {



  return (

    <ThemeProvider theme={theme}>

      <Router />

    </ThemeProvider>


  )

}

export default App

