import request from 'superagent'

export const receivePosts = (subreddit, posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    request
      .get(`http://www.reddit.com/r/${subreddit}.json`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(clearPost())
        dispatch(receivePosts(subreddit, res.body.data.children))
      })
  }
}

export const setSubbredit = (subreddit) => {
  return {
    type: 'SET_SUBREDDIT',
    subreddit
  }
}

const clearPost = () => {
  return {
    type: 'CLEAR_POST'
  }
}
