import {
  CLEAR_SEARCH_RESULTS,
  FETCH_GAMES,
  FETCH_SEARCHED_GAME,
} from '../constants/gamesConstant'

const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
}

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      }
    case FETCH_SEARCHED_GAME:
      return {
        ...state,
        searched: action.payload.searched,
      }
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searched: [],
      }

    default:
      return { ...state }
  }
}

export default gamesReducer
