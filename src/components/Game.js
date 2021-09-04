import React from 'react'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
//redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../redux/actions/detailAction'
import { Link } from 'react-router-dom'
import { resizeImage } from '../util'
import { popup } from '../animations'

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch()

  const loadDetailhandler = () => {
    //Used to remove background games page scrolling when gamedetails page is open
    document.body.style.overflow = 'hidden'
    // console.log(id)
    dispatch(loadDetail(id))
  }
  return (
    <StyledGame
      onClick={loadDetailhandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={resizeImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30h;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
