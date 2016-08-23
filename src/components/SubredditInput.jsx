import React from 'react'
import {connect} from 'react-redux'
import {setSubbredit} from '../actions'

const SubredditInput = ({dispatch}) => {
  return <input name="subreddit" placeholder="Enter a subreddit"
  onChange={evt => {
    dispatch(setSubbredit(evt.target.value))
  }} />
}

export default connect()(SubredditInput)
