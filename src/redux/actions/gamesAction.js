import axios from 'axios'
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from '../../api'
import { FETCH_GAMES, FETCH_SEARCHED_GAME } from '../constants/gamesConstant'

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

export const fetchSearchedGames = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(searchGameURL(game_name))
  // console.log(game_name)
  dispatch({
    type: FETCH_SEARCHED_GAME,
    payload: {
      searched: searchedGames.data.results,
    },
  })
}
