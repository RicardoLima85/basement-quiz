import GlobalStyle from './styles/global';
import styled  from 'styled-components'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes'
import { PlayerProvider } from './Provider/Player'


const Container = styled.main`
  background-color: #FAFAFA;
  width: 100%;
  height: 100vh;
`

const App = () => {

  return (
    <PlayerProvider>
      <Container>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </PlayerProvider>
  )
}

export default App;
