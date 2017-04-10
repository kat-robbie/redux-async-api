import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadSubreddit = ({dispatch}) => (
  <div>
    <input
      placeholder="Country"
      onKeyUp={ e => { findNews(e, dispatch) }}
    />
  </div>
)

function findNews (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(fetchPosts(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

LoadSubreddit = connect()(LoadSubreddit)

export default LoadSubreddit
