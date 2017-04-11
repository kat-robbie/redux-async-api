import request from 'superagent'

export const receivePokemon = (pokemon) => {
  return {
    type: 'RECEIVE_POKEMON',
    pokemon
  }
}

export function fetchPokemon (pokemon) {
  return (dispatch) => {
    request
      .get(`http://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePokemon(res.body.name))
      })
  }
}
