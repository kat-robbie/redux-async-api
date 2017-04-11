function pokemon (state = "", action) {
  switch (action.type) {
    case 'RECEIVE_POKEMON':
      console.log(action.pokemon)
      return action.pokemon

    default:
      return state
  }
}

export default pokemon
