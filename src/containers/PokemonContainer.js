import {connect} from 'react-redux'

import Pokemon from '../components/Pokemon'

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon
  }
}

export default connect(
  mapStateToProps
)(Pokemon)
