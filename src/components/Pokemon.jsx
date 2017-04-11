import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchPokemon} from '../actions/PokeAPI'

let Pokemon = (props) => {
  return (
    <div>
        <input
          placeholder="Pokemon Search"
          onKeyUp={ e => { findPokemon(e, props.dispatch) }}
        />
      <p>{props.pokemon}</p>
    </div>
  )
}

function findPokemon (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(fetchPokemon(e.currentTarget.value.toLowerCase()))
    e.currentTarget.value = ''
  }
}

Pokemon = connect()(Pokemon)

export default Pokemon
