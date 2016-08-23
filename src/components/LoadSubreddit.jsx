import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadSubreddit = ({subreddit, dispatch}) => {
  return (
      <button
        onClick={e => dispatch(fetchPosts(subreddit || 'newzealand'))}>
        Fetch Posts
      </button>
    )
}

function mapStateToProps (state) {
  return {
    subreddit: state.subreddit
  }
}

LoadSubreddit = connect(mapStateToProps)(LoadSubreddit)

export default LoadSubreddit
