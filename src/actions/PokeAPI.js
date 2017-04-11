import request from 'superagent'

export const receivePokemon = (pokemon, id, height, type1, type2) => {
  return {
    type: 'RECEIVE_POKEMON',
    pokemon,
    id,
    height,
    type1,
    type2
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
        dispatch(receivePokemon(res.body.name, res.body.id, res.body.height, res.body.types[0].type.name))
      })
  }
}
