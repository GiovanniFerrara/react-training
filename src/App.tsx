import { GlobalStyle } from './theme.tsx'
import styled from '@emotion/styled'


function App() {
  return (
    <AppWrapper>
    <GlobalStyle />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`