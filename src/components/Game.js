import React from 'react'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Game = ({ name, released, image }) => {
  return (
    <StyledGame>
      <h3>Game Name: {name}</h3>
      <p>Released Date: {released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30h;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
