import React, {PropTypes} from 'react'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        date={convertEpoch(post.created)}
        summary={post.selftext.substring(0,100)}
        url={post.url}
        />
    )}
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

export default Subreddit

function convertEpoch (epochTime) {
  var d = new Date(0)
  d.setUTCSeconds(epochTime)
  return d.toString()
}
