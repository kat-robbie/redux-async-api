import {combineReducers} from 'redux'

import subreddits from './subreddits'
import pokemon from './pokemon'

export default combineReducers({
  subreddits,
  pokemon
})
