import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Route path={['/', '/game/:id']}>
        <Home />
      </Route>
    </>
  )
}

export default App
