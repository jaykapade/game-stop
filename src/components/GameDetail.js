import React from 'react'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resizeImage } from '../util'

//Logo Images
import playstation from '../logos/playstation.svg'
import steam from '../logos/steam.svg'
import xbox from '../logos/xbox.svg'
import nintendo from '../logos/nintendo.svg'
import apple from '../logos/apple.svg'
import gamepad from '../logos/gamepad.svg'

//Star Images
import starEmpty from '../logos/star-empty.png'
import starFull from '../logos/star-full.png'

const GameDetail = ({ gameId }) => {
  const history = useHistory()

  //Exit GameDetail Page
  const exitDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  //Ratings
  const getRatings = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />)
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />)
      }
    }
    return stars
  }

  //Platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation
      case 'Xbox One':
        return xbox
      case 'PC':
        return steam
      case 'Nintendo Switch':
        return nintendo
      case 'iOS':
        return apple
      default:
        return gamepad
    }
  }

  const { screenshots, game, isLoading } = useSelector((state) => state.detail)
  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      {!isLoading && (
        <Detail layoutId={gameId}>
          <Stats>
            <div className="rating">
              <h3>{game.name}</h3>
              {getRatings()}
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map((data) => (
                  <img
                    alt={data.platform.name}
                    key={data.platform.id}
                    src={getPlatform(data.platform.name)}
                  />
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img
              layoutId={`image ${gameId}`}
              src={resizeImage(game.background_image, 1280)}
              alt={game.background_image}
            />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>

          <Gallery>
            {screenshots.results.map((screenshot) => (
              <img
                src={resizeImage(screenshot.image, 1280)}
                alt={screenshot.image}
                key={screenshot.id}
              />
            ))}
          </Gallery>
        </Detail>
      )}
    </CardShadow>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ee4141;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
`
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1rem;
    display: inline;
  }
`
const Info = styled(motion.div)`
  text-align: center;
`

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 2rem;
  }
`

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`
const Gallery = styled(motion.div)`
  img {
    margin-bottom: 2rem;
  }
`

export default GameDetail
