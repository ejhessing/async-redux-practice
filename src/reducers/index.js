import {combineReducers} from 'redux'

import subreddits from './subreddits'
import subreddit from './subreddit'
import alert from './alert'
import loader from './loader'

export default combineReducers({
  subreddits,
  subreddit,
  alert,
  loader
})
