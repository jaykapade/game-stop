import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyles />
      <Route path={['/', '/game/:id']}>
        <Home />
      </Route>
    </>
  )
}

export default App
