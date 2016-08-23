import {combineReducers} from 'redux'

import subreddits from './subreddits'
import subreddit from './subreddit'

export default combineReducers({
  subreddits,
  subreddit
})
