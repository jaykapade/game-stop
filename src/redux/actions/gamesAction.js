import axios from 'axios'
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../../api'
import { FETCH_GAMES } from '../constants/gamesConstant'

//Action Creator

export const loadGames = () => async (dispatch) => {
  const popular_games = await axios.get(popularGamesURL())
  const new_games = await axios.get(newGamesURL())
  const upcoming_games = await axios.get(upcomingGamesURL())

  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popular_games.data.results,
      newGames: new_games.data.results,
      upcoming: upcoming_games.data.results,
    },
  })
}
