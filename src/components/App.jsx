import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import Pokemon from './Pokemon'
import PokemonContainer from '../containers/PokemonContainer'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <SubredditContainer />
    <Pokemon />
    <PokemonContainer />
  </div>
)

export default App
