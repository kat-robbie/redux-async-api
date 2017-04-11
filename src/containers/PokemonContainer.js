import {connect} from 'react-redux'

import Pokemon from '../components/Pokemon'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    pokemon: state.pokemon
  }
}

export default connect(
  mapStateToProps
)(Pokemon)
