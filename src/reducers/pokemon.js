function pokemon (state = "", action) {
  switch (action.type) {
    case 'RECEIVE_POKEMON':
      return (action.pokemon.charAt(0).toUpperCase()
       + action.pokemon.slice(1)
       + " " + "id: " + action.id
       + " " + "Height: " + action.height
       +  " " + "Type: " + action.type1)


    default:
      return state
  }
}

export default pokemon
