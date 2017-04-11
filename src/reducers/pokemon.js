function pokemon (state = "", action) {
  switch (action.type) {
    case 'RECEIVE_POKEMON':
      console.log(action)
      return (action.pokemon.charAt(0).toUpperCase()
        + action.pokemon.slice(1) + " - "
        + "id: " + action.id
        + ", Height: " + action.height
        + ", Type 1: " + action.type1
        + ", Type 2: " + action.type2)

    default:
      return state
  }
}

export default pokemon
