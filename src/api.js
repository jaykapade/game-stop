var moment = require('moment')

//Key
const key = `?key=${process.env.REACT_APP_API_KEY}`

//Base URL
const base_url = `https://api.rawg.io/api/games`

//Get Dates
const currentDate = moment().format('YYYY-MM-DD')
const lastYearDate = moment().subtract(1, 'year').format('YYYY-MM-DD')
const nextYearDate = moment().add(1, 'year').format('YYYY-MM-DD')

//Popular Games
const popular_games = `${key}&dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `${key}&dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`
const new_games = `${key}&dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`

//Game Details
export const gameDetailsURL = (id) => `${base_url}/${id}${key}`

//Game Screenshots
export const gameScreenshotsURL = (id) => `${base_url}/${id}/screenshots${key}`

//Search game
export const searchGameURL = (game_name) =>
  `${base_url}${key}&search=${game_name}&page_size=9`
