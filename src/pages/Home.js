import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesAction'
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
import { useLocation } from 'react-router-dom'

//Styling
import styled from 'styled-components'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import cancel from '../logos/cancel.svg'
import { CLEAR_SEARCH_RESULTS } from '../redux/constants/gamesConstant'
import { fadeIn } from '../animations'

const Home = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const gameId = location.pathname.split('/')[2]

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games,
  )

  const clearSearchHandler = () => {
    dispatch({ type: CLEAR_SEARCH_RESULTS })
  }

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {gameId && <GameDetail gameId={gameId} />}
        </AnimatePresence>
        {searched.length ? (
          <SearchResults>
            <h2 style={{ display: 'inline-flex' }}>
              Searched Games{' '}
              <img src={cancel} alt="cancel" onClick={clearSearchHandler} />
            </h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </SearchResults>
        ) : (
          ''
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 4rem 0rem;
  }
`
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`
const SearchResults = styled(motion.div)`
  h2 {
    img {
      margin-left: 0.5rem;
      width: 1rem;
      height: 1rem;
    }
  }
`
export default Home
