import { GET_DETAILS } from '../constants/gamesConstant'

const initState = {
  game: { platforms: [] },
  screenshots: { results: [] },
}

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      }

    default:
      return { ...state }
  }
}

export default detailReducer
