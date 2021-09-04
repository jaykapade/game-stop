import React, { useState } from 'react'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'

import logo from '../logos/logo.gif'

import { fetchSearchedGames } from '../redux/actions/gamesAction'
import { useDispatch } from 'react-redux'
import { CLEAR_SEARCH_RESULTS } from '../redux/constants/gamesConstant'

import { fadeIn } from '../animations'

const Nav = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const searchHandler = () => {
    dispatch(fetchSearchedGames(input))
  }

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <img src={logo} alt="logo" />
        <h1>GameStop</h1>
      </Logo>
      <div className="search">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchHandler()}
          value={input}
        />
        <button onClick={searchHandler}>Search</button>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5em;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: #ee4141;
    color: white;
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  img {
    width: 2rem;
    margin-right: 0.5rem;
  }
  padding: 1rem;
  cursor: pointer;
`

export default Nav
