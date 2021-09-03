import axios from 'axios'
import { gameDetailsURL, gameScreenshotsURL } from '../../api'
import { GET_DETAILS, LOADING_DETAILS } from '../constants/gamesConstant'

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_DETAILS,
  })

  const detailData = await axios.get(gameDetailsURL(id))
  const screenshots = await axios.get(gameScreenshotsURL(id))

  dispatch({
    type: GET_DETAILS,
    payload: { game: detailData.data, screenshots: screenshots.data },
  })
}
